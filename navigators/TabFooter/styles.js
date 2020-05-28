import { StyleSheet } from 'react-native';
import { PICTON_BLUE, WHITE, BLACK } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: scale(80),
        shadowColor: BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,

        elevation: 6,
        backgroundColor: WHITE,
    },
    tabButtonWrapper: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    tabButton: { 
        flex: 0, 
        width: 44, 
        height: 44, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    tabButtonActive: { 
        borderRadius: 44 / 2, 
        backgroundColor: PICTON_BLUE 
    },
});


export default styles;
