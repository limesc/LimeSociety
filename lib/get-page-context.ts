import { createGenerateClassName, createMuiTheme } from '@material-ui/core'
import { grey, lightGreen } from '@material-ui/core/colors'
import { SheetsRegistry } from 'jss'

// A theme with custom primary and secondary color.
// It's optional.
const rawTheme = createMuiTheme({
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
    /* primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f'
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958'
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700]
    } */
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    useNextVariants: true
  }
})

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium
}

const fontSubtitle = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium
}

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200]
    }
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 32
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 14,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      ...fontSubtitle,
      fontSize: 18
    },
    body2: {
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 14
    }
  }
}

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
