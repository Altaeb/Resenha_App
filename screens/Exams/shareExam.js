import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import withHeader from '../../hoc/withHeader';
import MainLayout from '../../components/MainLayout';
import { TextNunitoRegular, TextNunitoBold } from '../../components/TextNunito';
import ResenhaIcon from '../../components/ResenhaIcon';
import { DOVE_GRAY, MARINER, PICTON_BLUE, SHAMROCK, WHITE } from '../../config/colors';
import CustomButton from '../../components/CustomButton';
import DefaultModal from '../../components/DefaultModal';
import { TextInput } from '../../components/TextInput';
import { scale } from '../../helpers/scalesHelpers';
import styles from './styles';
import { Formik, Field } from 'formik';
import { withNavigation } from 'react-navigation';

const ConfirmEmail = props => (
    <DefaultModal
        onPress={() => screenProps.changeModalVisibility(false)}
        iconSize={65}
        iconModal={'icon-approved'}
        title="Compartilhar"
        iconColor={SHAMROCK}
        subtitle="EMAILS ENVIADOS"
    >
        <View style={styles.modalConfirmContent}>
            <TextNunitoBold style={{ fontSize: scale(17), color: WHITE, marginBottom: scale(35) }}>Emails enviados para:</TextNunitoBold>
            <TextNunitoRegular style={{ fontSize: scale(15), color: WHITE }}>email@provedor.com.br,</TextNunitoRegular>
            <TextNunitoRegular style={{ fontSize: scale(15), color: WHITE }}>email@provedor.com.br</TextNunitoRegular>
        </View>
        <CustomButton
            text="Voltar"
            color={WHITE}
            style={{ borderColor: WHITE, borderWidth: 1 }}
            backgroundColor={'transparent'}
            onPress={() => {
                props.screenProps.changeModalVisibility(false)
                props.navigation.goBack('ShareExam')
            }}
        />
    </DefaultModal>
)

const ShareEmail = props => (
    <DefaultModal
        onPress={() => props.screenProps.changeModalVisibility(false)}
        iconSize={45}
        iconModal={'icon-mail'}
        iconColor={PICTON_BLUE}
        title="Compartilhar"
        subtitle="ENVIAR EMAILS"
        text="Digite os endereços de emailsseparados por vírgula:"
    >
        <Formik
            // validationSchema={formModalForgotPass}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values));
                setTimeout(() => {
                    props.screenProps.changeModalVisibility(true, ConfirmEmail(screenProps))
                    actions.setSubmitting(false);
                }, 1000)
            }}
        >
            {formikProps => (
                <>
                    <Field
                        label="Email:"
                        placeholder="email@provedor.com.br"
                        placeHolderColor={WHITE}
                        style={{ borderColor: WHITE, color: WHITE, marginBottom: scale(30), height: scale(73) }}
                        labelColor={WHITE}
                        multiline
                        name="email"
                        autoCapitalize={'none'}
                        component={TextInput}
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
)


const ShareExam = props => (
    <MainLayout style={styles.collapseLayout}>
        <View style={styles.topWrapperShare}>
            <TextNunitoRegular>COMPARTILHAR EXAME</TextNunitoRegular>
            <View style={styles.iconShare}>
                <ResenhaIcon name={'icon-pdf'} color={DOVE_GRAY} size={70} />
            </View>
            <TextNunitoBold style={styles.numberShare}>00000/00</TextNunitoBold>
        </View>

        <View style={styles.shareOptionsWrapper}>
            <TextNunitoBold style={styles.shareViaText}>COMPARTILHAR VIA:</TextNunitoBold>
            <View style={styles.shareOption}>
                <TouchableOpacity style={styles.shareOptionTouch}>
                    <ResenhaIcon name={'icon-mail'} color={MARINER} size={14} />
                    <TextNunitoRegular style={styles.textShareOption} onPress={() => props.screenProps.changeModalVisibility(true, ShareEmail(props))}>
                        EMAIL
                    </TextNunitoRegular>
                </TouchableOpacity>
            </View>
            <View style={styles.shareOption}>
                <TouchableOpacity style={styles.shareOptionTouch}>
                    <ResenhaIcon name={'icon-whatsapp'} color={MARINER} size={16} />
                    <TextNunitoRegular style={styles.textShareOption}>WHATSAPP</TextNunitoRegular>
                </TouchableOpacity>
            </View>
            <View style={styles.shareOption}>
                <TouchableOpacity style={styles.shareOptionTouch}>
                    <ResenhaIcon name={'icon-pdf'} color={MARINER} size={19} />
                    <TextNunitoRegular style={styles.textShareOption}>BAIXAR PDF</TextNunitoRegular>
                </TouchableOpacity>
            </View>
        </View>

    </MainLayout>
);

export default withNavigation(withHeader('Compartilhar', 'icon-arrow-left')(ShareExam));
