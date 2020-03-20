import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
// https://in-your-saas.github.io/material-ui-theme-editor/
const theme = createMuiTheme({
    palette: {
        common: { black: 'rgba(43, 23, 147, 1)', white: '#fff' },
        background: { paper: '#fff', default: '#fafafa' },
        primary: {
            light: 'rgba(63, 72, 217, 1)',
            main: 'rgba(24, 33, 82, 1)',
            dark: '#303f9f',
            contrastText: '#fff',
        },
        secondary: {
            light: 'rgba(115, 57, 164, 1)',
            main: 'rgba(82, 33, 125, 1)',
            dark: 'rgba(68, 3, 168, 1)',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: 'rgba(237, 59, 46, 1)',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(43, 23, 147, 1)',
            secondary: 'rgba(82, 33, 125, 1)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
    },
})

export default theme
