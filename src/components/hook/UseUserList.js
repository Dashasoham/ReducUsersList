import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseUserList = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  // const [list, setList] = useState(users);

  const handleSearch = () => {
    const result = users.find((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResult(result);
    setSearchTerm('');

    // setList(users);
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
  };
};

export default UseUserList;
