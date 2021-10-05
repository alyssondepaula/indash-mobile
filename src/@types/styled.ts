
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean;

    colors: {
    sucess: string;
    danger: string;
    primary: string;
    secondary: string;

    white: string;
    gray001: string;
    gray002: string;
    gray003: string;
    };
  }
}