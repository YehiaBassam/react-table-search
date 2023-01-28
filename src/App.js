import "bootstrap/dist/css/bootstrap.min.css";
import UsersTable from "./components/UsersTable";
import MainHeader from "./components/MainHeader";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState('');

  const searchHandler = (text) => {
    setSearchText(text)
  };

  return (
    <>
      <MainHeader />
      <Search onSearch={searchHandler}/>
      <UsersTable searchText={searchText}/>
    </>
    );
}

export default App;
