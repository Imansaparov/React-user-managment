import styled from '@emotion/styled';
import { TableContainer, TextField, Box, TableCell, Paper, Button, Select, FormControl } from '@mui/material';
import { Theme as MuiTheme, PaletteColor } from '@mui/material/styles';

interface CustomTheme extends MuiTheme {
    palette: MuiTheme['palette'] & {
        primary: PaletteColor;
        background: {
            paper: string;
        };
        common: {
            black: string;
        };
    };
}

const hasPalette = (theme: any): theme is CustomTheme => {
    return theme && theme.palette;
};

export const UserListViewWrapper = styled('div')`
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: Roboto, 'Times New Roman', serif;
    
`;

export const HeaderSection = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
`;

export const StyledTitle = styled('h1')`
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => hasPalette(theme) ? theme.palette.text.primary : 'inherit'};
`;

export const FilterAndAddSection = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const StyledTextField = styled(TextField)`
    flex: 2;
    min-width: 200px;

    .MuiOutlinedInput-root {
        border-radius: 8px;
        &:hover fieldset {
            border-color: ${({ theme }) =>
                    hasPalette(theme) ? theme.palette.primary.main : 'inherit'};
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledFormControl = styled(FormControl)`
    flex: 1;
    min-width: 120px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledSelect = styled(Select)`
    width: 100%;
    color: ${({ theme }) => hasPalette(theme) ? theme.palette.text.primary : 'black'};

    .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => hasPalette(theme) ? theme.palette.divider : 'rgba(0, 0, 0, 0.23)'};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => hasPalette(theme) ? theme.palette.text.primary : 'rgba(0, 0, 0, 0.87)'};
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => hasPalette(theme) ? theme.palette.primary.main : 'black'};
    }
`;

export const SortButtons = styled('div')`
    display: flex;
    gap: 8px;
    flex: 0 0 auto;
`;

export const StyledButton = styled(Button)`
    height: 56px;
    font-size: 16px;
    font-weight: 500;
    text-transform: none;
    flex: 0 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledTableContainer = styled(TableContainer)`
    overflow-x: auto;
    margin-top: 20px;
    box-shadow: 0 4px 6px ${({ theme }) =>
            hasPalette(theme) ? theme.palette.action.hover : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 8px;
`;

export const StyledTableCell = styled(TableCell)`
    font-weight: 600;
    background-color: ${({ theme }) =>
            hasPalette(theme) ? `${theme.palette.primary.main}1A` : 'inherit'};
    color: ${({ theme }) => hasPalette(theme) ? theme.palette.text.primary : 'inherit'};
`;

export const ActionCell = styled(TableCell)`
    text-align: right;
`;

export const ModalContent = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: ${({ theme }) =>
    hasPalette(theme) ? theme.palette.background.paper : 'white'};
    box-shadow: ${({ theme }) =>
    hasPalette(theme) ? `0 4px 20px ${theme.palette.common.black}26` : 'none'};
    padding: 32px;
    border-radius: 8px;

    @media (max-width: 600px) {
        width: 95%;
        padding: 20px;
    }
`;

export const StyledPaper = styled(Paper)`
    box-shadow: none;
`;