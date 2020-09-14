import * as StyledComponents from "styled-components";
import { Theme } from "./theme";

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  ThemeProvider,
} = StyledComponents as StyledComponents.ThemedStyledComponentsModule<Theme>;

export { css, keyframes, createGlobalStyle, ThemeProvider };

export default styled;
