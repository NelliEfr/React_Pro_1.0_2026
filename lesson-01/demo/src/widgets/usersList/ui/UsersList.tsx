import React from 'react'
import styles from "./UsersList.module.css";
import { useGetUsersQuery, UserCard } from 'entities/user';
import { Button } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from 'app/store';
import { selectUsersForList } from '../model/selectUsersForList';
import { deleteUserLocally } from 'features/deleteUser';


export function UsersList() {

    const dispatch = useDispatch<AppDispatch>();
    const { isLoading } = useGetUsersQuery();
    const users = useSelector(selectUsersForList);

    if (isLoading) return <p>Loading...</p>

    return (
      <div className={styles.users}>
        {users.map(user => (
          <UserCard key={user.id} user={user}>
            <Button onClick={() => dispatch(deleteUserLocally(user.id))}>Delete</Button>
          </UserCard>
        ))}
      </div>
    );
}