import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import withHeader from '../../../hoc/withHeader';
import MarkItem from '../../../components/MarkItem';
import { scale } from '../../../helpers/scalesHelpers';
import { retrieveData } from '../../../helpers/storage';
import uuidv4 from 'uuidv4';
import CreateMark from './createMark';
import DeleteMark from './deleteMark';

class ListMarks extends React.PureComponent {
    state = {
        marks: [],
    }
    componentWillUpdate() {
        const marks = this.props.screenProps.getMarks();

        this.setState({ marks: marks });

    }
    componentWillMount() {
        const marks = this.props.screenProps.getMarks();

        this.setState({ marks: marks });

        // retrieveData('@resenhaapp/animal:marks').then(res => {
        //     try {
        //         const storedMarks = JSON.parse(res);

        //         if (storedMarks instanceof Array) {
        //             this.setState({ marks: storedMarks });
        //         }
        //     } catch (e) {
        //         this.setState({ marks: [] })
        //     }
        // });
    }
    
    updateMarksList = num => this.setState({ updateComponent: num });

    render() {
        const removeLine = this.props.navigation.getParam('removeLine');

        return (
            <View style={{
                backgroundColor: '#F9F9F9',
                height: Dimensions.get('window').height
            }}>
                <View style={{ marginTop: scale(20) }}>
                    <FlatList
                        data={this.state.marks}
                        renderItem={({ item, index }) => {

                            const appearenceIndex = index + 1;

                            return (
                                <>
                                    {item && <MarkItem
                                        text={item.mark}
                                        index={appearenceIndex}
                                        pressEdit={() => this.props.navigation.navigate('CreateMark', {
                                            index: index,
                                        })}
                                        pressTrash={() => 
                                            this.props.screenProps.changeModalVisibility(true, 
                                            <DeleteMark 
                                                screenProps={this.props.screenProps} 
                                                navigation={this.props.navigation} 
                                                removeLine={removeLine}
                                                index={index} 
                                            />)
                                        }
                                    />}
                                </>
                            )
                        }
                        }
                        keyExtractor={item => uuidv4()}
                    />
                </View>
            </View>
        )
    }
}

export default withHeader('Lista de Marcações', 'icon-arrow-left')(ListMarks);
