type Learn ={
     name: string
     messageCount ?:number
     isLoggedIn:boolean
}

export const LearnProps = (props:Learn) =>{
    const {messageCount = 0 } = props 
    return(
        <div>
        <h1>
            {
                props.isLoggedIn ? `Welcome ${props.name} your message ${messageCount} `: "false"
            }
        </h1>
        </div>
    )
}