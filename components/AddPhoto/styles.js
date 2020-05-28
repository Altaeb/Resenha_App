import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';
import { ALTO } from '../../config/colors';

const styles = StyleSheet.create({
    wrapper: {
        width: scale(80),    
        height: scale(56),    
        borderRadius: 5,
        borderWidth: 1,
        borderColor: ALTO,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles;