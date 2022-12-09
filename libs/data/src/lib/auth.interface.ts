export interface UserCredentials {
  emailAddress: string;
  password: string;
}

export interface UserRegistration extends UserCredentials {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isStudent: boolean;
}

export interface Token {
  token: string;
}
