import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { WILD_SAND, MARINER, DOVE_GRAY, ALTO, WHITE } from '../../config/colors';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import ResenhaIcon from '../../components/ResenhaIcon';

const MarkItem = props => {
  const maxLimit = 40;

  return (
    <View style={{
      backgroundColor: WHITE,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 25,
      marginBottom: 10,
      borderBottomColor: WILD_SAND,
      borderTopColor: WILD_SAND,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    }}>
      <View style={{ width: 24, height: 24, marginRight: 20, borderRadius: 24/2, backgroundColor: MARINER,  justifyContent: 'center', alignItems: 'center' }}>
        <TextNunitoBold style={{ color: WHITE }}>1</TextNunitoBold>
      </View>
      <View style={{ width: '45%', marginRight: 30 }}>
        <TextNunitoRegular style={{ color: DOVE_GRAY, fontSize: 15 }}>{((props.text).length > maxLimit) ?
          (((props.text).substring(0, maxLimit - 3)) + '...') : props.text}
        </TextNunitoRegular>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <ResenhaIcon name="icon-edit" size={22} color={MARINER} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 30 }}>
          <ResenhaIcon name="icon-trash" size={22} color={MARINER} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default class Welcome extends React.PureComponent {
  state = {
    marks: [
      {
        id: '0',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere, eros et rutrum vulputate, nisl ex varius nulla, vitae ultricies leo neque quis est.',
      },
      {
        id: '1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere, eros et rutrum vulputate, nisl ex varius nulla, vitae ultricies leo neque quis est.',
      },
    ]
  }
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#F9F9F9', height: Dimensions.get('window').height }}>
        <FlatList
          data={this.state.marks}
          renderItem={({ item }) => (
            <MarkItem text={item.text} />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}