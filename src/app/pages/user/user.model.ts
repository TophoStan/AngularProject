export class User {
  id: number = 0;
  firstName!: string;
  lastName!: string;
  emailAdress!: string;
  phoneNumber!: string;

  constructor(
    firstName = '',
    lastName = '',
    emailAdress = '',
    phoneNumber = ''
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAdress = emailAdress;
    this.phoneNumber = phoneNumber;
  }
}
