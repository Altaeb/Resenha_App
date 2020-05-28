import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';
import { DOVE_GRAY, WHITE, WILD_SAND, MARINER } from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scale(25),
        marginBottom: scale(10),
        borderBottomColor: WILD_SAND,
        borderTopColor: WILD_SAND,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    indexWrapper: { 
        width: scale(24), 
        height: scale(24), 
        marginRight: scale(20), 
        borderRadius: scale(24 / 2), 
        backgroundColor: MARINER, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    indexText: {
        color: WHITE,
    },
    textWrapper: { 
        width: '45%', 
        marginRight: scale(30) 
    },
    text: { 
        color: DOVE_GRAY, 
        fontSize: scale(15) 
    },
})

export default styles;