// import green from '@material-ui/core/colors/green'
// import purple from '@material-ui/core/colors/purple'
// import { orange } from '@material-ui/core/colors'
import {
  createGenerateClassName,
  createMuiTheme
} from '@material-ui/core/styles'
import { SheetsRegistry } from 'jss'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  /* palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  }, */
  /* palette: {
    primary: orange
  }, */
  typography: {
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
