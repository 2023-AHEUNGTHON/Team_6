import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export default function DropDown({ options, defaultOption, onSelect, isWide }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropDownRef = useRef(null); // Ref 객체를 생성하여 드롭다운 컨테이너를 참조

  // 드롭다운 컨테이너 외부를 클릭하면 드롭다운 내용을 닫을 수 있게 하는 기능
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // 드롭다운 버튼을 클릭했을 때 isOpen 상태를 토글하여 드롭다운 내용을 보이거나 숨김(+이미지 토글)
  const handleDropDownClick = () => {
    setIsOpen(!isOpen);
    console.log(options);
  };

  // 드롭다운 내용에서 옵션을 클릭했을 때 호출되는 함수
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option); // onSelect 콜백을 호출하여 선택한 옵션을 상위 컴포넌트로 전달
    }
  };

  return (
    <DropDownWrap ref={dropDownRef} isWide={isWide}>
      <button
        className={`${isOpen ? "opened" : ""} ${
          selectedOption === defaultOption ? "" : "selected"
        }`}
        onClick={handleDropDownClick}
      >
        {selectedOption}
        <p className="btn-toggle">▼</p>
      </button>
      <div className="drop-down-content">
        {isOpen &&
          options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
      </div>
    </DropDownWrap>
  );
}

const DropDownWrap = styled.div`
  position: relative;
  display: inline-block;

  /* 드롭다운 버튼 스타일 */
  button {
    width: ${({ isWide }) => (isWide ? "500px" : "205px")};
    height: 49px;
    border-radius: 50px;
    background: #ffe7c2;

    color: #b8ac99;
    border: none;
    cursor: pointer;
    text-align: left;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;

    .btn-toggle {
      color: #b8ac99;
      font-size: 15px;
      font-style: normal;
      font-weight: 800;
      line-height: 15.073px;

      position: absolute;
      right: 18px;
      bottom: 15px;
    }
  }

  /* 옵션이 선택되었을 때 드롭다운 버튼의 스타일 */
  .selected {
    color: black;
  }

  /* 드롭다운이 열렸을 때 버튼 스타일 */
  .opened {
    background: #fff4e3;
    box-shadow: 0px 3px 10px 0px rgba(85, 85, 85, 0.1);
  }

  /* 드롭다운 내용(옵션들) 스타일 (숨길 때 사용됨) */
  .drop-down-content {
    position: absolute;
    width: ${({ isWide }) => (isWide ? "500px" : "205px")};
    max-height: 250px; /* 드롭다운 내용의 최대 높이를 설정 */
    overflow-y: auto; /* 세로 스크롤이 나타나도록 설정 */
    margin-top: 10px;

    border-radius: 20px;
    background: #fff4e3;
    box-shadow: 0px 3px 10px 0px rgba(85, 85, 85, 0.1);

    z-index: 100;

    /* 드롭다운 각 요소 스타일 */
    .option {
      color: black;
      text-decoration: none;
      display: block;
      padding: 15px;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        background: #ffe7c2;
      }
    }
  }
`;
