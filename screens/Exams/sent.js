import React from 'react';
import { View, Image } from 'react-native';
import ExamsHeader from './index';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER } from '../../config/colors';
import { TextNunitoBold } from '../../components/TextNunito';
import { withNavigation } from 'react-navigation';

class Sent extends React.PureComponent {
    render() {
        return (
            <ExamsHeader>
                <View style={styles.customInput}>
                    <CustomTextInput icon={'icon-search'} placeholder={'Pesquise algo'} />
                </View>
                <View style={{ paddingHorizontal: scale(40) }}>
                    <View style={styles.imageOps}>
                        <Image
                            source={require('../../assets/draw-horse.png')}
                        />
                    </View>
                    <TextNunitoBold style={styles.textOps}>
                        OPS! VOCÊ PRECISA CADASTRAR 
                        ANTES CRIAR EXAMES
                    </TextNunitoBold>
                    <CustomButton 
                        onPress={() => this.props.navigation.navigate('CreateExam')}
                        text="+ INICIAR CADASTROS"
                        color={MARINER}
                        iconColor={MARINER}
                        style={{ 
                            borderWidth: 1, 
                            borderColor: MARINER,
                        }}
                    />
                </View>
            </ExamsHeader>
        );
    }
}

export default withNavigation(Sent);
