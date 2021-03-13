import * as React from 'react'
// @ts-ignore
import { ChatEngine } from 'react-chat-engine'
import ChatFeed  from './components/ChatFeed'
import './App.css'



 const App = () => {
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID='4daff994-4ea9-4696-8a73-f331375bbf7b'
                userName='egor'
                userSecret='egor123'
                renderChatFeed={ ( chatAppProps: JSX.IntrinsicAttributes ) => <ChatFeed { ...chatAppProps }/>}
            />
        </div>
    )
}

export default App