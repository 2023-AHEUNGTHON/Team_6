import React from "react";
import styled from "styled-components";
import DropDown from "../components/DropDown";
import { useState, useEffect } from "react";

// 회원가입 페이지
export default function SignUp() {
  // 학년
  const gradeOptions = [
    "1학년 재학",
    "1학년 휴학",
    "2학년 재학",
    "2학년 휴학",
    "3학년 재학",
    "3학년 휴학",
    "4학년 재학",
    "4학년 휴학",
  ];

  // 학교(어흥 올림픽 참여)
  const univOptions = [
    "국민대학교",
    "덕성여자대학교",
    "동국대학교",
    "명지대학교(인문)",
    "상명대학교(서울)",
    "성결대학교",
    "성신여자대학교",
    "숭실대학교",
    "한양대학교(ERICA)",
  ];

  // 진행 중인 프로젝트 분야
  const projectOptions = [
    "기획(PM)",
    "디자인",
    "웹 프론트엔드",
    "안드로이드",
    "IOS",
    "백엔드",
    "마케팅",
    "광고",
    "영상",
    "사진",
    "작곡",
    "작사",
    "보컬",
    "댄스",
    "기타",
  ];

  // 나의 전공 분야
  const majorOptions = [
    "기획(PM)",
    "디자인",
    "웹 프론트엔드",
    "안드로이드",
    "IOS",
    "백엔드",
    "마케팅",
    "광고",
    "영상",
    "사진",
    "작곡",
    "작사",
    "보컬",
    "댄스",
    "기타",
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedUniv, setSelectedUniv] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMajor, setSelectedMajor] = useState(null);

  const [startDateYear, setStartDateYear] = useState("");
  const [startDateMonth, setStartDateMonth] = useState("");
  const [startDateDay, setStartDateDay] = useState("");
  const [endDateYear, setEndDateYear] = useState("");
  const [endDateMonth, setEndDateMonth] = useState("");
  const [endDateDay, setEndDateDay] = useState("");

  // 날짜 ----------------------------------------------------------------------------

  // 오늘 날짜로 설정
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    setStartDateYear(year);
    setStartDateMonth(month);
    setStartDateDay(day);

    setEndDateYear(year);
    setEndDateMonth(month);
    setEndDateDay(day);
  }, []);

  const yearOptions = Array.from({ length: 8 }, (_, index) => 2023 + index);
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInStartMonth = getDaysInMonth(
    Number(startDateYear),
    Number(startDateMonth)
  );
  const startDayOptions = Array.from(
    { length: daysInStartMonth },
    (_, index) => index + 1
  );

  const daysInEndMonth = getDaysInMonth(
    Number(endDateYear),
    Number(endDateMonth)
  );
  const endDayOptions = Array.from(
    { length: daysInEndMonth },
    (_, index) => index + 1
  );

  // StartDate 변경 시 EndDate 제어하는 함수
  const handleStartDateChange = (year, month, day) => {
    const selectedStartDate = new Date(year, month - 1, day);
    const currentEndDate = new Date(endDateYear, endDateMonth - 1, endDateDay);

    // 만약 EndDate가 StartDate 이전으로 설정되었다면, StartDate와 같은 날짜로 설정
    if (currentEndDate < selectedStartDate) {
      setEndDateYear(year);
      setEndDateMonth(month);
      setEndDateDay(day);
    }
  };

  // EndDate 변경 시 StartDate 제어하는 함수
  const handleEndDateChange = (year, month, day) => {
    const selectedEndDate = new Date(year, month - 1, day);
    const currentStartDate = new Date(
      startDateYear,
      startDateMonth - 1,
      startDateDay
    );

    // EndDate가 StartDate 이전으로 설정되었다면, StartDate도 같은 날짜로 설정
    if (selectedEndDate < currentStartDate) {
      setStartDateYear(year);
      setStartDateMonth(month);
      setStartDateDay(day);
    }
  };

  // StartDate 선택 시 호출되는 함수들에 handleStartDateChange 함수 추가
  const handleStartDateYearChange = (e) => {
    setStartDateYear(e.target.value);
    handleStartDateChange(e.target.value, startDateMonth, startDateDay);
  };

  const handleStartDateMonthChange = (e) => {
    setStartDateMonth(e.target.value);
    handleStartDateChange(startDateYear, e.target.value, startDateDay);
  };

  const handleStartDateDayChange = (e) => {
    setStartDateDay(e.target.value);
    handleStartDateChange(startDateYear, startDateMonth, e.target.value);
  };

  const handleEndDateYearChange = (e) => {
    setEndDateYear(e.target.value);
    handleEndDateChange(e.target.value, endDateMonth, endDateDay);
  };

  const handleEndDateMonthChange = (e) => {
    setEndDateMonth(e.target.value);
    handleEndDateChange(endDateYear, e.target.value, endDateDay);
  };

  const handleEndDateDayChange = (e) => {
    setEndDateDay(e.target.value);
    handleEndDateChange(endDateYear, endDateMonth, e.target.value);
  };

  // 날짜 ----------------------------------------------------------------------------

  // "선택완료" 버튼이 활성화되는지 여부를 결정하는 변수
  const isButtonDisabled =
    !name ||
    !email ||
    !selectedGrade ||
    !selectedUniv ||
    !selectedProject ||
    !selectedMajor ||
    !startDateYear ||
    !startDateMonth ||
    !startDateDay ||
    !endDateYear ||
    !endDateMonth ||
    !endDateDay;

  //  선택한 정보를 userData 상태로 저장
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    grade: "",
    univ: "",
    project: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  return (
    <SignUpWrap>
      <div className="login-info">
        <div className="content-box">
          <h3>이름</h3>
          <input
            className="inputName"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="content-box">
          <h3>학년</h3>
          <DropDown
            options={gradeOptions}
            defaultOption="학년을 선택해주세요"
            // 옵션 선택 시 선택한 옵션을 상태로 업데이트
            onSelect={(option) => {
              setSelectedGrade(option);
              setUserData((prevUserData) => ({
                ...prevUserData,
                grade: option,
              }));
            }}
          />
        </div>
        <div className="content-box">
          <h3>학교</h3>
          <DropDown
            options={univOptions}
            defaultOption="학교를 선택해주세요"
            onSelect={(option) => {
              setSelectedUniv(option);
              setUserData((prevUserData) => ({
                ...prevUserData,
                univ: option,
              }));
            }}
          />
        </div>
        <div className="content-box">
          <h3>학교 이메일</h3>
          <input
            className="inputEmail"
            placeholder="학교 이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="matching-info">
        <div className="content-box">
          <h3>진행 중인 프로젝트 분야</h3>
          <DropDown
            options={projectOptions}
            defaultOption="프로젝트 분야를 선택해주세요"
            isWide
            onSelect={(option) => {
              setSelectedProject(option);
              setUserData((prevUserData) => ({
                ...prevUserData,
                project: option,
              }));
            }}
          />
        </div>
        <div className="content-box">
          <h3>프로젝트 진행 날짜</h3>
          <div className="date-container">
            <select value={startDateYear} onChange={handleStartDateYearChange}>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>{" "}
            <select
              value={startDateMonth}
              onChange={handleStartDateMonthChange}
            >
              {monthOptions.map((month) => (
                <option key={month} value={month}>
                  {month}월
                </option>
              ))}
            </select>{" "}
            <select value={startDateDay} onChange={handleStartDateDayChange}>
              {startDayOptions.map((day) => (
                <option key={day} value={day}>
                  {day}일
                </option>
              ))}
            </select>
            <span> ~ </span>
            <select value={endDateYear} onChange={handleEndDateYearChange}>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>{" "}
            <select value={endDateMonth} onChange={handleEndDateMonthChange}>
              {monthOptions.map((month) => (
                <option key={month} value={month}>
                  {month}월
                </option>
              ))}
            </select>{" "}
            <select value={endDateDay} onChange={handleEndDateDayChange}>
              {endDayOptions.map((day) => (
                <option key={day} value={day}>
                  {day}일
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="content-box">
          <h3>나의 전공 분야</h3>
          <DropDown
            options={majorOptions}
            defaultOption="전공 분야를 선택해주세요"
            isWide
            onSelect={(option) => {
              setSelectedMajor(option);
              setUserData((prevUserData) => ({
                ...prevUserData,
                major: option,
              }));
            }}
          />
        </div>
      </div>
      <div className="personal-info">
        <h1>개인정보 제공 동의 체크란</h1>
      </div>
      <button className="sign-up-btn" disabled={isButtonDisabled}>
        가입하기
      </button>
    </SignUpWrap>
  );
}

const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 62px;
  margin-bottom: 62px;

  h3 {
    color: #b8ac99;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 15.073px; /* 75.365% */
  }

  .login-info {
    width: 491px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;

    input {
      width: 205px;
      height: 49px;
      border-radius: 50px;
      background: #ffe7c2;
      border: none;

      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;

      &::placeholder {
        color: #b8ac99;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .matching-info {
    .content-box {
      margin-top: 33px;
    }

    .date-container {
      width: 500px;
      height: 46px;
      border-radius: 46.184px;
      background: #ffe7c2;
      border: none;
      padding: 12px 32px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;

      color: #b8ac99;
      font-size: 14px;
      font-style: normal;
      font-weight: 800;
      line-height: 13.923px;

      select {
        width: 75px;
        height: 23px;
        border-radius: 46.184px;
        background: #fff4e3;
        text-align: center;
      }

      span {
        margin-right: 6px;
        margin-left: 6px;
      }
    }
  }

  .personal-info {
    width: 345px;
    height: 81px;
    background: #d9d9d9;
    padding: 16px 24px;
    box-sizing: border-box;
    text-align: center;
    margin-top: 27px;

    h1 {
      font-size: 27.059px;
      color: #fff;
      font-style: normal;
      font-weight: 800;
      line-height: 9.308px;
      margin-top: 18px;
    }
  }

  .sign-up-btn {
    width: 137px;
    height: 59px;
    border-radius: 46.184px;
    background: #ffd686;
    border: none;
    text-align: center;
    margin-top: 33px;

    color: #fff;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: 15.254px;

    &:disabled {
      pointer-events: none;
      opacity: 0.6;
    }
  }
`;
