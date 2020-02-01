export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public password: string;
  public tel: string;
  public email: string;
  public role: string;
  public createdAt: Date;
  public token?: string;

  constructor(input?: User) {
    Object.assign(this, input);
    this.createdAt = new Date(input.createdAt);
  }
}
