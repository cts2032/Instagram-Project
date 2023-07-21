import React from "react";
import { SearchContainer } from "./SearchFormSty";

const SearchForm = ({ SearchCheck }) => {
  return (
    <SearchContainer
      searchCheck={SearchCheck}
      style={{
        transform: !SearchCheck ? "translateX(-500px)" : "translateX(0)",
        transition: "transform 0.5s ease",
      }}
    >
      {SearchCheck ? (
        <>
          <div
            style={{
              padding: "12px 14px 36px 24px",
              fontSize: "21px",
              fontWeight: "bold",
            }}
          >
            검색
          </div>
          <div style={{ padding: "3px 16px" }}>
            <input
              placeholder="검색"
              style={{ padding: "3px 16px", width: "332px", height: "34px" }}
            />
          </div>
          <div style={{ paddingTop: "12px" }}>
            <div style={{ margin: "6px 24px 8px" }}>최근 검색 항목</div>
          </div>
        </>
      ) : null}
    </SearchContainer>
  );
};

export default SearchForm;
