import { UserRole } from "./UserRole";

export interface IUserCreate{
    name: string;
    email: string;
    password: string;
    role: UserRole;
}