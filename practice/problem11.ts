// create Union with all the values of an object

interface UserRoleConfig {
  user: ["view", "create", "patch"];
  superAdmin: ["view", "create", "update", "delete"];
}

type Role = UserRoleConfig[keyof UserRoleConfig][number];
