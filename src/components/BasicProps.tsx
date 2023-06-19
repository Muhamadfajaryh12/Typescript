import { PersonProps } from "./BasicProps.types"

export const BasicProps = (props:PersonProps) =>{
    return(
        <div>
            <h1>{props.name.first}</h1>
            <h1>{props.name.last}</h1>
        </div>
    )
}