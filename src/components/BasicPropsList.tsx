import { Name } from "./BasicProps.types"

type PersonList={
    names:Name[]
}

export const BasicPropsList = (props:PersonList) =>{
    return(
        <div>
                {props.names.map((name)=>{
                    return(
                        <h1 key={name.first}>
                            {name.first} {name.last}
                        </h1>
                    )
                })}

        </div>
    )
}