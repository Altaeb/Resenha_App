import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';
import { MARINER } from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        height: 50,
        alignItems: 'center',
        backgroundColor: MARINER,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 5,
    }
});

export default styles;
