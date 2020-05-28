import { StyleSheet, Dimensions } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';

const canvasWidth = Dimensions.get('window').width;
const canvasHeight = scale(310);

const styles = StyleSheet.create({
    sketch: {
        justifyContent: 'center',
        flex: 1,
    },
    sketchContainer: {
        flex: 1,
        width: canvasWidth,
        height: canvasWidth,
    },
    sketchOverlay: {
        top: 0,
        left: 0,
        // opacity: 1,
        width: canvasWidth,
        height: canvasHeight,
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    sketchWrapper: {
        position: 'relative',
        width: canvasWidth,
        height: canvasHeight,
    },
    activeIndicator: {
        position: 'absolute',
        top: '50%',
        marginTop: scale(-10),
        left: '50%',
        marginLeft: scale(-10), 
    }
});

export default styles;