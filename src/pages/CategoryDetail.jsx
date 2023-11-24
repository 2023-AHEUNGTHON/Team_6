import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import back from './../img/backIcon.svg';
import logo from './../img/mainLogo.svg';

const Container = styled.div`
  width: 100%;
`

const BackIcon = styled.img`
  margin: 15px 0 0 15px;
  cursor: pointer;
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

const CategoryDetail = () => {
    let { category, id } = useParams();
    return(
        <Container>
            <BackIcon src={back} />
            <DetailWrap>
                <CategoryNameWrap>
                    <Logo src={logo} />
                    <CategoryName>{ category }</CategoryName>
                </CategoryNameWrap>
            </DetailWrap>
        </Container>
    )
}

export default CategoryDetail;