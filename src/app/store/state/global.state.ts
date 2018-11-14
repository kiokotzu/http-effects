import { User } from '../../core/models/user.model';

export interface UserState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export type GlobalState = Readonly<{
  listUsers: UserState
}>;

export const INITIAL_MODELS_STATE: GlobalState = {
  listUsers: {
    users: [],
    loaded: false,
    loading: false,
    error: null
  }
};
