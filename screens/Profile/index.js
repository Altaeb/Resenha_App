import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import ResenhaIcon from '../../components/ResenhaIcon';
import styles from './styles';
import { scale } from '../../helpers/scalesHelpers';
import { WHITE, MARINER } from '../../config/colors';

class Profile extends React.PureComponent {
    render() {
        const {
            navigation,
            navigation: { state: { routeName } },
        } = this.props;

        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#1f6cbc', '#29b5ea', '#2bc4f3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 2, y: 2 }}
                    style={styles.wrapper}
                >
                    <View style={styles.imageBorder}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../../assets/foto_vet.jpg')}
                            />
                        </View>
                    </View>
                    <TextNunitoBold style={{ fontSize: scale(18), color: WHITE }}>Olá, Laura!</TextNunitoBold>
                    <View style={{ flexDirection: 'row' }}>
                        <TextNunitoBold style={{ fontSize: scale(16), color: WHITE }}>CRMV</TextNunitoBold>
                        <TextNunitoRegular style={{ fontSize: scale(16), color: WHITE, marginLeft: 10, }}>7777 / MG</TextNunitoRegular>
                    </View>
                </LinearGradient>
                <ScrollView>
                    <View style={styles.shareOption}>
                        <TouchableOpacity style={styles.shareOptionTouch} onPress={() => this.props.navigation.navigate('EditProfile')}>
                            <ResenhaIcon name={'icon-edit'} color={MARINER} size={16} />
                            <TextNunitoBold style={styles.textShareOption}>EDITAR PERFIL</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shareOption}>
                        <TouchableOpacity style={styles.shareOptionTouch} onPress={() => this.props.navigation.navigate('Faq')}>
                            <ResenhaIcon name={'icon-help'} color={MARINER} size={16} />
                            <TextNunitoBold style={styles.textShareOption}>F.A.Q</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shareOption}>
                        <TouchableOpacity style={styles.shareOptionTouch}>
                            <ResenhaIcon name={'icon-share'} color={MARINER} size={16} />
                            <TextNunitoBold style={styles.textShareOption}>COMPARTIHAR</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shareOption}>
                        <TouchableOpacity style={styles.shareOptionTouch} onPress={() => this.props.navigation.navigate('Terms')}>
                            <ResenhaIcon name={'icon-terms'} color={MARINER} size={16} />
                            <TextNunitoBold style={styles.textShareOption}>TERMOS E CONDIÇÕES</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shareOption}>
                        <TouchableOpacity style={styles.shareOptionTouch} onPress={() => this.props.navigation.navigate('About')}>
                            <ResenhaIcon name={'icon-info'} color={MARINER} size={16} />
                            <TextNunitoBold style={styles.textShareOption}>SOBRE</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shareOption}>
                        <TouchableOpacity style={styles.shareOptionTouch}>
                            <ResenhaIcon name={'icon-upload'} color={MARINER} size={16} />
                            <TextNunitoBold style={styles.textShareOption}>SINCRONIZAR DADOS</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shareOption}>
                        <TouchableOpacity style={styles.shareOptionTouch} onPress={() => this.props.navigation.navigate('SignIn')}>
                            <ResenhaIcon name={'icon-logout'} color={MARINER} size={16} />
                            <TextNunitoBold style={styles.textShareOption}>SAIR</TextNunitoBold>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

Profile.propTypes = {}

Profile.navigationOptions = {
    header: null,
};

export default withNavigation(Profile);