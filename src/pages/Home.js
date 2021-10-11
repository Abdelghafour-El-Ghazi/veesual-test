import React, { useState } from "react";
import { Input, Empty } from "antd";
import { getAlbums } from "../api";
import Albums from "../components/Albums";

const { Search } = Input;
const Home = ({ history }) => {
  // the total of fetched items
  const [items, setItems] = useState([]);
  // the cursor for the first element in a page
  const [cursor, setCursor] = useState(0);
  // the total number of elements
  const [total, setTotal] = useState(0);
  // loading while fetching
  const [searchLoading, setSearchLoading] = useState(false);
  // the keyword used in the search
  const [keyWord, setKeyWord] = useState("");

  // Handling the search using the value of the keyword and the offset depending on the current page
  const onSearch = async (value, offSet = 0) => {
    setSearchLoading(true);
    const { data, err } = await getAlbums(value, offSet);
    if (err && err.message && err.message.includes("401")) {
      localStorage.setItem("expired", "expired");
      history.push("/login");
    }
    const albums = data && data.albums && data.albums.items;
    if (albums) {
      setItems((oldItems) => [...oldItems, ...albums]);
      setTotal((total) => total + albums.length);
    }
    setSearchLoading(false);
  };

  return (
    <div className='home'>
      <div className='search'>
        <div className='searchText'>Type the name of your favorite albums</div>
        <Search
          placeholder="type your album's name"
          onSearch={async (value) => {
            // Going back to the initial state
            setTotal(0);
            setCursor(0);
            setItems(() => []);
            setKeyWord(value);
            await onSearch(value);
          }}
          style={{ width: 200 }}
          loading={searchLoading}
          size='large'
        />
      </div>
      {items.length && (
        <Albums
          albums={items.slice(cursor, cursor + 5)}
          loading={searchLoading}
          setCursor={setCursor}
          total={total}
          onSearch={onSearch}
          itemsLength={items.length}
          keyWord={keyWord}
        />
      )}
      {items.length === 0 && <Empty description='No Albums to show' />}
    </div>
  );
};
export default Home;
