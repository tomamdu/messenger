import { CardContent, Typography,Card } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({message, username}) {
   // const m = Object.assign({}, message);
   // const p = JSON.stringify(m);
   const isUser = username === message.username;
   
    return (
        <div className={ `message ${isUser && 'message_user'}`}>
            <Card className={isUser? "message_userCard" : "message_gustCard"} >
                <CardContent>
                    <Typography
                        
                        variant="h5"
                        component="h2"
                    >
                       {message.username}: {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div> 
        
    )
}

export default Message
