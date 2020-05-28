import { GRAY, ROMAN } from '../../config/colors';
import { StyleSheet } from 'react-native';
import { scale } from '../../helpers/scalesHelpers';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
  label: {
    color: GRAY,
    fontSize: scale(12),
    marginBottom: 5,
  },
  errorLabel: {
    color: ROMAN,
    fontSize: scale(14),
    marginTop: scale(5)
  }
});

export default styles;
