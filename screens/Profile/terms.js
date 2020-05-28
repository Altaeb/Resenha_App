import React from 'react';
import withHeader from '../../hoc/withHeader';
import { View, ScrollView } from 'react-native';
import MainLayout from '../../components/MainLayout';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import styles from './styles';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER, DOVE_GRAY } from '../../config/colors';


class Terms extends React.PureComponent {
    render() {
        return (
            <ScrollView>
                <MainLayout>
                    <TextNunitoBold style={{ color: MARINER, fontSize: scale(12) }}>Última Data de Modificação:</TextNunitoBold>
                    <TextNunitoRegular style={{ color: DOVE_GRAY, fontSize: scale(14) }}>27 de Março de 2019</TextNunitoRegular>

                    <View style={styles.termContent}>
                        <TextNunitoBold style={styles.termContentTitle}>1. Sobre Renha App:</TextNunitoBold>
                        <TextNunitoBold style={styles.termContentSubtitle}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                        </TextNunitoBold>
                        <TextNunitoRegular style={styles.termContentText}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
                        </TextNunitoRegular>
                    </View>
                    <View style={styles.termContent}>
                        <TextNunitoBold style={styles.termContentTitle}>2. Sobre Renha App:</TextNunitoBold>
                        <TextNunitoBold style={styles.termContentSubtitle}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                        </TextNunitoBold>
                        <TextNunitoRegular style={styles.termContentText}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
                        </TextNunitoRegular>
                    </View>
                    <View style={styles.termContent}>
                        <TextNunitoBold style={styles.termContentTitle}>3. Sobre Renha App:</TextNunitoBold>
                        <TextNunitoBold style={styles.termContentSubtitle}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                        </TextNunitoBold>
                        <TextNunitoRegular style={styles.termContentText}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.
                        </TextNunitoRegular>
                    </View>
                </MainLayout>
            </ScrollView>
        )
    }
}

export default withHeader('Termos e Condições', 'icon-arrow-left')(Terms);
