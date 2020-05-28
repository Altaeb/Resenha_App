import React from 'react';
import { View, Image } from 'react-native';
import ExamsHeader from './index';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER, ALTO } from '../../config/colors';
import { TextNunitoBold } from '../../components/TextNunito';
import { withNavigation } from 'react-navigation';
import ResenhaIcon from '../../components/ResenhaIcon';


class Done extends React.PureComponent {
    render() {
        return (
            <ExamsHeader>
                <View style={styles.customInput}>
                    <CustomTextInput icon={'icon-search'} placeholder={'Pesquise algo'} />
                </View>
                <View style={styles.textTopBox}>
                    <TextNunitoBold style={{ color: MARINER, fontSize: scale(20), }}>A-Z</TextNunitoBold>
                </View>
                <View style={{ paddingHorizontal: scale(40) }}>
                    <View style={styles.imageOps}>
                        <ResenhaIcon name="icon-fence" color={ALTO} size={90} />
                    </View>
                    <TextNunitoBold style={styles.textOps}>
                        OPS! VOCÊ AINDA NÃO TEM
                        PROPRIEDADES CADASTRADAS
                    </TextNunitoBold>
                </View>
            </ExamsHeader>
        );
    }
}

export default withNavigation(Done);
