import React from 'react';
import { View, ScrollView } from 'react-native';
import withHeader from '../../hoc/withHeader';
import Picker from '../../components/Picker';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import { WHITE, SHAMROCK } from '../../config/colors';
import { Formik, Field } from 'formik';
import { TextInput, TextInputMasked } from '../../components/TextInput';

const OrderDetail = props => (
    <ScrollView>
        <MainLayout>
            <Formik
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values));
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 1000)
                }}
            >
                {formikProps => (
                    <>
                        <Field
                            label="Nome do Proprietário"
                            placeholder="Eduardo Rodrigues Gomes"
                            name="name_owner"
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
                            label="Celular*"
                            placeholder="(31) 99999-9999"
                            name="celphone"
                            type={'cel-phone'}
                            component={TextInputMasked}
                        />
                        <Field
                            label="CEP*"
                            placeholder="00000-000"
                            name="cep"
                            type={'custom'}
                            component={TextInputMasked}
                            options={{
                                mask: '99999-999'
                            }}
                        />
                        <Field
                            label="Rua*"
                            placeholder="Rua Sebastião Salviano de Matos"
                            name="street"
                            component={TextInput}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2, paddingRight: 4 }}>
                                <Field
                                    label="Número"
                                    placeholder="480"
                                    component={TextInput}
                                    name="number"
                                />
                            </View>
                            <View style={{ flex: 2, paddingLeft: 4 }}>
                                <Field
                                    label="Complemento"
                                    placeholder="0000"
                                    component={TextInput}
                                    name="complement"
                                />
                            </View>
                        </View>
                        <Field
                            label="Bairro*"
                            placeholder="Barro Vermelho"
                            component={TextInput}
                            name="neighborhood"
                        />
                        <Field
                            placeholder={'Selecione a cidade'}
                            label="Cidade"
                            component={Picker}
                            name="city"
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />
                        <Field
                            component={Picker}
                            placeholder={'Selecione o Estado'}
                            label="Estado"
                            name="state"
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />
                        <Field
                            label="Número de Inscrição de Produtor Rural"
                            placeholder="00000000000"
                            name="registration_number"
                            component={TextInput}
                        />
                        
                        <CustomButton
                            text="Salvar Alterações"
                            color={WHITE}
                            backgroundColor={SHAMROCK}
                            onPress={() => formikProps.validateForm().then(() => {
                                formikProps.submitForm()
                            })}
                        />
                    </>
                )}
            </Formik>
        </MainLayout>
    </ScrollView>
);

export default withHeader('Detalhe do Proprietário', 'icon-arrow-left')(OrderDetail);
