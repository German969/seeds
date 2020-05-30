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
    PRIMARY: '#1d69a6',
    SECONDARY: '#414141',
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
    HEIGHT: '80px'
  },
  SIDEBAR: {
    WIDTH: '80px'
  }
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      ' Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(',')
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
