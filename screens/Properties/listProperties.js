import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import withHeader from '../../hoc/withHeader';
import MainLayout from '../../components/MainLayout';
import SearchList from '../../components/SearchList';
import data from './data';

const ListProperties = props => (
    <MainLayout>
        <View>
            <SearchList data={data} routeList={'ListProperties'}/>
        </View>
    </MainLayout>
);

export default withHeader('Lista de Propriedades', 'icon-arrow-left')(ListProperties);
