import { createMuiTheme } from '@material-ui/core/styles';

export const STYLE = {
  FONT: {
    SIZE: {
      HEADING_BIG: 32,
      HEADING_1: 18,
      PARAGRAPH: 15,
      PARAGRAPH_SMALL: 13
    }
  },
  COLOR: {
    PRIMARY: '#38A66C',
    PRIMARY_SECOND: '#37A66C',
    SECONDARY: '#414141',
    SECONDARY_DARKER: '#444444',
    TERTIARY: '#E7ECFA',
    QUATERNARY: '#9FA7BC',
    QUINARY: '#F6F6F6',
    QUINARY_LIGHTER: '#F5F5F5',
    SENARY: '#414141',
    SEPTENARY: '#999999',
    BLACK: '#000000',
    WHITE: '#FFF',
    LIGHT_GRAY: '#EEEEEE',
    LIGHT_GRAY2: '#C8C8C8',
    LIGHT_GRAY3: '#E5E5E5',
    GRAY20: '#333333',
    ERROR: '#FF0000',
    GREEN_LIGHT: '#00AA66'
  },
  HEADER: {
    HEIGHT: '80px',
    SPACER_HEIGHT: '80px'
  },
  SIDEBAR: {
    WIDTH: '80px'
  }
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Hind'].join(',')
  },
  palette: {
    primary: {
      main: STYLE.COLOR.PRIMARY
    },
    secondary: {
      main: STYLE.COLOR.SECONDARY
    },
    background: {
      default: STYLE.COLOR.WHITE
    }
  }
});
