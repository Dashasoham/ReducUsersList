import { useRef } from 'react';
import userImage from '../../pictures/avatar.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../store/actions/userListActions';

const UseAddNewUser = () => {
  const dispatch = useDispatch();

  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const emailInputRef = useRef();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.user.userList);

  const handleUpdateUsersBtn = (e) => {
    e.preventDefault();

    const newUser = {
      id: userList.length + 1, // Generate a unique ID for the new user
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      surname: surnameInputRef.current.value,
      avatar: userImage,
    };

    dispatch(addUser(newUser));

    navigate('../users');
  };
  return {
    nameInputRef,
    surnameInputRef,
    emailInputRef,
    handleUpdateUsersBtn,
  };
};

export default UseAddNewUser;
