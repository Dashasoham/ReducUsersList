import { useState } from 'react';

const UseUserList = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const result = users.find((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResult(result);
  };
  return {
    searchTerm,
    setSearchTerm,
    searchResult,
    setSearchResult,
    handleSearch,
  };
};

export default UseUserList;
