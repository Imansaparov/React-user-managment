import styled from "@emotion/styled";
import {
  Button as MuiButton,
  CircularProgress as MuiCircularProgress,
} from "@mui/material";
import { ButtonProps } from "@/shared/ui/button/button.tsx";

const Button = styled(MuiButton)<ButtonProps>`
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.15px;
  text-transform: unset;
  padding: 8px 22px;

  &[loading="true"] {
    color: transparent !important;
  }

  &.MuiButton-contained {
    border-radius: 2px;

    &:disabled {
      background-color: var(---color-text-disabled);
    }

    &Primary {
      background: linear-gradient(90deg, #a334e9 18.91%, #29a9ea 100%);
    }
  }
`;

const CircularProgress = styled(MuiCircularProgress)`
  color: white;
  position: absolute;
`;

export const styles = {
  Button,
  CircularProgress,
};
