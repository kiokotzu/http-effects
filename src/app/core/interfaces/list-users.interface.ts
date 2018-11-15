import { User } from '../models/user.model';


export interface ListUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<User>;
}

export interface UserData {
  data: User;
}
