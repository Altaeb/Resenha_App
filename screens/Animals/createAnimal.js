import React from 'react';
import { View, ScrollView } from 'react-native';
import withHeader from '../../hoc/withHeader';
import Picker from '../../components/Picker';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import { WHITE, PICTON_BLUE, MARINER, ALTO, DOVE_GRAY } from '../../config/colors';
import { Formik, Field } from 'formik';
import { TextInput } from '../../components/TextInput';
import RadioOptions from '../../components/RadioOptions';
import { scale } from '../../helpers/scalesHelpers';
import AddPhoto from '../../components/AddPhoto';
import ImageUpload from '../../components/ImageUpload';
import Header from '../../components/Header';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import BirthYear from './birthYear'
import styles from './styles';
import ResenhaIcon from '../../components/ResenhaIcon';

const QuestionBirth = screenProps => (
    <View>
        <Header
            title={"Ano de Nascimento"}
            iconSize={14}
            icon={"icon-arrow-left"}
            onPress={() => {
                screenProps.changeModalVisibility(false);
            }}
        />
        <ScrollView>
            <View style={{ paddingBottom: scale(220) }}>
                <View style={styles.tableWrapper}>
                    <TextNunitoBold style={styles.titleBirthTable}>Como calcular ano de nascimento do animal?</TextNunitoBold>
                    <ResenhaIcon name="icon-tooth" size={45} color={ALTO} />
                    <TextNunitoRegular style={styles.textBirthTable}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
                    </TextNunitoRegular>
                </View>
                <BirthYear />
            </View>
        </ScrollView>
    </View>
)

class CreateAnimal extends React.PureComponent {
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
                                        question={true}
                                        questionAction={() => {
                                            this.props.screenProps.changeModalVisibility(true, QuestionBirth(this.props.screenProps))
                                        }}
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
                                        onPress={() => this.props.navigation.navigate('ReviewAnimal')}
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
    'Cadastrar Novo Animal',
    'icon-arrow-left',
)(CreateAnimal);
