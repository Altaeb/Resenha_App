import React from 'react';
import { View, ScrollView } from 'react-native';
import ShadowBox from '../../components/ShadowBox';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import CustomDate from '../../components/CustomDate';
import ExamsHeader from './index';
import styles from './styles';
import ResenhaIcon from '../../components/ResenhaIcon';
import { DOVE_GRAY, DOUBLE_COLONIAL_WHITE, MARINER } from '../../config/colors';
import CustomLabel from '../../components/CustomLabel';
import CustomTextInput from '../../components/CustomTextInput';
import { scale } from '../../helpers/scalesHelpers';


class Pending extends React.PureComponent {
    state = {
        data: [
            {
                ownerName: 'Eduardo Rodrigues Gomes',
                city: 'Recursolândia',
                state: 'Tocantins',
                phone: '(31) 3333-3333',
            },
            {
                ownerName: 'Eduardo Rodrigues Gomes',
                city: 'Recursolândia',
                state: 'Tocantins',
                phone: '(31) 3333-3333',
            },
            {
                ownerName: 'Eduardo Rodrigues Gomes',
                city: 'Recursolândia',
                state: 'Tocantins',
                phone: '(31) 3333-3333',
            },
        ]
    }
    render() {
        return (
            <ExamsHeader>
                <View style={styles.customInput}>
                    <CustomTextInput icon={'icon-search'} placeholder={'Pesquise algo'} />
                </View>
                <View style={styles.textTopBox}>
                    <TextNunitoBold style={{ color: MARINER, fontSize: scale(20), }}>A-Z</TextNunitoBold>
                </View>
                <ScrollView style={{ paddingHorizontal: scale(20) }}>
                    <View style={{ paddingBottom: scale(280) }}>
                        {this.state.data.length > 0 &&
                            this.state.data.map((item, index) =>
                                <ShadowBox icon="icon-proprietario" key={`id_${index}`}>
                                    <View style={styles.textWrapper}>
                                        <TextNunitoBold style={styles.textDocument}>{item.ownerName}</TextNunitoBold>
                                        <View style={styles.titleWrapper}>
                                            <TextNunitoBold style={styles.textTitle}>Cidade</TextNunitoBold>
                                            <TextNunitoRegular style={styles.textSubtitle}>{item.city} </TextNunitoRegular>
                                        </View>
                                        <View style={styles.titleWrapper}>
                                            <TextNunitoBold style={styles.textTitle}>Estado</TextNunitoBold>
                                            <TextNunitoRegular style={styles.textSubtitle}>{item.state}</TextNunitoRegular>
                                        </View>
                                        <View style={styles.titleWrapper}>
                                            <TextNunitoBold style={styles.textTitle}>Telefone</TextNunitoBold>
                                            <TextNunitoRegular style={styles.textSubtitle}>{item.phone}</TextNunitoRegular>
                                        </View>
                                    </View>
                                </ShadowBox>
                            )
                        }
                    </View>
                </ScrollView>
            </ExamsHeader>
        );
    }
}

export default Pending;
