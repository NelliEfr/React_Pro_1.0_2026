import React from 'react'
import styles from "./UsersList.module.css";
import type { User } from 'entities/user';
import { UserCard } from 'entities/user';

type Props = {
    users: User[];
    action: (id: number) => void
};

export function UsersList({ users, action }: Props) {
    return (
      <div className={styles.users}>
        {users.map(user => (
          <UserCard key={user.id} user={user} action={action} />
        ))}
      </div>
    );
}