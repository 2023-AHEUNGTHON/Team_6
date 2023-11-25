import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import BackNav from './../components/BackNav';
import logo from "../img/mainLogo.svg";
import profile from "../img/profile.svg";
import chat from "../img/chatsvg.svg";

const Container = styled.div`
  width: 100%;
`

const DetailWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
`

const CategoryNameWrap = styled.div`
  width: fit-content; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFE7C2;
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
  padding: 10px 15px;
`

const Logo = styled.img`
  width: 30px;
`

const CategoryName = styled.h3`
  font-size: 25px; 
  font-weight: 700;
  margin-left: 15px;
  color: #FFB240;
`

const DetailTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #FFF5E6;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

const Title = styled.h3`
  font-weight: bolder;
  font-size: 30px;
  margin: 0 10px;
`

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 10px 10px 10px 0;
`

const ProfileImg = styled.img`
  width: 20px;
`

const ProfileName = styled.p`
  font-size: 20px;
  margin: 0 10px;
`

const ChatImg = styled.img`
  width: 20px;
  cursor: pointer;
`

const Content = styled.div`
  padding: 30px 10px;
  box-sizing: border-box;
  font-size: 25px;
`

const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF5E6;
  border-radius: 20px;
  margin-top: 20px;
`

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`

const MemberWrap = styled.div`
  display: flex;
  align-items: center;
`

const CommentProfileName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
`

const Comment = styled.div`
  font-weight: bolder;
  margin-top: 10px;
  font-size: 20px;
`

const CommentInput = styled.input`
  margin: 20px auto;
  width: 100%;
  height: 60px;
  font-size: 20px;
  border-radius: 10px;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #F3EADC;
  background-image: url('../img/pencil.svg');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 20px 20px; 
`

const DetailPost = () => {
    let { id } = useParams();

    return(
        <Container>
            <BackNav />
            <DetailWrap>
                <CategoryNameWrap>
                    <Logo src={logo} />
                    <CategoryName>WEB</CategoryName>
                </CategoryNameWrap>
                <DetailTitleWrap>
                    <Title>제목</Title>
                    <ProfileWrap>
                        <ProfileImg src={profile} />
                        <ProfileName>홍길동</ProfileName>
                        <ChatImg src={chat} />
                    </ProfileWrap>
                    <Content>내용</Content>
                </DetailTitleWrap>
                <CommentWrap>
                    <CommentBox>
                        <MemberWrap>
                            <ProfileImg src={profile} />
                            <CommentProfileName>홍길동</CommentProfileName>
                        </MemberWrap>
                        <Comment>댓글입니댱</Comment>
                    </CommentBox>
                    <CommentBox>
                        <MemberWrap>
                            <ProfileImg src={profile} />
                            <CommentProfileName>홍길동</CommentProfileName>
                        </MemberWrap>
                        <Comment>댓글입니댱</Comment>
                    </CommentBox>
                    <CommentBox>
                        <MemberWrap>
                            <ProfileImg src={profile} />
                            <CommentProfileName>홍길동</CommentProfileName>
                        </MemberWrap>
                        <Comment>댓글입니댱</Comment>
                    </CommentBox>
                </CommentWrap>
                <CommentInput placeholder='댓글을 입력해주세요'/>
            </DetailWrap>
        </Container>
    )
}

export default DetailPost;