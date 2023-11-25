import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import BackNav from './../components/BackNav';
import Footer from './../components/Footer';
import logo from "../img/mainLogo.svg";
import profile from "../img/profile.svg";
import chat from "../img/chatsvg.svg";
import pencil from "../img/pencil.svg";
import Comment from "../components/Comment";
import Nav from "../components/CommonNav";
import api from '../apis/api';

const Container = styled.div`
  width: 100%;
`

const DetailWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 30px auto 50px auto;
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

const ProfileImg = styled.img`
  width: 20px;
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

const CommentInputWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #F3EADC;
  margin: 20px auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommentInput = styled.input`
  border: none;
  height: 100%;
  font-size: 20px;
  background-color: transparent;
  width: calc(100% - 50px);
`

const CommentBtn = styled.img`
  cursor: pointer;
  width: 30px;
`

const DetailPost = () => {
    let { category, id } = useParams();
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        api.get("post/" + id)
            .then(response => {
                setPost(response.data.post);
                setComments(response.data.comment);
            })
            .catch(error => {
                alert('게시글을 가져올 수 없습니다.');
            })
    }, [])

    const handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            createComment();
        }
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    function createComment(){
        api.post("createcomment/", {
            "content" : comment,
            "user_id" : "1",
            "post_id" : id
        }).then(response => {
            alert('댓글을 작성하였습니다.');
            window.location.reload();
        }).catch(error => {
            alert('댓글을 작성할 수 없습니다.');
        })
    }

    return(
        <Container>
            <Nav />
            <BackNav />
            <DetailWrap>
                <CategoryNameWrap>
                    <Logo src={logo} />
                    <CategoryName>{ post.category }</CategoryName>
                </CategoryNameWrap>
                <DetailTitleWrap>
                    <Title>{ post.title }</Title>
                    <ProfileWrap>
                        <ProfileImg src={profile} />
                        <ProfileName>{ post.user }</ProfileName>
                        <ChatImg src={chat} />
                    </ProfileWrap>
                    <Content>{ post.content }</Content>
                </DetailTitleWrap>
                <CommentWrap>
                    {
                        comments.map((comment, idx) => (
                            <Comment  name='홍길동' comment={comment.content} />
                        ))
                    }
                </CommentWrap>
                <CommentInputWrap>
                    <CommentInput
                        type="text"
                        value={comment}
                        onChange={handleCommentChange}
                        onKeyPress={handleOnKeyPress}
                        placeholder='댓글을 입력해주세요'/>
                    <CommentBtn src={pencil} onClick={createComment}/>
                </CommentInputWrap>
            </DetailWrap>
            <Footer />
        </Container>
    )
}

export default DetailPost;
