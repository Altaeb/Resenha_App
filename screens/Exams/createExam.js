import React from 'react';
import { View, PanResponder, Text } from 'react-native';
import withHeader from '../../hoc/withHeader';
import { TextInput, TextInputMasked } from '../../components/TextInput';
import Picker from '../../components/Picker';
import MainLayout from '../../components/MainLayout';
import CustomButton from '../../components/CustomButton';
import SearchList from '../../components/SearchList';
import { WHITE, PICTON_BLUE } from '../../config/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { scale } from '../../helpers/scalesHelpers';
import { Formik, Field } from 'formik';

class CreateExam extends React.Component {
    state = {
        showOwnersList: false,
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this.fScroll.setNativeProps({ scrollEnabled: false })
            },
            onPanResponderMove: () => {

            },
            onPanResponderTerminationRequest: () => true,
            onPanResponderRelease: () => {
                this.fScroll.setNativeProps({ scrollEnabled: true })
            },
        })
    }

    handleOwnerSelection = (value) => {
        this.setState({
            showOwnersList: value,
        })
    }


    render() {
        return (
            <ScrollView ref={(e) => { this.fScroll = e }}>
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
                                    label="Número do Exame"
                                    placeholder="000000000"
                                    name="exam_number"
                                    component={TextInput}
                                />

                                <Field
                                    placeholder={'Selecione a doença'}
                                    label="Doença"
                                    name="disease"
                                    component={Picker}
                                    items={[
                                        { label: '1', value: 'teste' }
                                    ]}
                                />
                                <Field
                                    placeholder={'Selecione a finalidade'}
                                    label="Finalidade"
                                    name="goal"
                                    component={Picker}
                                    items={[
                                        { label: '1', value: 'teste' }
                                    ]}
                                />
                                <Field
                                    placeholder={'Selecione o laboratório'}
                                    label="Laboratório"
                                    name="lab"
                                    component={Picker}
                                    items={[
                                        { label: '1', value: 'teste' }
                                    ]}
                                />
                                <View style={{ overflow: 'hidden' }}>
                                    <Field
                                        touchable
                                        disabled
                                        onPress={() => this.handleOwnerSelection(!this.state.showOwnersList)}
                                        placeholder={'Selecione o proprietário'}
                                        label="Propritário"
                                        component={Picker}
                                        items={[
                                            { label: '1', value: 'teste' }
                                        ]}
                                    />
                                    {this.state.showOwnersList &&
                                        (<View style={{ height: scale(320), borderWidth: 1, borderColor: '#d6d6d6', borderRadius: 10, paddingVertical: scale(15) }}>
                                            <SearchList
                                                {...this.panResponder.panHandlers}
                                                onScrollEndDrag={() => this.fScroll.setNativeProps({ scrollEnabled: true })}
                                            />
                                        </View>)
                                    }
                                </View>
                                <Field
                                    placeholder={'Selecione o proprietário'}
                                    label="Animal"
                                    name="animal"
                                    component={Picker}
                                    items={[
                                        { label: '1', value: 'teste' }
                                    ]}
                                />
                                <CustomButton
                                    text="Finalizar"
                                    color={WHITE}
                                    backgroundColor={PICTON_BLUE}
                                    onPress={() => formikProps.validateForm().then(() => {
                                        this.props.navigation.navigate('DetailExam');
                                        formikProps.submitForm()
                                    })}
                                />
                            </>
                        )}
                    </Formik>
                </MainLayout>
            </ScrollView>

        );
    }
}

export default withHeader('Criar Exame', 'icon-arrow-left')(CreateExam);
