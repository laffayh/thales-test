import { User } from './user.model';

interface Info {
  seed: string;
  results: number;
  page: number;
  version: number;
}

export interface GetUsersListResponse {
  results: Array<User>;
  info: Info;
}
