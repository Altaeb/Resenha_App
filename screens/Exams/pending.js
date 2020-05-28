import React from 'react';
import { View, ScrollView } from 'react-native';
import ShadowBox from '../../components/ShadowBox';
import { TextNunitoBold, TextNunitoRegular } from '../../components/TextNunito';
import CustomDate from '../../components/CustomDate';
import ExamsHeader from './index';
import styles from './styles';
import ResenhaIcon from '../../components/ResenhaIcon';
import { DOVE_GRAY, DOUBLE_COLONIAL_WHITE } from '../../config/colors';
import CustomLabel from '../../components/CustomLabel';
import CustomTextInput from '../../components/CustomTextInput';
import { scale } from '../../helpers/scalesHelpers';
import { statusColor } from '../../helpers/statusColors';


class Pending extends React.PureComponent {
    state = {
        data: [
            {
                documentNumber: '23145-23',
                animalName: 'Dakota Sinuox',
                owner: 'Melissa Correia',
                propertie: 'Fazenda Mato',
                status: 'missing_information',
            },
            {
                documentNumber: '23145-23',
                animalName: 'Dakota Sinuox',
                owner: 'Melissa Correia',
                propertie: 'Fazenda Mato',
                status: 'not_sent',
            },
        ]
    }
    render() {
        return (
            <ExamsHeader>
                <View style={styles.customInput}>
                    <CustomTextInput icon={'icon-search'} placeholder={'Pesquise algo'} />
                </View>
                <ScrollView style={{ paddingHorizontal: scale(20) }}>
                    <View style={{ paddingBottom: scale(280) }}>
                        {this.state.data.length > 0 &&
                            this.state.data.map((item, index) => {
                                
                                const { color, text } = statusColor(item.status);

                                return (
                                    <ShadowBox icon="icon-lab" key={`id_${index}`}>
                                        <View style={styles.textSendingWrapper}>
                                            <TextNunitoBold style={styles.textSending}>Enviando Exame</TextNunitoBold>
                                            <ResenhaIcon name="icon-refresh" color={DOVE_GRAY} size={25} />
                                        </View>
                                        <View style={styles.textWrapper}>
                                            <CustomDate day={'27'} month={'MARÇO'} style={styles.customDate} />
                                            <TextNunitoBold style={styles.textDocument}>{item.documentNumber}</TextNunitoBold>
                                            <View style={styles.titleWrapper}>
                                                <TextNunitoBold style={styles.textTitle}>Nome do animal</TextNunitoBold>
                                                <TextNunitoRegular style={styles.textSubtitle}>{item.animalName}</TextNunitoRegular>
                                            </View>
                                            <View style={styles.titleWrapper}>
                                                <TextNunitoBold style={styles.textTitle}>Proprietario</TextNunitoBold>
                                                <TextNunitoRegular style={styles.textSubtitle}>{item.owner}</TextNunitoRegular>
                                            </View>
                                            <View style={styles.titleWrapper}>
                                                <TextNunitoBold style={styles.textTitle}>Propriedade</TextNunitoBold>
                                                <TextNunitoRegular style={styles.textSubtitle}>{item.propertie}</TextNunitoRegular>
                                            </View>
                                            <View style={[styles.titleWrapper, styles.labelWrapper]}>
                                                <TextNunitoBold style={styles.textSubtitle}>STATUS: </TextNunitoBold>
                                                <CustomLabel text={text} bgColor={color} />
                                            </View>
                                        </View>
                                    </ShadowBox>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </ExamsHeader>
        );
    }
}

export default Pending;
