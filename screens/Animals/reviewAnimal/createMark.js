import React from 'react';
import { SafeAreaView, View, ScrollView, TextInput as Input } from 'react-native';
import { Formik, Field } from 'formik';
import { TextNunitoBold } from '../../../components/TextNunito';
import CustomButton from '../../../components/CustomButton';
import styles from '../styles';
import { SHAMROCK, DOVE_GRAY, WHITE } from '../../../config/colors';
import { scale } from '../../../helpers/scalesHelpers';
import { storeData, retrieveData } from '../../../helpers/storage';
import withHeader from '../../../hoc/withHeader';

class CreateMark extends React.PureComponent {
    state = {
        marks: [],
        initialValues: {},
        renderForm: false,
    }
    componentWillMount() {
        const markIndex = this.props.navigation.getParam('index');
        const marks = this.props.screenProps.getMarks();

        if (markIndex === undefined) {
            this.setState({
                marks: marks,
            });
        } else {
            this.setState({
                marks: marks,
                initialValues: { mark: marks[markIndex].mark } 
            });
        }

        
        // retrieveData('@resenhaapp/animal:marks').then(res => {
        //     const markIndex = this.props.navigation.getParam('index');
            
        //     try {
        //         const storedMarks = JSON.parse(res);

        //         if (storedMarks instanceof Array && (markIndex === undefined)) {
        //             this.setState({ 
        //                 marks: storedMarks,
        //             });
        //         } else if (storedMarks instanceof Array) {
        //             this.setState({ 
        //                 marks: storedMarks,
        //                 initialValues: { mark: storedMarks[markIndex].mark } 
        //             });
        //         }
        //     } catch (e) {
        //         this.setState({ marks: [] })
        //     } finally {
        //         this.setState({ renderForm: true });
        //     }
        // });
    }
    render() {
        const undoSketch = this.props.navigation.getParam('undoSketch');
        const markIndex = this.props.navigation.getParam('index');

        return (
            <View>
                <ScrollView>
                    <View style={styles.wrapperMark}>
                        <TextNunitoBold>
                            Marcação
                  </TextNunitoBold>
                    </View>
                    <Formik
                        initialValues={this.state.initialValues}
                        onSubmit={(values, actions) => {
                            if (markIndex !== undefined) {
                                const edited = Object.assign([...this.state.marks], { [markIndex]: { mark: values.mark } })
                                this.props.screenProps.storeMarksOnState(edited, () => {
                                    this.props.navigation.navigate('ReviewAnimal')
                                })
                                // storeData(
                                //     '@resenhaapp/animal:marks',
                                //     JSON.stringify(edited)
                                // ).then(() => this.props.navigation.navigate('ReviewAnimal'));
                            } else {
                                this.props.screenProps.storeMarksOnState(this.state.marks.concat([{ mark: values.mark }]), () => {
                                    this.props.navigation.navigate('ReviewAnimal')
                                })
                                // storeData(
                                //     '@resenhaapp/animal:marks',
                                //     JSON.stringify()
                                // ).then(() => this.props.navigation.goBack(null));
                            }

                            setTimeout(() => {
                                actions.setSubmitting(false);
                            }, 1000)
                        }}
                    >
                        {formikProps => {
                            return (
                                <>
                                    <Field
                                        component={Input}
                                        multiline
                                        name="mark"
                                        value={formikProps.values.mark}
                                        style={styles.markInput}
                                        onChangeText={formikProps.handleChange('mark')}
                                    />
                                    <View style={styles.wrapperMark}>
                                        <CustomButton
                                            text="Salvar"
                                            color={WHITE}
                                            backgroundColor={SHAMROCK}
                                            onPress={() => formikProps.submitForm()}
                                        />
                                        <CustomButton
                                            text="Exluir"
                                            color={DOVE_GRAY}
                                            backgroundColor={WHITE}
                                            style={{
                                                boderColor: DOVE_GRAY,
                                                borderWidth: 1,
                                                marginTop: scale(10),
                                            }}
                                            onPress={() => {
                                                undoSketch();
                                                this.props.navigation.goBack(null);
                                            }}
                                        />
                                    </View>
                                </>
                            )
                        }}
                    </Formik>
                </ScrollView>
            </View>
        );
    }
}

CreateMark.defaultProps = {
    index: null,
}

export default withHeader(
    'Criar Marcação', 
    'icon-arrow-left',
    null,
    props => {
        const undoSketch = props.getParam('undoSketch');
        undoSketch();
        props.goBack(null);
    },
)(CreateMark);
