import { css } from "@emotion/css";

import { breakpoints } from "./breakpoints";

const container = css`
  width: 100%;
  max-width: 1296px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.md}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const sharedStyles = {
  container,
};
