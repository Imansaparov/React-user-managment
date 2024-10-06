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

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0 0 6px 6px;
    background: var(--color-grey);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgb(189, 189, 189);
    border: 4px solid var(--color-grey);
    background-clip: padding-box;
  }
`;

const title18 = css`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`;

const sliderContainer = css`
  width: calc((100vw - 100%) / 2 + 100%);
  padding-right: 30px !important;

  @media screen and (max-width: ${breakpoints.md}) {
    padding-right: 16px !important;
  }
`;

export const sharedStyles = {
  container,
  scrollbar,
  title18,
  sliderContainer,
};
