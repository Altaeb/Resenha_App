import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER, GRAY } from '../../config/colors';

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: scale(8),
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        height: scale(20),
        width: scale(20),
        borderRadius: scale(10),
        borderWidth: 2,
        borderColor: MARINER,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: scale(12),
        height: scale(12),
        borderRadius: scale(6),
        backgroundColor: MARINER,
    },
    labelDefaultStyle: {
        color: GRAY,
        marginLeft: scale(10),
    }
})

export default styles;