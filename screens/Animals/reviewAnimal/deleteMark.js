import React from 'react';
import { View } from 'react-native';
import DefaultModal from '../../../components/DefaultModal';
import CustomButton from '../../../components/CustomButton';
import { SHAMROCK, DOVE_GRAY, WHITE, ROMAN } from '../../../config/colors';
import { scale } from '../../../helpers/scalesHelpers';
import { storeData, retrieveData } from '../../../helpers/storage';

const ConfirmDeleteMark = ({ screenProps, navigation }) => (
    <DefaultModal
        onPress={() => {
            screenProps.changeModalVisibility(false)
            navigation.navigate('ListMarks')
        }}
        iconSize={55}
        iconModal={'icon-approved'}
        iconColor={SHAMROCK}
        title="Lista de Marcações"
        subtitle="Marcação excluída com sucesso!"
    >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: scale(20) }}>
            <CustomButton
                text="VOLTAR"
                color={WHITE}
                backgroundColor={'transparent'}
                style={{ width: 138, borderWidth: 1, borderColor: WHITE }}
                onPress={() => {
                    screenProps.changeModalVisibility(false)
                    navigation.navigate('ListMarks')
                }}
            />
        </View>
    </DefaultModal>
);

class DeleteMark extends React.PureComponent {
    state = {
        marks: [],
    }
    componentWillMount() {
        const marks = this.props.screenProps.getMarks();

        this.setState({ marks: marks });
        // retrieveData('@resenhaapp/animal:marks').then(res => {
        //     try {
        //         const storedMarks = JSON.parse(res);

        //         if (storedMarks instanceof Array) {
        //             this.setState({
        //                 marks: storedMarks,
        //             });
        //         }

        //     } catch (e) {
        //         console.log(e);
        //     }
        // });
    }
    deleteMark = () => {
        if (this.props.index !== null) {
            const edited = this.state.marks.filter((item, index) => index !== this.props.index);

            this.props.screenProps.storeMarksOnState(edited, () => {
                this.props.removeLine(this.props.index);
                this.props.screenProps.changeModalVisibility(true, ConfirmDeleteMark(this.props));
                // this.props.navigation.goBack(null)
            })
            // storeData(
            //     '@resenhaapp/animal:marks',
            //     JSON.stringify(edited)
            // ).then(() => {
            //     this.props.screenProps.changeModalVisibility(true, ConfirmDeleteMark(this.props));
            //     this.props.removeLine(this.props.index);
            // });

        }
    }
    render() {
        const { screenProps } = this.props;
        return (
            <DefaultModal
                onPress={() => screenProps.changeModalVisibility(false)}
                iconSize={55}
                iconModal={'icon-delete-button'}
                iconColor={ROMAN}
                title="Lista de Marcações"
                subtitle="Deseja mesmo excluir essa marcação?"
            >
                <View style={{ flexDirection: 'row', marginTop: scale(20) }}>
                    <View style={{ flex: 2, paddingRight: 4 }}>
                        <CustomButton
                            text="SIM"
                            color={DOVE_GRAY}
                            backgroundColor={WHITE}
                            onPress={this.deleteMark}
                        />
                    </View>
                    <View style={{ flex: 2, paddingLeft: 4 }}>
                        <CustomButton
                            text="NÃO"
                            color={WHITE}
                            backgroundColor={'transparent'}
                            style={{ borderWidth: 1, borderColor: WHITE }}
                            onPress={() => this.props.navigation.navigate('ListMarks')}
                        />
                    </View>
                </View>
            </DefaultModal>
        );
    }
}

export default DeleteMark;