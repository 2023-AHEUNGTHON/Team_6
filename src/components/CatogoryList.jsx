import React, { useState } from "react";
import styled from "styled-components";

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: bolder;
`

const Content = styled.div`
  margin-top: 15px;
  font-size: 22px;
  color: #6C6B6A;
`

const CategoryList = ({ title, content }) => {
    return(
        <ListWrap>
            <Title>{ title }</Title>
            <Content>{ content }</Content>
        </ListWrap>
    )
}

export default CategoryList;