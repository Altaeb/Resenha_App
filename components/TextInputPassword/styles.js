import { StyleSheet } from 'react-native';
import { ALTO, SILVER_CHALICE, GRAY, ROMAN } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    input: {
        height: 45,
        borderColor: ALTO,
        borderRadius: 10,
        borderWidth: 1,
        color: SILVER_CHALICE,
        paddingLeft: 10,
    },
    viewPassword: {
        position: 'absolute',
        right: scale(15),
        top: scale(40),
    },
})

export default styles;