type ContainerProps ={
    styles:React.CSSProperties
}

export const StyleProps = (props:ContainerProps) =>{
    return(
        <>
        <h1 style={props.styles}>Ini Container Style Props</h1>
        </>
    )
}