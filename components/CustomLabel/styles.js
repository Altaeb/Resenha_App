import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scale(6),
        borderRadius: 8,
        width: scale(180),
    }
});

export default styles;