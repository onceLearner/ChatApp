import React, { useContext, useEffect, useState } from 'react'
import tw from "twin.macro"
import IO from "socket.io-client";
import { UserContext } from "../components/context/User"
import { Input, Button } from "."
import styled from '@emotion/styled';

const DivWrapper = styled.div`
${tw` p-16 mx-32  mt-10  md:shadow-2xl relative`};
height:80vh;
`
const DivWelcome = styled.div`
${tw`w-1/3  absolute top-0  text-center md:shadow-2xl`};
right:40%;
`
const DivInputSend = styled.div`
${tw`w-full absolute bottom-0 left-0  flex `}
`

const socket = IO("http://localhost:5000")
socket.on("message", (data) => { console.log(data) })


const conv = () => {
    const username = useContext(UserContext)
    const [usersOnline, setUsersOnline] = useState(1)
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [writing, setWriting] = useState(false)
    socket.on("writing", (data) => setWriting(data))
    socket.on("userCount", (data) => setUsersOnline(data))
    const handleSend = () => {
        socket.emit("test1", msg);
        socket.on("test1", data => setMessages(messages.concat(data)))
        console.log(messages)
    }



    return (
        <>
            <DivWrapper>
                <DivWelcome>
                    <p>users online :{usersOnline} </p>
                    <h1 css={tw` text-lg`}>  welcome :<span css={tw`font-semibold`}> {username.username}</span></h1>
                    {writing ? <p style={{ color: "#25d366" }}> writing... </p> : ""}
                </DivWelcome>
                {messages.map(msg => <p> <span css={tw` text-pink-700 font-medium italic`}>{username.username} </span>: {msg}</p>)}
                <DivInputSend>
                    <Input css={tw`w-2/3`} onChange={(evt) => { setMsg(evt.target.value); socket.emit("writing", true) }} onBlur={() => socket.emit("writing", false)} ></Input>
                    <Button css={tw`w-1/3 `} onClick={handleSend} >Send</Button>
                </DivInputSend>
            </DivWrapper>
        </>
    )
}

export default conv
