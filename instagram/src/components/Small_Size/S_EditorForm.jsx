import React from "react";
import {
  ChoiceButton,
  EditorBox,
  EditorContainer,
  EditorHeader,
} from "../Navigation_Bar_Sty";

import EditorImg from "../../images/EditorImage.png";

const S_EditorForm = ({ toggleOverlay, PlusClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <EditorContainer>
        <EditorHeader>새 게시물 만들기</EditorHeader>
        <EditorBox>
          <div>
            <img style={{ width: "96px" }} src={EditorImg} alt="게시글만들기" />
          </div>
          <div style={{ marginTop: "16px", fontSize: "20px" }}>
            사진과 동영상을 여기에 끌어다 놓으세요
          </div>
          <ChoiceButton style={{ marginTop: "24px" }}>
            컴퓨터에서 선택
          </ChoiceButton>
        </EditorBox>
      </EditorContainer>
      <span
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          padding: "16px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={() => {
          toggleOverlay();
          PlusClick();
        }}
        class="material-symbols-outlined"
      >
        close
      </span>
    </div>
  );
};

export default S_EditorForm;
