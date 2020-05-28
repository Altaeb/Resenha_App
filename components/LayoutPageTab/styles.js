import { StyleSheet } from 'react-native';
import { MARINER, WHITE } from '../../config/colors';
import { scale } from '../../helpers/scalesHelpers';
import { SCREEN_HEIGHT_TOOLBAR_OFF } from '../../helpers/constants';

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT_TOOLBAR_OFF,
    },  
    wrapper: {
        height: 195,
        backgroundColor: MARINER,
        paddingTop: 60,
        paddingHorizontal: scale(40),
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        // paddingLeft: 30,
        // paddingRight: 30,
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
        fontSize: scale(16),
        color: WHITE,
    },
    activeTab: {
        borderRadius: 13,
        backgroundColor: 'rgba(43, 196, 243, 0.8)',
    },
    tabName: {
        fontSize: scale(22), 
        color: WHITE, 
        marginLeft: scale(10),
    }
});

export default styles;
