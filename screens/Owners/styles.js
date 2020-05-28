import { StyleSheet } from 'react-native';
import { MARINER, DOVE_GRAY, ALTO, WHITE } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    textSendingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scale(10),
        justifyContent: 'flex-end',
    },
    textSending: {
        fontSize: scale(12),
        color: MARINER,
        textAlign: 'right',
        marginRight: 10,
    },
    textDocument: {
        fontSize: scale(22),
        color: MARINER,
        marginBottom: scale(8),
    },
    textTitle: {
        fontSize: scale(13),
        color: MARINER,
    },
    textSubtitle: {
        fontSize: scale(14),
        color: DOVE_GRAY,
    },
    textWrapper: {
        position: 'relative',
        marginBottom: scale(10),
    },
    titleWrapper: {
        marginTop: scale(8),
    },
    customDate: {
        position: 'absolute',
        right: 0,
        top: scale(10),
    },
    labelWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    customInput: {
        marginHorizontal: scale(20),
        marginTop: scale(-20)
    },
    textOps: {
        color: DOVE_GRAY,
        textAlign: 'center',
        fontSize: scale(16),
        marginVertical: scale(25),
    },
    imageOps: {
        alignItems: 'center',
        paddingVertical: scale(30)
    },
    titleShare: {
        color: DOVE_GRAY,
    },
    topWrapperShare: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    numberShare: {
        color: MARINER,
        fontSize: scale(25),
        marginTop: 20,
    },
    iconShare: {
        marginLeft: scale(-10),
        marginTop: scale(20),
    },
    shareViaText: {
        color: MARINER,
        fontSize: scale(15),
        marginLeft: scale(30),
        marginBottom: scale(20),
    },
    shareOptionsWrapper: {
        marginTop: scale(40),
    },
    shareOption: {
        flexDirection: 'row',
        paddingVertical: scale(20),
        alignItems: 'center',
        paddingHorizontal: scale(30),
        borderTopWidth: 1,
        borderTopColor: ALTO,
    },
    shareOptionTouch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    collapseLayout: {
        marginHorizontal: 0,
    },
    textShareOption: {
        marginLeft: scale(15),
    },
    modalConfirmContent: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: scale(-10),
        marginBottom: scale(35),
    },
    wrapper: { 
        height: 195, 
        backgroundColor: MARINER ,
        paddingTop: 60,
        paddingHorizontal: scale(40),
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    text: {
        flex: 1,
        paddingLeft: 20,
        fontSize: 20,
        color: MARINER,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    icon: {
        width: 30,
    },
    tabsWrapper: {
        flexDirection: 'row',
        backgroundColor: 'rgba(43, 196, 243, 0.5)',
        borderRadius: 13,
        marginTop: 20,
    },
    tabs: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 41,
    },
    tabsText: {
        fontSize: scale(17),
        color: WHITE,
    },
    activeTab: {
        borderRadius: 13,
        backgroundColor: 'rgba(43, 196, 243, 0.8)',
    },
    textTopBox: {
        alignItems: 'flex-end',
        marginRight: scale(40),
    }
})

export default styles;