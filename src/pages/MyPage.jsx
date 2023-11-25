import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profileImg from "../img/profile-img.png";
import editBtn from "../img/edit-btn.png";
import goBackBtn from "../img/go-back-btn.png";
import Footer from "../components/Footer";
import axios from "axios";

import { Navigate, useNavigate } from "react-router-dom";

// 마이페이지
export default function MyPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [univ, setUniv] = useState("");
  const [grade, setGrade] = useState("");
  const [career, setCareer] = useState("");
  const [project, setProject] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      fetchUserData(userId);
      console.log(userId);
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
      setCareer(userData.major);
      setProject(userData.project);
      setStartDate(userData.start_date);
      setEndDate(userData.end_date);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // textarea 포커스 해제
  const handleFocus = (event) => {
    event.target.blur();
  };

  return (
    <>
      <MyPageWrap>
        <div className="header">
          <img src={goBackBtn} alt="go-back-btn" className="go-back-btn" />
          <img
            src={editBtn}
            alt="edit-btn"
            className="edit-btn"
            onClick={() => {
              navigate("/my-page-edit");
            }}
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
        <textarea readOnly={true} onFocus={handleFocus} />
        <div className="matching-info">
          <p>전공 분야(직무) : {career}</p>
          <p>진행 중인 프로젝트 분야 : {project}</p>
          <div>
            <p>프로젝트 진행 가능 날짜</p>
            <p>
              : {startDate} ~ {endDate}
            </p>
          </div>
        </div>
        <button className="logout-btn">Log Out</button>
      </MyPageWrap>
      <Footer />
    </>
  );
}

const MyPageWrap = styled.div`
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
  }

  .matching-info {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 15px;
    width: 1021px;
  }

  .logout-btn {
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
