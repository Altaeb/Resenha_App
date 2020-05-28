import React from 'react';
import { View, ScrollView } from 'react-native';
import withHeader from '../../hoc/withHeader';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import { WHITE, PICTON_BLUE } from '../../config/colors';
import { Formik, Field } from 'formik';
import { TextInput, TextInputMasked } from '../../components/TextInput';

const FilterExam = props => (
    <ScrollView>
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
                                label="Número do Exame"
                                placeholder="00000/00"
                                name="exam_number"
                                component={TextInput}
                            />
                            <Field
                                label="Nome do Animal"
                                placeholder="Nome do Animal"
                                name="animal_name"
                                component={TextInput}
                            />
                            <Field
                                label="Proprietário"
                                placeholder="Nome do Proprietário"
                                name="owner"
                                component={TextInput}
                            />

                            <Field
                                label="Propriedade"
                                placeholder="Nome da Propriedade"
                                name="propertie"
                                component={TextInput}
                            />

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 2, paddingRight: 4 }}>
                                    <Field
                                        label="Data Inicial"
                                        placeholder="00/00/0000"
                                        name="initial_data"
                                        component={TextInputMasked}
                                        type={'datetime'}
                                        options={{
                                            format: 'DD/MM/YYYY'
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 2, paddingLeft: 4 }}>
                                    <Field
                                        label="Data Final"
                                        placeholder="00/00/0000"
                                        name="final_data"
                                        component={TextInputMasked}
                                        type={'datetime'}
                                        options={{
                                            format: 'DD/MM/YYYY'
                                        }}
                                    />
                                </View>
                            </View>

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
    </ScrollView>
);

export default withHeader('Filtros', 'icon-arrow-left')(FilterExam);
