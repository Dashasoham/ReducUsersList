import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSearchResult } from '../../store/actions/userListActions';

const UseUserList = () => {
  const dispatch = useDispatch();
  const { list, searchResult } = useSelector((state) => state.user);
  const userList = useSelector((state) => state.user.userList);

  console.log(list);

  const [searchTerm, setSearchTerm] = useState('');
  // const [searchResult, setSearchResult] = useState(null);

  // const [list, setList] = useState(users);

  const handleSearch = (e) => {
    e.preventDefault();
    const result = userList.find((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (result) {
      dispatch(updateSearchResult(result));
      // setSearchResult(result);
    } else {
      // return;
      dispatch(updateSearchResult(null));
    }
    setSearchTerm('');
  };

  const handleBack = () => {
    dispatch(updateSearchResult(null));
    // setSearchResult(null);
  };

  return {
    searchTerm,
    setSearchTerm,

    searchResult,
    // setSearchResult,

    handleSearch,
    handleBack,
    userList,
  };
};

export default UseUserList;
