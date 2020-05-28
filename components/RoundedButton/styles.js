import { StyleSheet } from 'react-native';
import { BLACK16 } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: scale(20),
        right: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: BLACK16,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 4,
    }
})

export default styles