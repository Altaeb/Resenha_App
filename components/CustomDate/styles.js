import { StyleSheet } from 'react-native';
import { GRAY, MARINER, DOVE_GRAY } from '../../config/colors';

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    wrapperDay: {
        borderWidth: 1,
        borderColor: DOVE_GRAY,
        borderRadius: 14,
        width: 67,
        height: 61,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textDay: {
        color: MARINER,
        fontSize: 28,
    },
    textDate: {
        fontSize: 14,
        color: DOVE_GRAY,
    }
})

export default styles;