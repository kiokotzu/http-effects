import { User } from '../../core/models/user.model';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export type GlobalState = Readonly<{
  listUsers: UsersState,
  user: UserState
}>;


export const INITIAL_MODELS_STATE: GlobalState = {
  listUsers: {
    users: [],
    loaded: false,
    loading: false,
    error: null
  },
  user: {
    user: null,
    loaded: false,
    loading: false,
    error: null
  }
};
