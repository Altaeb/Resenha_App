import { StyleSheet, Platform } from 'react-native';
import { MARINER, BLACK16 } from '../../config/colors';

export default StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
        height: 100,
        paddingTop: Platform.OS == "ios" ? 0 : 30,
        elevation: 5,
        shadowColor: BLACK16,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .4,
        shadowRadius: 2,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    text: {
        flex: 1,
        paddingRight: 40,
        textAlign: 'center',
        fontSize: 20,
        color: MARINER,
    },
    icon: {
        width: 40,
    }
})

