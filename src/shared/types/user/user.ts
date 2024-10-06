export type StatusFilterType = 'all' | 'active' | 'inactive';

export type SortOrder = 'asc' | 'desc';

export interface UserFormProps {
  user?: User | null;
  onSubmit: (user: User) => void;
  onCancel: () => void;
}

export interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  sortBy: keyof User | null;
  sortOrder: 'asc' | 'desc';
  filter: string;
}

export interface UserListViewProps {
  users: User[];
  loading: boolean;
  error: string | null;
  filter: string;
  sortBy: keyof User | null;
  sortOrder: 'asc' | 'desc';
  isModalOpen: boolean;
  editingUser: User | null;
  onAddUser: (user: Omit<User, 'id'>) => void;
  onUpdateUser: (user: User) => void;
  onFilter: (value: string) => void;
  onSort: (column: keyof User) => void;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onEditUser: (user: User) => void;
  statusFilter: StatusFilterType;
  onStatusFilterChange: (value: string) => void;
}