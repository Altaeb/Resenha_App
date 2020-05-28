import { StyleSheet } from 'react-native';
import { BLACK16, WHITE, ALTO } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: BLACK16,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: .8,
        shadowRadius: 3,
        borderRadius: 8,
        elevation: 5,
        backgroundColor: WHITE,
        alignSelf: 'stretch', 
        padding: scale(20),
        marginVertical: scale(20),
        marginHorizontal: scale(20),
        position: 'relative',
    },
    iconShadowBox: {
        position: 'absolute',
        right: scale(30),
        bottom: scale(65),
    },
    iconColor: {
        color: 'rgba(160, 160, 160, 0.20)',
    },  
    children: {
        zIndex: 999,
    }
})

export default styles;