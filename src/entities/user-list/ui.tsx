import React from 'react';
import { Users } from './types.ts';
import './style.css';

type UserListProps = {
  users?: Users;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="list">
      {users?.map((user, index) => (
        <div className="user-card" key={user.id}>
          <span className="user-card__position">
            {index + 1}.
          </span>
          <span className="user-card__name">
            {user.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserList;