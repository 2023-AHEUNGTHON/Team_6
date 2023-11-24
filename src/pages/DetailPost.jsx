import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import BackNav from './../components/BackNav';
import logo from "../img/mainLogo.svg";

const Container = styled.div`
  width: 100%;
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
const DetailPost = () => {
    let { category, id } = useParams();

    return(
        <Container>
            <BackNav />
            <CategoryNameWrap>
                <Logo src={logo} />
                <CategoryName>{ category }</CategoryName>
            </CategoryNameWrap>
        </Container>
    )
}

export default DetailPost;