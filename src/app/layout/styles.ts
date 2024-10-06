import { css } from "@emotion/css";
import { breakpoints } from "@/shared/styles";

const main = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 62px 0;

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 42px 0;
  }
`;

export const styles = {
  main,
};
