type Learn ={
     name: string
     messageCount :number
     isLoggedIn:boolean
}

export const LearnProps = (props:Learn) =>{
    return(
        <div>
        <h1>
            {
                props.isLoggedIn ? `Welcome ${props.name} your message ${props.messageCount} `: "false"
            }
        </h1>
        </div>
    )
}