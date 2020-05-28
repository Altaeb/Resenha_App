import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER, ALTO, BLACK16 } from '../../config/colors';

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: scale(95),
        height: scale(95),
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(90),
        height: scale(90),
        borderRadius: scale(90)/2,
        backgroundColor: ALTO,
    },
    iconEdit: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(33),
        height: scale(33),
        borderRadius: scale(33)/2,
        backgroundColor: MARINER,
        position: 'absolute',
        bottom: 0,
        right: 0,
        shadowColor: BLACK16,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
    },
});


export default styles;