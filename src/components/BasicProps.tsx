type Basic ={
    name:{
        first:string
        last:string
    }
}

export const BasicProps = (props:Basic) =>{
    return(
        <div>
            <h1>{props.name.first}</h1>
            <h1>{props.name.last}</h1>
        </div>
    )
}