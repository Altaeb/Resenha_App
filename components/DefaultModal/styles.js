import { StyleSheet } from 'react-native';
import { FUN_BLUE, WHITE } from '../../config/colors';
import { SCREEN_HEIGHT } from '../../helpers/constants';
import { scale, verticalScale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: FUN_BLUE,
        height: SCREEN_HEIGHT,
        paddingHorizontal: scale(40),
    },
    topContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: verticalScale(50),
        paddingBottom: verticalScale(30),
    },
    topContentText: {
        flex: 1,
        paddingRight: 30,
        textAlign: 'center',
        fontSize: scale(20),
        color: WHITE,
    },
    topContentIcon: {
        width: 40,
    },
    subContent: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: scale(18),
        color: WHITE,
    },
    modalIcon: {
        marginTop: verticalScale(30),
    },
    subTextContent: {
        color: WHITE,
        fontSize: scale(16),
        textAlign: 'center',
        marginTop: verticalScale(30),
    },
    contentChildren: {
        marginTop: verticalScale(30),
    }
})

export default styles;