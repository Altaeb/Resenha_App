import React from "react";
import {
	View,
	ScrollView,
	SafeAreaView,
	TextInput,
	Text,
	KeyboardAvoidingView,
	TouchableOpacity,
} from "react-native";
import { TextInput as input, TextInputMasked } from "../../components/TextInput";
import MainLayout from "../../components/MainLayout";
import { TextNunitoBold } from "../../components/TextNunito";
import CustomButton from "../../components/CustomButton";
import { PICTON_BLUE, WHITE, SILVER_CHALICE } from "../../config/colors";
import { Formik, Field } from "formik";
import styles from "./styles";
import axios from "axios";
import firebase from "firebase";
import Spinner from "react-native-loading-spinner-overlay";
import postToFunctions from "../../helpers/postToFunctions";
import _ from "lodash";
import ResenhaIcon from "../../components/ResenhaIcon";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spinner: false,
			error: {},
		};
	}

	componentDidMount() {}

	formSignup(values) {
		console.log(values);
		const error = {};
		if (!values.name) error.name = true;
		if (!values.last_name) error.last_name = true;
		if (!values.cpf) error.cpf = true;
		if (!values.birth) error.birth = true;
		if (!values.cep) error.cep = true;
		if (!values.street) error.street = true;
		if (!values.number) error.number = true;
		if (!values.neighborhood) error.neighborhood = true;
		if (!values.city) error.city = true;
		if (!values.state) error.state = true;
		if (!values.crmv) error.crmv = true;
		if (!values.cellphone) error.cellphone = true;
		if (!values.email) error.email = true;
		if (!values.password) error.password = true;
		if ((values.password = !values.confirm_password)) alert("As senhas não conferem.");

		return error;
	}

	async registerVeterinary(veterinary) {
		//console.log(veterinary, this.state.logradouro)
		this.setState({ error: {} });
		console.log(veterinary);
		if (veterinary) {
			this.setState({ spinner: true });
			veterinary.cep = this.state.cep;
			veterinary.street = this.state.logradouro ? this.state.logradouro : veterinary.street;
			veterinary.state = this.state.state ? this.state.state : veterinary.state;
			veterinary.city = this.state.city ? this.state.city : veterinary.city;
			veterinary.neighborhood = this.state.neighborhood
				? this.state.neighborhood
				: veterinary.neighborhood;
			veterinary.active = false;
			veterinary.byApp = true;

			const error = this.formSignup(veterinary);
			if (_.size(error) > 0) {
				this.setState({ error, spinner: false });
			} else {
				const { data } = await postToFunctions("createVeterinary", { veterinary });
				if (data.success) {
          this.setState({ spinner: false });
          alert("Cadastro feito com sucesso. Por favor, aguarde até contato dos administradores para acessar a plataforma.")
					this.props.navigation.navigate("SignIn");
				} else {
					this.setState({ spinner: false });
					alert(data.message);
				}
			}
		}
	}

	async getAdress(cep) {
		if (cep) this.errorClear(cep, "cep");
		const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
		const address = result.data;
		this.setState({
			cep: cep,
			logradouro: address.logradouro,
			city: address.localidade,
			neighborhood: address.bairro,
			state: address.uf,
		});
		if (address.logradouro) this.errorClear(address.logradouro, "street");
		if (address.localidade) this.errorClear(address.localidade, "city");
		if (address.bairro) this.errorClear(address.bairro, "neighborhood");
		if (address.uf) this.errorClear(address.uf, "state");
		//	console.log("---->", address);
	}

	errorClear(value, key) {
		if (value)
			this.setState(prevState => ({
				error: {
					...prevState.error,
					[key]: false,
				},
			}));
	}

	render() {
		return (
			<SafeAreaView>
				<Spinner
					visible={this.state.spinner}
					textContent={"Carregando..."}
					textStyle={styles.spinnerTextStyle}
				/>
				<ScrollView>
					<MainLayout>
						<View >
              <TextNunitoBold style={styles.screenTitle}>BEM- VINDO AO RESENHA APP!</TextNunitoBold>
							<TouchableOpacity
								onPress={() => {
                  this.props.navigation.navigate("SignIn")
								}}
								style={styles.icon}>
								<ResenhaIcon name={"icon-arrow-left"} size={10} color={SILVER_CHALICE} />
							</TouchableOpacity>
						</View>
						<View style={styles.form}>
							<KeyboardAvoidingView behavior="padding" enabled>
								<Formik
									//validationSchema={formSignup}
									onSubmit={(values, actions) => {
										this.registerVeterinary(values);
									}}>
									{formikProps => (
										<>
											<Field
												label="Nome*"
												placeholder="Ex: José"
												name="name"
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "name");
												}}
												component={input}
											/>
											{this.state.error.name ? (
												<Text style={styles.textError}>Preencha o nome</Text>
											) : (
												<></>
											)}
											<Field
												label="Sobrenome Completo*"
												placeholder="Ex: Almeida Ferreira"
												name="last_name"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "last_name");
												}}
											/>
											{this.state.error.last_name ? (
												<Text style={styles.textError}>Preencha o sobrenome</Text>
											) : (
												<></>
											)}

											<Field
												label="CPF*"
												placeholder="000.000.000-00"
												name="cpf"
												component={TextInputMasked}
												type={"cpf"}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "cpf");
												}}
											/>
											{this.state.error.cpf ? (
												<Text style={styles.textError}>Preencha o CPF</Text>
											) : (
												<></>
											)}
											<Field
												label="Data de Nascimento*"
												placeholder="DD/MM/AAAA"
												name="birth"
												component={TextInputMasked}
												type={"datetime"}
												options={{
													format: "DD/MM/YYYY",
												}}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "birth");
												}}
											/>
											{this.state.error.birth ? (
												<Text style={styles.textError}>Preencha a data de nascimento</Text>
											) : (
												<></>
											)}
											<Text style={styles.text}>CEP*</Text>
											<TextInput
												placeholder="00000-000"
												style={styles.input}
												onChangeText={value => {
													this.getAdress(value);
												}}
											/>
											{this.state.error.cep ? (
												<Text style={styles.textError}>Preencha o CEP</Text>
											) : (
												<></>
											)}
											<Field
												value={this.state.logradouro}
												label="Rua*"
												placeholder="Nome da Rua"
												name="street"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "street");
												}}
											/>
											{this.state.error.street ? (
												<Text style={styles.textError}>Preencha a rua</Text>
											) : (
												<></>
											)}
											<View style={{ flexDirection: "row" }}>
												<View style={{ flex: 2, paddingRight: 4 }}>
													<Field
														label="Número*"
														placeholder="000"
														name="number"
														component={input}
														onChange={values => {
															this.errorClear(values.nativeEvent.text, "number");
														}}
													/>
													{this.state.error.number ? (
														<Text style={styles.textError}>Preencha o numero</Text>
													) : (
														<></>
													)}
												</View>
												<View style={{ flex: 2, paddingLeft: 4 }}>
													<Field
														label="Complemento"
														placeholder="000"
														name="complement"
														component={input}
														onChange={values => {
															this.errorClear(values.nativeEvent.text, "complement");
														}}
													/>
												</View>
											</View>

											<Field
												value={this.state.neighborhood}
												label="Bairro*"
												placeholder="Nome do Bairro"
												name="neighborhood"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "neighborhood");
												}}
											/>
											{this.state.error.neighborhood ? (
												<Text style={styles.textError}>Preencha o bairro</Text>
											) : (
												<></>
											)}
											<Field
												value={this.state.city}
												label="Cidade*"
												placeholder="Belo Horizonte"
												name="city"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "city");
												}}
											/>
											{this.state.error.city ? (
												<Text style={styles.textError}>Preencha a cidade</Text>
											) : (
												<></>
											)}
											<Field
												value={this.state.state}
												label="Estado*"
												placeholder="MG"
												name="state"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "state");
												}}
											/>
											{this.state.error.state ? (
												<Text style={styles.textError}>Preencha o estado</Text>
											) : (
												<></>
											)}
											<Field
												label="CRMV*"
												placeholder="0000"
												name="crmv"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "crmv");
												}}
											/>
											{this.state.error.crmv ? (
												<Text style={styles.textError}>Preencha o CRMV</Text>
											) : (
												<></>
											)}
											<View style={{ flexDirection: "row" }}>
												<View style={{ flex: 2, paddingRight: 4 }}>
													<Field
														label="Habilitação p/ Mormo"
														placeholder="00000"
														name="mormo_license"
														component={TextInputMasked}
														type={"custom"}
														options={{
															mask: "99999",
														}}
													/>
												</View>
												<View style={{ flex: 2, paddingLeft: 4 }}>
													<Field
														label="Portaria Habilitação"
														placeholder="MM/AAAA"
														name="ordinance_license"
														component={TextInputMasked}
														type={"custom"}
														options={{
															mask: "99/9999",
														}}
													/>
												</View>
											</View>

											<Field
												label="Celular*"
												placeholder="(31) 99999-9999"
												name="cellphone"
												component={TextInputMasked}
												type={"cel-phone"}
												options={{
													maskType: "BRL",
													withDDD: true,
													dddMask: "(99) ",
												}}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "cellphone");
												}}
											/>
											{this.state.error.cellphone ? (
												<Text style={styles.textError}>Preencha o telefone</Text>
											) : (
												<></>
											)}
											<Field
												label="Email*"
												placeholder="email@provedor"
												name="email"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "email");
												}}
											/>
											{this.state.error.email ? (
												<Text style={styles.textError}>Preencha o email</Text>
											) : (
												<></>
											)}
											<Field
												label="Senha*"
												placeholder="**************"
												secureTextEntry
												name="password"
												component={input}
												onChange={values => {
													this.errorClear(values.nativeEvent.text, "password");
												}}
											/>
											{this.state.error.password ? (
												<Text style={styles.textError}>Preencha a senha</Text>
											) : (
												<></>
											)}
											<Field
												label="Confirmar senha*"
												placeholder="**************"
												secureTextEntry
												name="confirm_password"
												component={input}
											/>

											<CustomButton
												text="Cadastre-se"
												color={WHITE}
												backgroundColor={PICTON_BLUE}
												onPress={formikProps.submitForm}
											/>
										</>
									)}
								</Formik>
							</KeyboardAvoidingView>
						</View>
					</MainLayout>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default SignUp;
