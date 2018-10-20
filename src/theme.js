/**
 * see [styled-system/theming.md at master · jxnblk/styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/theming.md)
 * see [Component Based Design System With Styled-System](https://varun.ca/styled-system/)
 */
import { css } from 'styled-components'

const space = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512]

const globalStyles = css`
  html,
  body {
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }
`

const theme = {
  space,
  globalStyles,
}

export default theme
