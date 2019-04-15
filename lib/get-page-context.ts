import { createGenerateClassName, createMuiTheme } from '@material-ui/core'
import { lightGreen } from '@material-ui/core/colors'
import { SheetsRegistry } from 'jss'

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
    fontSize: 14,
    useNextVariants: true
  }
})

function createPageContext () {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  }
}

let pageContext

export default function getPageContext () {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  const isServer = !process.browser
  if (isServer) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!pageContext) {
    pageContext = createPageContext()
  }

  return pageContext
}
