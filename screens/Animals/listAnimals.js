import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import withHeader from '../../hoc/withHeader';
import MainLayout from '../../components/MainLayout';
import SearchList from '../../components/SearchList';
import data from './data';

const ListAnimals = props => (
    <View>
        <SearchList data={data} routeList={'DetailAnimal'} />
    </View>
);

export default withHeader('Lista de Animais', 'icon-arrow-left')(ListAnimals);
