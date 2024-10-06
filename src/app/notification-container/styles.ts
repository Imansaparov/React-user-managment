import { css } from "@emotion/css";

const toast = css`
  .Toastify__toast {
    min-height: 54px;
    font-weight: 500;
    padding: 3px 8px;
    letter-spacing: 0.01em;
    font-family: var(--font-primary);
  }

  .Toastify__toast-theme--colored {
    &.Toastify__toast--warning {
      background-color: var(--color-orange);
    }
  }
`;

export const styles = {
  toast,
};
