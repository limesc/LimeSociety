import { createMuiTheme } from '@material-ui/core'
import { lightGreen } from '@material-ui/core/colors'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white'
      }
    }
  },
  palette: {
    primary: {
      light: lightGreen[300],
      main: '#a2cb0f', // lightGreen[500],
      dark: lightGreen[700]
    }
    // secondary
    // error
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 14
  }
})

export default theme
