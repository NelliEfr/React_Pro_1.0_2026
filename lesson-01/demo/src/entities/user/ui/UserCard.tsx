import React, { Children } from 'react'
import type { User } from '../model/types'
import styles from "./UserCard.module.css";
import { Button } from 'shared/ui';

type Props = {
    user: User;
    children?: React.ReactNode
  };
  
export const UserCard = React.memo(function({ user, children }: Props) {
    return (
      <div className={styles.card}>
        <p>{user.firstName}</p> 
        <p>{user.age} y.o.</p>
        { children }
      </div>
    );
})
