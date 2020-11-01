import React, { useContext, useState } from "react"
import Link from "next/link"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { UserContext, UserDispatchContext, UserProvider } from "../components/context/User"

const DivInit = styled.div`
${tw` flex justify-center items-center p-8 m-10 md:shadow-lg  h-64`}
`
export const Input = styled.input`
${tw` focus:outline-none border border-gray-300 p-2 focus:border-indigo-600 focus:shadow-md    `}
`
export const Button = styled.button`
${tw` focus:outline-none  bg-indigo-700 text-white p-2 w-16  ml-4 hover:bg-indigo-500`}
`

export const UserContextIndex = React.createContext(null) // don't get attention, this is only a required default value 

export default function Home() {
  const Username = useContext(UserContext)
  const setUsername = useContext(UserDispatchContext)
  return (


    <DivInit>
      <h1 css={tw` text-lg font-thin  mr-4 `}>enter your name</h1>

      <Input onChange={(evt) => setUsername({ username: evt.target.value })} ></Input>

      <Button > <Link href="/conv">Join</Link> </Button>

    </DivInit>


  )
}
