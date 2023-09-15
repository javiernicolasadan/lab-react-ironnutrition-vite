import { Divider, Input } from 'antd';


function Search({search, setSearch}) {
  /* console.log("search", search) */
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={(e) => {setSearch(e.target.value)}} />
    </>
  );
}

export default Search;