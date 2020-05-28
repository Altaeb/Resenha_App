import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import MainLayout from "../../components/MainLayout";
import { TextInput, TextInputMasked } from "../../components/TextInput";
import TextInputPassword from "../../components/TextInputPassword";
import { TextNunitoBold } from "../../components/TextNunito";
import Picker from "../../components/Picker";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import DefaultModal from "../../components/DefaultModal";
import { WHITE, PICTON_BLUE, MARINER, SHAMROCK } from "../../config/colors";
import { Formik, Field } from "formik";
import { formSignin, formModalForgotPass } from "./validationSchemas/signin";
import firebase from "firebase";
import axios from "axios";
import _ from "lodash";
import Spinner from 'react-native-loading-spinner-overlay';
import postToFunctions from '../../helpers/postToFunctions';

const NewPassword = screenProps => (
	<DefaultModal
		onPress={() => screenProps.changeModalVisibility(false)}
		iconSize={45}
		iconModal={"icon-padlock-confirm"}
		iconColor={SHAMROCK}
		subtitle="NOVA SENHA"
		text="O email para recuperar sua senha foi enviado! Por favor verifique as instruções para criar sua nova senha! "
	/>
);

const ForgotPassword = screenProps => (
	<DefaultModal
		onPress={() => screenProps.changeModalVisibility(false)}
		iconSize={45}
		iconModal={"icon-padlock"}
		iconColor={PICTON_BLUE}
		subtitle="ESQUECEU SUA SENHA?"
		text="Digite seu e-mail ou login e enviaremos instruções para você criar sua nova senha.">
		<Formik
			validationSchema={formModalForgotPass}
			onSubmit={(values, actions) => {
				alert(JSON.stringify(values));
				setTimeout(() => {
					screenProps.changeModalVisibility(true, NewPassword(screenProps));
					actions.setSubmitting(false);
				}, 1000);
			}}>
			{formikProps => (
				<>
					<Field
						label="Email:"
						placeholder="email@provedor.com.br"
						placeHolderColor={WHITE}
						name="email"
						component={TextInput}
						style={{ borderColor: WHITE, color: WHITE }}
						labelColor={WHITE}
						autoCapitalize={"none"}
					/>
					<CustomButton
						text="Enviar"
						color={WHITE}
						backgroundColor={SHAMROCK}
						onPress={() => {
							formikProps.handleSubmit();
						}}
					/>
				</>
			)}
		</Formik>
	</DefaultModal>
);

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			international: "",
      states: [],
      spinner:false
		};
	}

	async componentDidMount() {
		var states = [];
		const result = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
		const statesOrdened = _.orderBy(result.data, ["nome"], ["asc"]);
		await _.each(statesOrdened, state => {
			states.push({ label: state["nome"], value: state["sigla"] });
		});
		this.setState({ states });
	}

	async autenticationUser(values) {
    this.setState({spinner:true})
        const { data } = await  postToFunctions("getVeterinaryByCrvm",{ values })
        if (data.success) {
          firebase
            .auth()
            .signInWithEmailAndPassword(data.veterinary.email, values.password)
            .then(userData => {
              this.setState({spinner:false})
              this.props.navigation.navigate("Exams");
            });
        }else{
          this.setState({spinner:false})
          alert(data.message)
        }
		
	}

	render() {
		return (
			<MainLayout>
				<Spinner
					visible={this.state.spinner}
					textContent={"Carregando..."}
					textStyle={styles.spinnerTextStyle}
				/>
				<View style={styles.logo}>
					<Image source={require("../../assets/Logo-Resenha.png")} />
				</View>
				<Formik
					//validationSchema={formSignin}
					onSubmit={(values, actions) => this.autenticationUser(values, actions)}>
					{formikProps => (
						<>
							<Field
								label="CRMV"
								placeholder="0000"
								name="crmv"
								component={TextInputMasked}
								autoCapitalize={"none"}
								type={"custom"}
								options={{
									mask: "9999",
								}}
							/>

							<Field
								label="Estado"
								placeholder={"Selecione o estado"}
								name="state"
								component={Picker}
								items={this.state.states}
							/>

							<Field
								label="Senha"
								placeholder="*******"
								name="password"
								component={TextInputPassword}
								autoCapitalize={"none"}
							/>

							<CustomButton
								text="Entrar"
								color={WHITE}
								backgroundColor={PICTON_BLUE}
								onPress={formikProps.submitForm}
							/>
						</>
					)}
				</Formik>
				<TouchableOpacity
					style={{ alignItems: "center" }}
					onPress={() =>
						this.props.screenProps.changeModalVisibility(
							true,
							ForgotPassword(this.props.screenProps),
						)
					}>
					<TextNunitoBold style={styles.fogotpass}>Esqueceu sua senha?</TextNunitoBold>
				</TouchableOpacity>

				<CustomButton
					text="Cadastre-se"
					color={MARINER}
					backgroundColor={WHITE}
					style={{ borderWidth: 1, borderColor: MARINER }}
					onPress={() => this.props.navigation.navigate("SignUp")}
				/>
			</MainLayout>
		);
	}
}



export default Login;
