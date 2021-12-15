import React from 'react';
import UserItem from './UserItem';
import './UserList.css';

function UserList(props) {
    const { users } = props;

    

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            <div className = "list"> 
                { users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        salary = { user.salary }
                        image = { user.image }
                        // isGoldClient={ user.isGoldClient(id) }
                        key={ index }
                        // onDelete = {users.remeveUser}
                    />
                })}
            </div>
        </div>
    );
}

export default UserList;