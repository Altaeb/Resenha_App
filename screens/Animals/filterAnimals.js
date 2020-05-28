import React from 'react';
import { View, ScrollView, Button } from 'react-native';
import withHeader from '../../hoc/withHeader';
import Picker from '../../components/Picker';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import { WHITE, PICTON_BLUE, MARINER } from '../../config/colors';
import { Formik, Field } from 'formik';
import { TextInput } from '../../components/TextInput';
import RadioOptions from '../../components/RadioOptions';
import { scale } from '../../helpers/scalesHelpers';
import AddPhoto from '../../components/AddPhoto';
import ImageUpload from '../../components/ImageUpload';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import styles from './styles';

class FilterAnimals extends React.PureComponent {
    static handleClearFilter() {
        alert('handleClearFilter');
    }

    // componentDidMount() {
    //     this.props.navigation.setParams({
    //         rightButton: <Button title="limpar" onPress={() => { }} />
    //     })
    // }
    render() {
        return (
            <ScrollView>
                <MainLayout>
                    <View>
                        <Formik
                            onSubmit={(values, actions) => {
                                alert(JSON.stringify(values));
                                setTimeout(() => {
                                    alert(JSON.stringify(actions));
                                    actions.setSubmitting(false);
                                }, 1000)
                            }}
                        >
                            {formikProps => (
                                <>
                                    <Field
                                        name="animal_name"
                                        component={TextInput}
                                        placeholder={'Nome do Animal'}
                                        label="Nome do Animal"
                                    />

                                    <Field
                                        name="species"
                                        component={Picker}
                                        placeholder={'Nome da Espécie'}
                                        label="Espécie"
                                        items={[
                                            { label: '1', value: 'teste' }
                                        ]}
                                    />
                                    <Field
                                        name="race"
                                        component={Picker}
                                        placeholder={'Nome da Raça'}
                                        label="Raça"
                                        items={[
                                            { label: '1', value: 'teste' }
                                        ]}
                                    />
                                    <Field
                                        name="coat"
                                        component={Picker}
                                        placeholder={'Nome da pelagem'}
                                        label="Pelagem"
                                        items={[
                                            { label: '1', value: 'teste' }
                                        ]}
                                    />
                                    <Field
                                        name="gender"
                                        component={Picker}
                                        placeholder={'Escolhao gênero'}
                                        label="Sexo"
                                        items={[
                                            { label: '1', value: 'teste' }
                                        ]}
                                    />

                                    <Field
                                        name="gestation"
                                        component={RadioOptions}
                                        label="O animal está em Gestação?"
                                        options={[
                                            {
                                                value: 'yes',
                                                label: 'Sim',
                                            },
                                            {
                                                value: 'no',
                                                label: 'Não',
                                            }
                                        ]}
                                    />

                                    <Field
                                        name="birth_year"
                                        component={TextInput}
                                        placeholder={'0000'}
                                        label="Ano do Nascimento"
                                    />

                                    <Field
                                        name="number_registration"
                                        component={TextInput}
                                        placeholder={'0000'}
                                        label="Número do Registro/Microchip"
                                    />

                                    <View style={styles.addPhotosWrappper}>
                                        <TextNunitoBold style={styles.addPhotosTitle}>Adicionar Fotos</TextNunitoBold>
                                        <TextNunitoRegular style={styles.addPhotosText}>
                                            Adicionar apenas 3 fotos do animal no ângulo da frente, ângulo da direita e ângulo da esquerda.
                                        </TextNunitoRegular>
                                        <View style={styles.uploadPhotosWrapper}>
                                            <ImageUpload>
                                                <AddPhoto />
                                            </ImageUpload>
                                            <ImageUpload>
                                                <AddPhoto />
                                            </ImageUpload>
                                            <ImageUpload>
                                                <AddPhoto />
                                            </ImageUpload>
                                        </View>
                                    </View>

                                    <CustomButton
                                        text="Fazer Resenha"
                                        color={WHITE}
                                        backgroundColor={PICTON_BLUE}
                                    // onPress={() => formikProps.validateForm().then(() => {
                                    //     formikProps.handleSubmit()
                                    // })}
                                    />
                                    <CustomButton
                                        text="Salvar Animal"
                                        color={MARINER}
                                        backgroundColor={WHITE}
                                        style={{ borderColor: MARINER, borderWidth: 1, marginTop: scale(20) }}
                                        onPress={() => formikProps.validateForm().then(() => {
                                            formikProps.submitForm()
                                        })}
                                    />
                                </>
                            )}
                        </Formik>
                    </View>
                </MainLayout>
            </ScrollView >
        );
    }
}

export default withHeader(
    'Filtros',
    'icon-arrow-left',
)(FilterAnimals);
