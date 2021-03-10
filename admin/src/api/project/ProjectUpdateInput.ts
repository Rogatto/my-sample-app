import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  email?: string;
  issues?: string | null;
  name?: string;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
};
