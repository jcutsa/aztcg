import React, { useEffect, useState } from "react";
import axios from "axios";

// Using this as an example of how to call from restAPI
function Test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/product/getAll")
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Getting Object from API:", data);
        setUsers(data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);


  
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Test;
