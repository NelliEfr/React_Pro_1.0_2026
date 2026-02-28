import { useCallback, useEffect, useState } from "react";
import type { User } from "entities/user";
import { useGetUsersQuery } from "entities/user";

// const initialUsers: User[] = [
//   { id: 1, firstName: "Alice", age: 22 },
//   { id: 2, firstName: "Bob", age: 30 },
//   { id: 3, firstName: "Charlie", age: 25 },
//   { id: 4, firstName: "David", age: 27 },
// ];

export function useUsers() {

    const { data: remoteUsers = [], isLoading, error } = useGetUsersQuery();
    const [users, setUsers] = useState<User[]>(remoteUsers);

    useEffect(() => {
      if (remoteUsers.length > 0 && users.length === 0) {
        setUsers(remoteUsers);
      }
    }, [remoteUsers, users.length]);


    // const deleteUser = (id: number) => {
    //     setUsers(users.filter(user => user.id !== id));
    // };

    const deleteUser = useCallback((id: number) => {
      setUsers(prev => prev.filter(user => user.id !== id));
    }, [])
    
    
    return {
      users,
      deleteUser
    };
}