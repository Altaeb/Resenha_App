import React from 'react';
import { View, ScrollView } from 'react-native';
import withHeader from '../../hoc/withHeader';
import Picker from '../../components/Picker';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import { WHITE, SHAMROCK } from '../../config/colors';
import { Formik, Field } from 'formik';
import { TextInput, TextInputMasked } from '../../components/TextInput';

const PropertiesDetail = props => (
    <ScrollView>
        <MainLayout>
            <Formik
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values));
                    setTimeout(() => {
                        props.navigation.goBack(null);
                        actions.setSubmitting(false);
                    }, 1000)
                }}
            >
                {formikProps => (
                    <>
                        <Field
                            label="Nome da Propriedade"
                            placeholder="Fazenda do Mato Dentro"
                            name="propertie_name"
                            component={TextInput}
                        />
                        <Field
                            label="Nº Cadastro Estadual"
                            placeholder="000.000.000-00"
                            name="state_registration"
                            component={TextInputMasked}
                            type={'cpf'}
                        />
                        <Field
                            label="Telefone"
                            placeholder="(31) 99999-9999"
                            name="state_registration"
                            component={TextInputMasked}
                            type={'cel-phone'}
                        />
                        <Field
                            placeholder={'Selecione o Município'}
                            label="Município"
                            name="county"
                            component={Picker}
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />
                        <Field
                            placeholder={'UF'}
                            label="Rio Grande do Norte"
                            name="uf"
                            component={Picker}
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />
                        <Field
                            placeholder={'Tipo de Propriedade'}
                            label="Fazenda"
                            name="propertie_type"
                            component={Picker}
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2, paddingRight: 4 }}>
                                <Field
                                    label="Nº de Equídeos existentes"
                                    placeholder="0000"
                                    name="quines_number"
                                    component={TextInput}
                                />
                            </View>
                            <View style={{ flex: 2, paddingLeft: 4 }} />
                        </View>

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

export default withHeader('Detalhe de Propriedade', 'icon-arrow-left')(PropertiesDetail);
