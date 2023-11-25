import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import BackNav from './../components/BackNav';
import mainLogo from './../img/mainLogo2.svg';
import Footer from './../components/Footer';
import Nav from "../components/CommonNav";
import api from '../apis/api';

const Container = styled.div`
  width: 100%;
`

const MainLogoWrap = styled.div`
  display: flex;
  justify-content: center;
`

const MainLogo = styled.img``

const InputWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: 30px auto 10px auto;
`

const TitleInput = styled.input`
  height: 40px;
  padding: 5px 10px;
  font-size: 22px;
  border: 0;
  background-color: #FFF5E6;
  border-radius: 15px;
  font-weight: 700;
`

const ContentInput = styled.textarea`
  height: 400px;
  padding: 10px 15px;
  font-size: 20px;
  border: 0;
  background-color: #FFF5E6;
  border-radius: 15px;
  margin-top: 20px;
  resize: none;
`

const CompleteButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin: 20px auto 50px auto;
`

const CompleteButton = styled.button`
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  background-color: #997142;
  color: white;
  font-weight: 700;
  width: 70px;
  height: 40px;
  font-size: 20px;
`

const EditPost = () => {
    let { category, id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        api.get("post/" + id)
            .then(response => {
                setTitle(response.data.post.title);
                setContent(response.data.post.content);
            })
            .catch(error => {
                alert('게시글을 가져올 수 없습니다.');
            })
    }, [])

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    function editPost(){
        api.post("updatepost/", {
            'title' : title,
            'content': content,
            'category': category,
            'id': id
        })
            .then(response => {
                alert('게시글 수정이 완료되었습니다.');
                navigate(-1);
            })
            .catch(error => {
                console.error('Error creating post:', error);
            });
    }

    return(
        <Container>
            <Nav />
            <BackNav />
            <MainLogoWrap>
                <MainLogo src={mainLogo} />
            </MainLogoWrap>
            <InputWrap>
                <TitleInput
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder='제목을 입력하세요'/>
                <ContentInput
                    type="text"
                    value={content}
                    onChange={handleContentChange}
                    placeholder='내용을 입력하세요'/>
            </InputWrap>
            <CompleteButtonWrap>
                <CompleteButton onClick={editPost}>수정</CompleteButton>
            </CompleteButtonWrap>
            <Footer />
        </Container>
    )
}

export default EditPost;