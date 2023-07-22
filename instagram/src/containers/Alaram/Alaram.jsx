import React from "react";
import { SearchContainer } from "../Search/SearchFormSty";
import PostAcitivity from "../../images/free-icon-like-6009439.png";
import { AcitivityBox } from "./AlaramSty";

const Alaram = ({ AlaramCheck }) => {
  return (
    <SearchContainer
      style={{
        transform: !AlaramCheck ? "translateX(-500px)" : "translateX(0)",
        transition: "transform 0.5s ease",
      }}
    >
      {AlaramCheck ? (
        <>
          <div
            style={{
              padding: "12px 14px 36px 24px",
              fontSize: "21px",
              fontWeight: "bold",
            }}
          >
            알림
          </div>
          <div style={{ padding: "3px 16px" }}>
            <AcitivityBox>
              <div>
                <img
                  style={{ width: "62px" }}
                  src={PostAcitivity}
                  alt="게시물 활동"
                />
              </div>
              <div style={{ marginTop: "16px" }}>게시물 활동</div>
              <div style={{ marginTop: "16px" }}>
                다른 사람이 회원님의 게시물을 좋아하거나 댓글을
                <br />
                남기면 여기에 표시됩니다.
              </div>
            </AcitivityBox>
          </div>
          <div style={{ paddingTop: "12px" }}>
            <div style={{ margin: "6px 24px 8px" }}>회원님을 위한 추천</div>
          </div>
        </>
      ) : null}
    </SearchContainer>
  );
};

export default Alaram;
