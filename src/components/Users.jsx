import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadUsers = useLoaderData()
    const [users, setUsers] = useState(loadUsers)

    const handleDelete = id => {
        // make sure user confirmed to delete
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('User deleted successfully')
                // remove the user from UI
                const remainingUsers = users.filter(user => user._id !== id)
                setUsers(remainingUsers)
            }
        })

    }

    return (
        <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center my-10">Users: {loadUsers.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button 
                                    onClick={() => handleDelete(user._id)}
                                    className="btn btn-sm">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;