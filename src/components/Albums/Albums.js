import React from "react";
import Album from "./Album";
import { Spin, Pagination } from "antd";
import "./Albums.css";

const Albums = ({
  albums,
  loading,
  total,
  setCursor,
  onSearch,
  itemsLength,
  keyWord,
}) => {
  const onChange = async (current) => {
    if (Math.round(total / 5) === current) {
      await onSearch(keyWord, itemsLength);
      setCursor(5 * current - 5);
    } else {
      setCursor(5 * current - 5);
    }
  };
  return (
    <div>
      <Spin size='large' spinning={loading} style={{ alignSelf: "center" }}>
        <div className='albums'>
          {albums.map((item) => {
            return <Album album={item} />;
          })}
          {total && (
            <Pagination
              defaultCurrent={1}
              total={total}
              pageSize={5}
              onChange={onChange}
            />
          )}
        </div>
      </Spin>
    </div>
  );
};

export default Albums;
