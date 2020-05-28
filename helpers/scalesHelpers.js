import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/*
* Helper para calcular proporções de tamanho para elementos, baseado no tamanho
* do layout (guidelineBaseWidth e guidelineBaseHeight). Exemplo de uso:
*
*    text: {
*        fontSize: moderateScale(14),
*        ...
*    },
*
*    sendo que o texto ficaria com tamanho 14 em uma tela 375 e aumentaria ou
*    diminuiria proporcionalmente conforme o tamanho da tela do dispositivo
*/
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;


const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.25) => size + ((scale(size) - size) * factor);
const headerHeight = scale(100);
const footerHeight = scale(80);

const croppedViewHeight = height - (headerHeight + footerHeight)

export { scale, verticalScale, moderateScale, croppedViewHeight };
