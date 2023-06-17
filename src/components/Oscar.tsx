type OscarProps = {
    children:React.ReactNode
}

export const Oscar = (props : OscarProps) =>{
    return (
        <>
        <h1>{props.children}</h1>
        </>
    )
}   