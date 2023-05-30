import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { updateSearchResult } from '../../actions/userListActions';

const UseUserList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.user);
  const userList = useSelector((state) => state.user.userList);

  console.log(list);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  // const [list, setList] = useState(users);

  const handleSearch = () => {
    const result = userList.find((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(updateSearchResult(result));

    // setSearchResult(result);
    setSearchTerm('');
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return {
    searchTerm,
    setSearchTerm,
    searchResult,
    setSearchResult,
    handleSearch,
    handleBack,
    userList,
  };
};

export default UseUserList;
