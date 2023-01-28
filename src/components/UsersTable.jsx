import React, { useState, useEffect } from 'react'
import { Table, Button, Modal } from 'react-bootstrap';
import Loading from './Loading';
import UserDetails from './UserDetails'

const MainTable = ({ searchText }) => {
  const [filterdUsers, setFilterdUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch users Data
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setFilterdUsers(data);
      setIsLoading(false);
    });
  }, []);

  // Open User Modal
  const handleShow = async (id) => {
    setShow(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setUser(data)
  }

  // Close User Modal
  const handleClose = () => {
    setShow(false);
  }

  // Search Users
  useEffect(() => {
    if (searchText) {
      const needle = searchText.toLowerCase();
      const copyFilterdUsers = users.filter(v => v.name.toLowerCase().indexOf(needle) > -1);
      setFilterdUsers(copyFilterdUsers);
    } else {
      setFilterdUsers(users);
    }
  }, [searchText, users])

  return (
    <div className='container text-center pt-4 pb-5'>
      { isLoading && <Loading /> }
      
      { filterdUsers.length > 0 ?
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>view</th>
            </tr>
          </thead>
          <tbody>
            {filterdUsers.map(item =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address.city}</td>
                <td>
                  <Button variant="primary" onClick={() => handleShow(item.id)}>
                    View
                  </Button>
                </td>
              </tr>
            )
            }

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {
                  <UserDetails user={user} />
                }
              </Modal.Body>
            </Modal>
          </tbody>
        </Table>
        :
        <h2>
          No Search Results
        </h2>
      }
    </div>
  )
}

export default MainTable;