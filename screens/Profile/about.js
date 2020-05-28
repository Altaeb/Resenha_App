import React from 'react';
import withHeader from '../../hoc/withHeader';
import { View, ScrollView, Image } from 'react-native';
import MainLayout from '../../components/MainLayout';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import styles from './styles';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER, DOVE_GRAY } from '../../config/colors';


class About extends React.PureComponent {
    render() {
        return (
            <ScrollView>
                <MainLayout>
                    <View style={styles.aboutWrapper}>
                        <View style={styles.logo}>
                            <Image source={require('../../assets/Logo-Resenha.png')} />
                        </View>
                        <TextNunitoRegular style={[styles.aboutText, { fontSize: scale(11), marginTop: scale(10) }]}>VERSÃO 1.0.0</TextNunitoRegular>
                        <TextNunitoRegular style={[styles.aboutText, { fontSize: scale(13), marginVertical: scale(40) }]}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
                        </TextNunitoRegular>
                        <TextNunitoBold style={[styles.aboutText, { fontSize: scale(12), marginBottom: scale(20) }]}>
                            WWW.RESENHAAPP.COM.BR
                        </TextNunitoBold>
                        <TextNunitoRegular style={styles.aboutText}>
                            marcela@resenhaapp.com.br
                        </TextNunitoRegular>
                    </View>
                </MainLayout>
            </ScrollView>
        )
    }
}

export default withHeader('Sobre', 'icon-arrow-left')(About);
