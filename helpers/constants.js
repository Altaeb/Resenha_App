import { Dimensions } from 'react-native';
import { scale } from './scalesHelpers';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const FOOTER_HEIGHT = scale(80);

export const SCREEN_HEIGHT_TOOLBAR_OFF = SCREEN_HEIGHT - FOOTER_HEIGHT;