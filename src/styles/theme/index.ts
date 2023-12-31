import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { shadows } from './shadows';
const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  breakpoints,
  shadows,
});

export default customTheme;
