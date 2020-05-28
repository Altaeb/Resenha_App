import { StyleSheet } from 'react-native';
import { BLACK16, SILVER_CHALICE, GRAY, WHITE } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    input: {
        height: 45,
        borderRadius: 15,
        color: SILVER_CHALICE,
        paddingLeft: 10,
    },
    label: {
        color: GRAY, 
        fontSize: scale(12),
        marginBottom: 5,
    },
    wrapper: {
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: BLACK16,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: .8,
        shadowRadius: 2,
        borderRadius: 8,
        elevation: 5,
        backgroundColor: WHITE,
        marginHorizontal: scale(20),
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 14,
    }
})

export default styles;