import { StyleSheet } from 'react-native';
import { GRAY, ROMAN, MARINER } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    label: {
        color: GRAY, 
        fontSize: scale(12),
        marginBottom: 5,
        marginTop:15
    },
    wrapper: {
        marginBottom: 20,
    },
    errorLabel: { 
        color: ROMAN, 
        fontSize: scale(14), 
        marginTop: scale(5) 
    },
    questionButton: {
        width: scale(20),
        height: scale(20),
        borderRadius: scale(20)/ 2,
        backgroundColor: MARINER,   
        marginLeft: scale(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(8),
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },  
})

export default styles;