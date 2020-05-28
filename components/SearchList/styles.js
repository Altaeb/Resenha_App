import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER, ALTO, SILVER_CHALICE } from '../../config/colors';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: ALTO,
        paddingVertical: scale(15),
    },
    letterSpace: {
        width: scale(60),
        marginRight: scale(20),
        alignItems: 'center',
    },
    character: {
        color: MARINER,
        fontSize: scale(24),
    },
    title: {
        color: SILVER_CHALICE,
        fontSize: scale(16),
        marginBottom: scale(20),
        marginTop: scale(5),
    }
});

export default styles;