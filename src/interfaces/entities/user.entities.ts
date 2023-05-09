export interface IUser {
  id: number;

  userName: string;

  emailAddress: string;

  name: string;

  address: string;

  userCode: string;

  roleNames: string[];

  surname: string;

  phoneNumber: string;

  allowedLeaveDay: number;

  managerId: number;

  branch: number;

  imagePath: string;

  level: number;

  sex: number;

  salary: number;

  salaryAt?: Date;

  morningStartAt?: string;

  morningEndAt?: string;

  morningWorking?: number;

  afternoonStartAt?: string;

  afternoonEndAt?: string;

  afternoonWorking?: number;
}
