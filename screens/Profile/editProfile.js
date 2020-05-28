import React from 'react';
import withHeader from '../../hoc/withHeader';
import { View, ScrollView } from 'react-native';
import { TextInput, TextInputMasked } from '../../components/TextInput';
import CustomButton from '../../components/CustomButton';
import MainLayout from '../../components/MainLayout';
import { WHITE, PICTON_BLUE } from '../../config/colors';
import ImageProfile from '../../components/ImageProfile';
import ImageUpload from '../../components/ImageUpload';
import { Formik, Field } from 'formik';
import { formEditProfile } from './validationSchemas/profile';

class EditProfile extends React.PureComponent {
    render() {
        return (
            <ScrollView>
                <MainLayout>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ImageUpload fromCamera path="profile">
                            <ImageProfile />
                        </ImageUpload>
                    </View>

                    <Formik
                        validationSchema={formEditProfile}
                        onSubmit={(values, actions) => {
                            alert(JSON.stringify(values));
                            setTimeout(() => {
                                actions.setSubmitting(false);
                                this.props.navigation.navigate('Exams');
                            }, 1000)
                        }}
                    >
                        {formikProps => (
                            <>
                                <Field
                                    label="Nome"
                                    placeholder="Ex: José"
                                    name="name"
                                    component={TextInput}
                                />
                                <Field
                                    label="Sobrenome Completo*"
                                    placeholder="Ex: Almeida Ferreira"
                                    name="last_name"
                                    component={TextInput}
                                />
                                <Field
                                    label="CPF*"
                                    placeholder="000.000.000-00"
                                    name="cpf"
                                    component={TextInputMasked}
                                    type={'cpf'}
                                />
                                <Field
                                    label="Data de Nascimento"
                                    placeholder="DD/MM/AAAA"
                                    name="birth"
                                    component={TextInputMasked}
                                    type={'datetime'}
                                    options={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                />
                                <Field
                                    label="CEP*"
                                    placeholder="00000-000"
                                    name="cep"
                                    component={TextInputMasked}
                                    type={'custom'}
                                    options={{
                                        mask: '99999-999'
                                    }}
                                />
                                <Field
                                    label="Rua*"
                                    placeholder="Nome da Rua"
                                    name="street"
                                    component={TextInput}
                                />

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 2, paddingRight: 4 }}>
                                        <Field
                                            label="Número*"
                                            placeholder="000"
                                            name="number"
                                            component={TextInput}
                                        />
                                    </View>
                                    <View style={{ flex: 2, paddingLeft: 4 }}>
                                        <Field
                                            label="Complemento*"
                                            placeholder="000"
                                            name="complement"
                                            component={TextInput}
                                        />
                                    </View>
                                </View>

                                <Field
                                    label="Bairro*"
                                    placeholder="Nome do Bairro"
                                    name="neighborhood"
                                    component={TextInput}
                                />

                                <Field
                                    label="Cidade*"
                                    placeholder="Belo Horizonte"
                                    name="city"
                                    component={TextInput}
                                />
                                <Field
                                    label="Estado*"
                                    placeholder="Minas Gerais"
                                    name="state"
                                    component={TextInput}
                                />

                                <Field
                                    label="CRMV*"
                                    placeholder="0000"
                                    name="crmv"
                                    component={TextInput}
                                />

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 2, paddingRight: 4 }}>
                                        <Field
                                            label="Habilitação p/ Mormo*"
                                            placeholder="00000"
                                            name="mormo_license"
                                            component={TextInputMasked}
                                            type={'custom'}
                                            options={{
                                                mask: '99999'
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 2, paddingLeft: 4 }}>
                                        <Field
                                            label="Portaria Habilitação*"
                                            placeholder="MM/AAAA"
                                            name="ordinance_license"
                                            component={TextInputMasked}
                                            type={'custom'}
                                            options={{
                                                mask: '99/9999'
                                            }}
                                        />
                                    </View>
                                </View>

                                <Field
                                    label="Celular*"
                                    placeholder="(31) 99999-9999"
                                    name="cellphone"
                                    component={TextInputMasked}
                                    type={'cel-phone'}
                                    options={{
                                        maskType: 'BRL',
                                        withDDD: true,
                                        dddMask: '(99) '
                                    }}
                                />

                                <Field
                                    label="Email*"
                                    placeholder="email@provedor"
                                    name="email"
                                    component={TextInput}
                                />

                                <Field
                                    label="Senha*"
                                    placeholder="**************"
                                    secureTextEntry
                                    name="password"
                                    component={TextInput}
                                />
                                <Field
                                    label="Confirmar senha*"
                                    placeholder="**************"
                                    secureTextEntry
                                    name="confirm_password"
                                    component={TextInput}
                                />


                                <CustomButton
                                    text="Cadastre-se"
                                    color={WHITE}
                                    backgroundColor={PICTON_BLUE}
                                    onPress={() => formikProps.validateForm().then(() => {
                                        this.props.navigation.navigate('Exams');
                                        formikProps.submitForm()
                                    })}
                                />
                            </>
                        )}
                    </Formik>
                </MainLayout>
            </ScrollView>
        )
    }
}

export default withHeader('Editar Perfil', 'icon-arrow-left')(EditProfile)