import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  createdAt?: Date;
  description?: string | null;
  dueDate?: Date | null;
  email?: string;
  id?: string;
  issues?: string | null;
  name?: string;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
  updatedAt?: Date;
};
