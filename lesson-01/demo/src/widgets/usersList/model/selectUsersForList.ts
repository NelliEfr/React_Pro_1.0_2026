import type { RootState } from "app/store";
import { usersApi } from "entities/user/api/usersApi";

export const selectUsersForList = (state: RootState) => {
  const { data: users } = usersApi.endpoints.getUsers.select()(state); // достаем из кэша

  const deletedIds = state.deleteUser.locallyDeletedIds;

  if (!users) return [];

  return users
    .filter((user) => !deletedIds.includes(user.id))
};