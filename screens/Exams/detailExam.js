import React from 'react';
import { View, ScrollView } from 'react-native';
import withHeader from '../../hoc/withHeader';
import Picker from '../../components/Picker';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import { WHITE, PICTON_BLUE, DOVE_GRAY } from '../../config/colors';
import { Formik, Field } from 'formik';
import { TextInput, TextInputMasked } from '../../components/TextInput';
import styles from './styles';

const DetailExam = props => (
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
                                placeholder="000000000"
                                name="exam_number"
                                component={TextInput}
                            />
                            <Field
                                placeholder={'Selecione o proprietário'}
                                label="Proprietário"
                                name="owner"
                                component={Picker}
                                items={[
                                    { label: '1', value: 'teste' }
                                ]}
                            />
                            <Field
                                placeholder={'Selecione a propriedade'}
                                label="Propriedade"
                                name="propertie"
                                component={Picker}
                                items={[
                                    { label: '1', value: 'teste' }
                                ]}
                            />
                            <Field
                                placeholder={'Selecione o Animal'}
                                label="Animal"
                                name="animal"
                                component={Picker}
                                items={[
                                    { label: '1', value: 'teste' }
                                ]}
                            />
                            <Field
                                placeholder={'Selecione a Doença'}
                                label="Doença"
                                name="disease"
                                component={Picker}
                                items={[
                                    { label: '1', value: 'teste' }
                                ]}
                            />
                            <Field
                                placeholder={'Selecione a Finalidade'}
                                label="Finalidade"
                                name="goal"
                                component={Picker}
                                items={[
                                    { label: '1', value: 'teste' }
                                ]}
                            />

                            <CustomButton
                                text="Compartilhar"
                                color={WHITE}
                                backgroundColor={PICTON_BLUE}
                                onPress={() => props.navigation.navigate('ShareExam')}
                                icon={'icon-share'}
                                iconColor={WHITE}
                            />
                            <CustomButton
                                text="Excluir Exame"
                                color={DOVE_GRAY}
                                backgroundColor={WHITE}
                                onPress={() => props.navigation.navigate('ShareExam')}
                                icon={'icon-trash'}
                                iconColor={DOVE_GRAY}
                                style={styles.btRemoveExam}
                            />
                        </>
                    )}
                </Formik>
            </View>
        </MainLayout>
    </ScrollView>
);

export default withHeader('Detalhe do Exame', 'icon-arrow-left')(DetailExam);
