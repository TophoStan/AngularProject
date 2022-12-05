export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  isStudent: boolean;
}
export interface UserInfo extends UserIdentity {
  emailAddress: string;
}

export interface User extends UserInfo {
  firstName: string;
  lastName: string;
  emailAdress: string;
  phoneNumber: string;
  isStudent: boolean;
}
export interface UserIdentity {
  id: Id;
  name: string;
}
export type Id = string;
export type ResourceId = { id: Id };
