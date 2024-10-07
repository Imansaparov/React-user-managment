import {Theme as MuiTheme} from "@mui/material/styles/createTheme";
import {PaletteColor} from "@mui/material/styles";

export type StatusFilterType = 'all' | 'active' | 'inactive';

export type SortOrder = 'asc' | 'desc';

export interface UserFormProps {
  user?: UserType | null;
  onSubmit: (user: UserType) => void;
  onCancel: () => void;
}

export interface UserType {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

export interface UserState {
  users: UserType[];
  loading: boolean;
  error: string | null;
  sortBy: keyof UserType | null;
  sortOrder: 'asc' | 'desc';
  filter: string;
  statusFilter: StatusFilterType;
}

export interface UserListViewProps {
  users: UserType[];
  loading: boolean;
  error: string | null;
  filter: string;
  sortBy: keyof UserType | null;
  sortOrder: 'asc' | 'desc';
  isModalOpen: boolean;
  editingUser: UserType | null;
  onAddUser: (user: Omit<UserType, 'id'>) => void;
  onUpdateUser: (user: UserType) => void;
  onFilter: (value: string) => void;
  onSort: (column: keyof UserType) => void;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onEditUser: (user: UserType) => void;
  statusFilter: StatusFilterType;
  onStatusFilterChange: (value: StatusFilterType) => void;
}

export interface CustomTheme extends MuiTheme {
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

export interface UserListViewWrapperProps {
  theme: {
    background: string;
    color: string;
  };
}