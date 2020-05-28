import { StyleSheet } from 'react-native';
import { MARINER, WHITE, ALTO, DOVE_GRAY, GALLERY } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';
import { SCREEN_HEIGHT_TOOLBAR_OFF } from '../../helpers/constants';

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT_TOOLBAR_OFF,
    },
    wrapper: {
        height: 195,
        backgroundColor: MARINER,
        paddingTop: 35,
        paddingHorizontal: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: scale(76),
        height: scale(76),
        borderRadius: (scale(76) / 2),
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBorder: {
        borderWidth: 1, 
        marginBottom: scale(5), 
        borderColor: WHITE, 
        borderRadius: (scale(80) / 2), 
        padding: 2,
    },
    shareOption: {
        borderTopWidth: 1,
        borderTopColor: ALTO,
    },
    shareOptionTouch: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: scale(20),
        alignItems: 'center',
        paddingHorizontal: scale(30),
    },
    collapseLayout: {
        marginHorizontal: 0,
    },
    textShareOption: {
        marginLeft: scale(15),
        color: DOVE_GRAY,
    },
    collapse: {
        marginTop: -1,
    },  
    itemCollapse: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemHeader: {
        paddingVertical: scale(15),
        paddingLeft: scale(35),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: ALTO,
        borderTopColor: ALTO,
    },
    itemCollapseContent: {
        backgroundColor: GALLERY,
        paddingVertical: scale(15),
        paddingHorizontal: scale(35),
    },
    collapseWrapper: {
        marginTop: scale(10),
    },
    messageWrapper: {
        marginTop: scale(20),
        paddingHorizontal: scale(40),
    },
    messageText: {
        fontSize: 11,
        color: DOVE_GRAY,
    },
    termContent: {
        marginVertical: scale(20),
    },
    termContentTitle: {
        fontSize: scale(15),
        color: DOVE_GRAY,
    },
    termContentSubtitle: {
        fontSize: scale(11),
        marginVertical: scale(10),
        color: DOVE_GRAY,
    },
    termContentText: {
        fontSize: scale(13),
        color: DOVE_GRAY,
    },
    aboutWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    logo: {
        marginVertical: scale(20),
    },
    aboutText: {
        color: DOVE_GRAY,
    }
});

export default styles;
