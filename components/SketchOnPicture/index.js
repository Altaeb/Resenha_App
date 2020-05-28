import React from 'react';
import PropTypes from 'prop-types';
import '@expo/browser-polyfill';
import { PIXI, Sketch, Signature } from 'expo-pixi';
import {
    Platform,
    AppState,
    View,
    Dimensions,
    PixelRatio,
    ActivityIndicator
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { scale } from '../../helpers/scalesHelpers';
import uuidv4 from 'uuidv4';
import { DOVE_GRAY } from '../../config/colors';
import { storeData, retrieveData } from '../../helpers/storage';
import styles from './styles';

const isAndroid = Platform.OS === 'android';

const canvasWidth = Dimensions.get('window').width;
const canvasHeight = scale(310);
const scaleR = PixelRatio.get();

class SketchOnPicture extends React.Component {
    state = {
        onChangeAction: '',
        showSketch: false,
        image: null,
        strokeColor: '0xD65C5C',
        strokeWidth: 2,
        lines: [],
        appState: AppState.currentState,
        layoutWidth: null,
        layoutHeight: null,
    };

    handleAppStateChangeAsync = nextAppState => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            if (isAndroid && this.sketch) {
                this.setState({ appState: nextAppState, id: uuidv4(), lines: this.sketch.lines });
                return;
            }
        }
        this.setState({ appState: nextAppState });
    };

    async componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChangeAsync);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChangeAsync);
    }

    onChangeAsync = async (param) => {
        const { uri } = await this.sketch.takeSnapshotAsync();

        this.setState({
            image: { uri },
            showSketch: false,
        });

        this.props.screenProps.saveSnapshot(uri);

        this.props.callBackOnChange({
            image: uri,
            changeAction: this.state.onChangeAction,
            startSketch: this.startSketch,
            undoSketch: this.undoSketch,
        });
    };
    onLayout = async ({
        nativeEvent: {
            layout: { width, height },
        },
    }) => {
        this.setState({
            layoutWidth: width,
            layoutHeight: height,
        })
        this.onReady();
    }
    onReady = async () => {
        const { layoutWidth, layoutHeight, points } = this.state;
        this.sketch.graphics = new PIXI.Graphics();

        if (this.sketch.stage) {

            if (layoutWidth && layoutHeight) {
                const background = await PIXI.Sprite.fromExpoAsync(this.props.image);
                background.width = layoutWidth * scaleR;
                background.height = layoutHeight * scaleR;

                this.sketch.stage.addChild(background);
                this.sketch.renderer._update();
            }
        }
    };

    startSketch = () => {
        this.setState({
            showSketch: !this.state.showSketch,
            onChangeAction: 'sketch',
        })
    }

    undoSketch = () => {
        this.sketch.undo();
        this.setState({
            onChangeAction: 'undo',
        })
    }

    removeLine = (markIndex) => {
        let markIndexSum = markIndex + 1;

        if (!this.sketch.renderer || this.sketch.stage.children.length === 0) {
            return;
        }
        const child = this.sketch.stage.children[markIndexSum];
        this.sketch.stage.removeChild(child);
        this.sketch.renderer._update();
    }

    render() {
        return (
            <View>
                <ImageZoom cropWidth={canvasWidth}
                    cropHeight={canvasHeight}
                    pinchToZoom={!this.state.showSketch}
                    imageWidth={canvasWidth}
                    imageHeight={canvasHeight}>
                    <View
                        onLayout={this.onLayout}
                        style={styles.sketchWrapper}>

                        <View style={styles.activeIndicator}>
                            <ActivityIndicator size="small" color={DOVE_GRAY} />
                        </View>
                        <View style={styles.sketchContainer}>
                            <Sketch
                                ref={ref => (this.sketch = ref)}
                                style={styles.sketch}
                                strokeColor={this.state.strokeColor}
                                strokeWidth={this.state.strokeWidth}
                                strokeAlpha={1}
                                onChange={this.onChangeAsync}
                                onReady={this.onReady}
                            />
                            {!this.state.showSketch && <View style={styles.sketchOverlay} />}
                        </View>
                    </View>
                </ImageZoom>
                {this.props.children({
                    startSketch: this.startSketch,
                    undoSketch: this.undoSketch,
                    removeLine: this.removeLine,
                })}
            </View>
        );
    }
}

SketchOnPicture.propTypes = {
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

export default SketchOnPicture;
