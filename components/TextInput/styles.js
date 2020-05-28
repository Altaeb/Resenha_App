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
        marginBottom:-15,
    },
    
})

export default styles;