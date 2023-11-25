import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import logo from './../img/mainLogo.svg';
import pencil from './../img/pencil.svg';
import BackNav from './../components/BackNav';
import List from './../components/CatogoryList';
import Nav from "../components/CommonNav";
import Footer from './../components/Footer';
import api from './../apis/api';

const Container = styled.div`
  width: 100%;
`

const DetailWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 10px auto 50px auto;
`

const CategoryTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
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

const WriteButtonWrap = styled.div`
  background-color: #FFF5E6;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
`

const Pencil = styled.img`
  width: 25px;
`

const CategoryListWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF5E6;
  padding: 40px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const ZeroMessage = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 25px;
`

const UnderLine = styled.div`
  height: 1px;
  background-color: black;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 30px 0;
`

const CategoryDetail = () => {
    let { category } = useParams();
    // let id = 1;
    const navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        api.get(`readpost/${category}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                alert('게시글을 불러올 수 없습니다.');
            })
    }, [])

    return(
        <Container>
            <Nav />
            <BackNav />
            <DetailWrap>
                <CategoryTopWrap>
                    <CategoryNameWrap>
                        <Logo src={logo} />
                        <CategoryName>{ category }</CategoryName>
                    </CategoryNameWrap>
                    <WriteButtonWrap>
                        <Pencil src={pencil} onClick={() => navigate(`/${category}/write-post`)} />
                    </WriteButtonWrap>
                </CategoryTopWrap>
                <CategoryListWrap>
                    { data.length === 0 ?
                        <ZeroMessage>게시글이 존재하지 않습니다.</ZeroMessage>
                    :   <>
                        { data.map((list, idx) => (
                                idx !== 0 ? (
                                    <React.Fragment key={list.id}>
                                        <UnderLine></UnderLine>
                                        <List
                                            key={list.id}
                                            title={list.title}
                                            content={list.content}
                                            onClick={() => navigate(`/${category}/${list.id}`)}
                                        />
                                    </React.Fragment>
                                ) : (
                                    <List
                                        key={list.id}
                                        title={list.title}
                                        content={list.content}
                                        onClick={() => navigate(`/${category}/${list.id}`)}
                                    />
                                )
                            ))}</>
                    }
                </CategoryListWrap>

            </DetailWrap>
            <Footer />
        </Container>
    )
}

export default CategoryDetail;