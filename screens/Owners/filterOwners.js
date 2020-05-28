import React from 'react';
import { View } from 'react-native';
import withHeader from '../../hoc/withHeader';
import Picker from '../../components/Picker';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import { WHITE, PICTON_BLUE } from '../../config/colors';
import { Formik, Field } from 'formik';

const FilterOwner = props => (
    <MainLayout>
        <View>
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
                            name="propertie_name"
                            component={Picker}
                            placeholder={'Nome do Proprietário'}
                            label="Nome da Propriedade"
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />

                        <Field
                            name="city"
                            component={Picker}
                            placeholder={'Cidade'}
                            label="Selecione a Cidade"
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />
                        <Field
                            name="state"
                            component={Picker}
                            placeholder={'Estado'}
                            label="Selecione o Estado"
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />
                        <Field
                            name="propertie"
                            component={Picker}
                            placeholder={'Tipo de Propriedade'}
                            label="Fazenda"
                            items={[
                                { label: '1', value: 'teste' }
                            ]}
                        />

                        <CustomButton
                            text="Pesquisar"
                            color={WHITE}
                            backgroundColor={PICTON_BLUE}
                            iconColor={WHITE}
                            onPress={() => formikProps.validateForm().then(() => {
                                formikProps.submitForm()
                            })}
                        />
                    </>
                )}
            </Formik>
        </View>
    </MainLayout>
);

export default withHeader('Filtros', 'icon-arrow-left')(FilterOwner);
