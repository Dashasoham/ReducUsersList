import { useRef } from 'react';
import userImage from '../../pictures/avatar.png';
import { useNavigate } from 'react-router-dom';

const UseAddNewUser = ({ users, setUsers }) => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const emailInputRef = useRef();
  const navigate = useNavigate();

  const handleUpdateUsersBtn = (e) => {
    e.preventDefault();

    const newUser = {
      id: users.length + 1, // Generate a unique ID for the new user
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      surname: surnameInputRef.current.value,
      avatar: userImage,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    navigate('../users');
  };
  return {
    nameInputRef,
    surnameInputRef,
    emailInputRef,
    handleUpdateUsersBtn,
    setUsers,
    users,
  };
};

export default UseAddNewUser;
