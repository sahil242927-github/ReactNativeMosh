import { Platform } from 'react-native';

import colors from '../config/colors';

// Default Styles
export default {
  colors,
  text: {
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark,
  },
};
