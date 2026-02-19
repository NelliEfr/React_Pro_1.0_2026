import { UsersList, useUsers } from 'features/usersList'
import React from 'react'

export function UsersWidget() {

    const { users } = useUsers();

  return (
    <div>
        <h2>Our users:</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate maxime molestiae, sunt harum facilis neque corporis ullam earum. Earum quasi aspernatur eos? Distinctio iure sequi dicta mollitia, cum deserunt.</p>
        
        <UsersList users={users} />
    </div>
  )
}