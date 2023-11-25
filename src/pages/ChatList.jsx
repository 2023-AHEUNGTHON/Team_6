import React, { useState } from "react";
import styled from "styled-components";
import BackNav from './../components/BackNav';
import Nav from "../components/CommonNav";
import Footer from './../components/Footer';
import List from './../components/ChatList';

const Container = styled.div`
  width: 100%;
`

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 30px auto 50px auto;
`

const ChatList = () => {
    return(
        <Container>
            <Nav />
            <BackNav />
            <ListWrap>
                <List newCheck='true' name='홍길동' content='내용인데 답장 좀'/>
                <List newCheck='true' name='홍길동' content='내용인데 답장 좀'/>
                <List newCheck='true' name='홍길동' content='내용인데 답장 좀'/>
                <List newCheck='false' name='홍길동' content='내용인데 답장 좀'/>
                <List newCheck='false' name='홍길동' content='내용인데 답장 좀'/>
            </ListWrap>
            <Footer />
        </Container>
    )
}

export default ChatList;