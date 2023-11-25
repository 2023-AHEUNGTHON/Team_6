import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profileImg from "../img/profile-img.png";
import goBackBtn from "../img/go-back-btn.png";
import Footer from "../components/Footer";
import DropDown from "../components/DropDown";
import axios from "axios";

import { Navigate, useNavigate } from "react-router-dom";

// 마이페이지
export default function MyPageEdit() {
  const navigate = useNavigate();

  const [name, setName] = useState("홍길동");
  const [major, setMajor] = useState("소프트웨어학부");
  const [univ, setUniv] = useState("숭실대학교");
  const [grade, setGrade] = useState("2학년 재학");
  const [career, setCareer] = useState("Web");
  const [project, setProject] = useState("Web");
  const [date, setDate] = useState("2023년 11월 15일 ~ 2023년 11월 25일");

  const [edit, setEdit] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);

  // 마이페이지 조회
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(
        `https://port-0-team-6-be-cn1vmr2clpde5wws.sel5.cloudtype.app/userprofile/${userId}`
      );

      const userData = response.data;
      // 전체 데이터 콘솔에 출력
      console.log("User Data:", userData);

      // 서버에서 받아온 데이터로 상태 업데이트
      setName(userData.username);
      setMajor(userData.major);
      setUniv(userData.school);
      setGrade(userData.grade);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // 마이페이지 수정
  const handleSubmit = async () => {
    const userId = localStorage.getItem("user_id");

    if (userId) {
      try {
        const response = await axios.post(
          "https://port-0-team-6-be-cn1vmr2clpde5wws.sel5.cloudtype.app/userprofile", // 해당 엔드포인트를 사용하여 데이터를 전송해야 합니다.
          {
            major: selectedCareer,
            project: selectedProject,
            date: "20231125",
            id: userId,
          }
        );

        console.log("Profile updated:", response.data);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  // 진행 중인 프로젝트 분야
  const projectOptions = [
    "Product Manager",
    "Design",
    "Web",
    "Android",
    "IOS",
    "Server",
    "Marketing",
    "Advertisement",
    "Video",
    "Photo",
    "Composing",
    "Lyric",
    "Vocal",
    "Dance",
    "etc",
  ];

  // 전공 분야
  const careerOptions = [
    "IT",
    "Design",
    "Marketing",
    "Advertisement",
    "Media",
    "Music",
    "etc",
  ];

  const [startDateYear, setStartDateYear] = useState("");
  const [startDateMonth, setStartDateMonth] = useState("");
  const [startDateDay, setStartDateDay] = useState("");
  const [endDateYear, setEndDateYear] = useState("");
  const [endDateMonth, setEndDateMonth] = useState("");
  const [endDateDay, setEndDateDay] = useState("");

  // textarea 포커스 -> outline 스타일 제거
  const handleFocus = (event) => {
    event.target.style.outline = "none";
  };

  // textarea에 입력된 값을 상태에 저장
  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setTextAreaValue(value);
  };

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

  const goToMyPage = () => {
    navigate("/my-page");
  };

  return (
    <>
      <MyPageEditWrap>
        <div className="header">
          <img
            src={goBackBtn}
            alt="go-back-btn"
            className="go-back-btn"
            onClick={goToMyPage}
          />
        </div>
        <div className="login-info">
          <img src={profileImg} alt="profile-img" />
          <div className="login-info-text">
            <p>이름 : {name}</p>
            <p>전공 : {major}</p>
            <p>학교 : {univ}</p>
            <p>학번 : {grade}</p>
          </div>
        </div>
        <textarea
          onFocus={handleFocus}
          value={textAreaValue}
          onChange={handleTextareaChange}
        />
        <div className="matching-info">
          <div className="match-info-line">
            <p>전공 분야(직무) : </p>
            <DropDown
              options={careerOptions}
              defaultOption=""
              onSelect={(option) => {
                setSelectedCareer(option);
              }}
            />
          </div>
          <div className="match-info-line">
            <p>진행 중인 프로젝트 분야 : </p>
            <DropDown
              options={projectOptions}
              defaultOption=""
              onSelect={(option) => {
                setSelectedProject(option);
              }}
            />
          </div>
          <div>
            <p>프로젝트 진행 가능 날짜 : </p>
            <div className="date-container">
              <select
                value={startDateYear}
                onChange={handleStartDateYearChange}
              >
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
        </div>
        <button className="complete-btn" onClick={handleSubmit}>
          완료
        </button>
      </MyPageEditWrap>
      <Footer />
    </>
  );
}

const MyPageEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
  margin-bottom: 42px;
  position: relative;

  .header {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;

    .go-back-btn {
      width: 27px;
      height: 27px;
      position: absolute;
      top: 35px;
      left: 35px;

      cursor: pointer;
    }

    .edit-btn {
      width: 55px;
      height: 55px;
      position: absolute;
      top: 60px;
      right: 60px;

      cursor: pointer;
    }
  }

  p {
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
  }

  .login-info {
    width: 1021px;
    display: flex;
    align-items: center;
    gap: 52px;

    .login-info-text {
      width: 630px;
      display: flex;

      flex-wrap: wrap;
      gap: 30px;

      p {
        width: 280px;
      }
    }
  }

  textarea {
    width: 1021px;
    height: 144.048px;
    border-radius: 15.829px;
    border: 3px solid #000;
    background: rgba(217, 217, 217, 0);
    resize: none;

    padding: 30px;
    color: #000;
    font-size: 31.659px;
    font-style: normal;
    font-weight: 600;
  }

  .matching-info {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 15px;
    width: 1021px;

    .match-info-line {
      display: flex;
      align-items: center;
      gap: 13px;
    }
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
    margin-top: 14px;

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
      border: none;
    }

    span {
      margin-right: 6px;
      margin-left: 6px;
    }
  }

  .complete-btn {
    width: 111px;
    height: 48px;
    border-radius: 46.184px;
    background: #ffd686;
    border: none;

    color: #fff;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: 15.254px;

    position: absolute;
    bottom: -6px;
    right: 92px;
  }
`;
