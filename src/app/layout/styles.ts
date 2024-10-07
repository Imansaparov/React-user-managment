import { css } from "@emotion/css";
import { breakpoints } from "@/shared/styles";

const main = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px 0;

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 32px 0;
  }
`;

export const styles = {
  main,
};
