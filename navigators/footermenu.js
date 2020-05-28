import React from 'react';
import ExamsScreen from '../screens/Exams';
import AnimalsScreen from '../screens/Animals';
import PropertiesScreen from '../screens/Properties';
import OwnersScreen from '../screens/Owners';
import ProfileScreen from '../screens/Profile';
import ResenhaIcon from '../components/ResenhaIcon';
import { WHITE, DOVE_GRAY } from '../config/colors';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TabFooter from './TabFooter';
import ExamsStack from './exams';
import OwnersStack from './owners';
import PropertiesStack from './properties';
import ProfileStack from './profile';
import AnimalsStack from './animals';


export default createAppContainer(
    createBottomTabNavigator(
        {
            Exams: {
                screen: ExamsStack,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <ResenhaIcon name={'icon-lab'} size={25} color={tintColor} />
                }
            },
            Animals: {
                screen: AnimalsStack,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <ResenhaIcon name={'icon-animais'} size={25} color={tintColor} />
                }
            },
            Owners: {
                screen: OwnersStack,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <ResenhaIcon name={'icon-proprietario'} size={25} color={tintColor} />
                }
            },
            Properties: {
                screen: PropertiesStack,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <ResenhaIcon name={'icon-propriedade'} size={25} color={tintColor} />
                }
            },
            Profile: {
                screen: ProfileStack,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <ResenhaIcon name={'icon-perfil'} size={25} color={tintColor} />
                }
            },
        },
        {
            tabBarComponent: TabFooter,
            tabBarOptions: {
                activeTintColor: WHITE,
                inactiveTintColor: DOVE_GRAY,
            }
        },
    )
);
