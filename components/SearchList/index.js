import React from 'react';
import { TouchableOpacity, ScrollView, View } from 'react-native';
import CustomTextInput from '../CustomTextInput';
import { TextNunitoBold } from '../TextNunito';
import { withNavigation } from 'react-navigation';
import styles from './styles';


class SearchList extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            dataSource: this.formatData(this.props.data)
        }
    }

    formatData(data) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        const arr = []

        for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
            const currentChar = alphabet[sectionId];

            const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);

            if (users.length > 0) {
                arr[sectionId] = { character: currentChar, data: users };
            }
        }

        return arr;
    }

    searchFilterFunction = text => {
        const newData = this.props.data.filter(item => {
            const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;

            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1
        })

        this.setState({
            dataSource: this.formatData(newData),
        });
    }

    render() {
       // console.log(this.props)
        return (
            <View style={{ marginTop: 30, marginBottom: 170 }}>
                <CustomTextInput
                    icon={'icon-search'} placeholder={'Pesquise algo'}
                    onChangeText={text => this.searchFilterFunction(text)}
                />
                <ScrollView>
                    {this.state.dataSource.map((section, index) =>
                        <View key={`id_section_${index}`} style={styles.wrapper}>
                            <View style={styles.letterSpace}>
                                <TextNunitoBold style={styles.character}>{section.character}</TextNunitoBold>
                            </View>
                            <View>
                                {section.data.map((item, index) =>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate(this.props.routeList, {
                                            ...item,
                                        })} 
                                        key={`id_item_${index}`}
                                    >
                                        <TextNunitoBold style={styles.title}>
                                            {item.name.title} {item.name.first} {item.name.last}
                                        </TextNunitoBold>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    )}
                </ScrollView>
            </View>
        )
    }
}

export default withNavigation(SearchList);