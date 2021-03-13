import * as React from 'react'
import {FC} from "react"

type Props = {
    chats: any
    activeChat: number
    userName: string
    messages: {}

};

const  ChatFeed: FC<Props> = (props:Props): JSX.Element => {
    console.log(props)
    const { chats, activeChat, userName, messages } = props
    return (
        <>

        </>
    )
}

export default  ChatFeed
