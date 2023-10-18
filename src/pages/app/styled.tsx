import 'styled-components'

import { light } from '../../common/theme/styled'


type ThemeTypes = typeof light

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeTypes { }
}
