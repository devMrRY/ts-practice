// create Union with all the values of an object

export interface UserRoleConfig {
  user: ["view", "create", "patch"];
  superAdmin: ["view", "create", "update", "delete"];
}

export type Role = UserRoleConfig[keyof UserRoleConfig][number];
