import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// extendTheme is a new API
const theme = extendTheme({
  colorSchemes: {
    light: {
      // palette for light mode
      palette: {
        customText: {
          main: '#000000' //black
        },
        customBackGround: {
          main: '#ffffff'
        },
        buttonColor: {
          main: '#000000'
        }
      }
    },
    dark: {
      // palette for dark mode
      palette: {
        customText: {
          main: '#ffffff' //white
        },
        customBackGround: {
          main: '#000000'
        },
        buttonColor: {
          main: '#ffffff'
        }
      }
    }
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            textTransform: 'none',
            color: theme.palette.customText.main
          }
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          margin: '0 !important',
          width: '100%'
        })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '0 !important',
          // width: "100%",
          boxShadow: 'none'
        })
      }
    }
  }
})

export default theme
