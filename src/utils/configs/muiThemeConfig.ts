import { createTheme } from '@mui/material';
import appThemeConfig from './appThemeConfig';

const muiThemeConfig: any = {
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    primary: {
      main: appThemeConfig.colors.purple.primary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.MuiOutlinedInput-root.white-input': {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#fff',
          },
          '&&&:hover:not(.Mui-focused, .Mui-error) .MuiOutlinedInput-notchedOutline':
            {
              borderColor: '#fff',
            },
          '&&.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: '#fff',
            },
          '.MuiOutlinedInput-input': {
            padding: '8.5px 14px',
          },
        },
        '.MuiFormLabel-root': {
          '&.white-label':{
            color:'#fff',
            '&.Mui-focused':{
              color:'#fff',
            }
          },
        },
      },
    },
  },
};

export default createTheme(muiThemeConfig);
