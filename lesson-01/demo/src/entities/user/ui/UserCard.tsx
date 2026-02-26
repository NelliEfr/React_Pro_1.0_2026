import React from 'react'
import type { User } from '../model/types'
import styles from "./UserCard.module.css";
import { Button } from 'shared/ui';

type Props = {
    user: User;
    action: (id: number) => void
  };
  
export const UserCard = React.memo(function({ user, action }: Props) {
    return (
      <div className={styles.card}>
        <p>{user.firstName}</p> 
        <p>{user.age} y.o.</p>
        <Button onClick={() => action(user.id)}>
            Delete
        </Button>
      </div>
    );
})
