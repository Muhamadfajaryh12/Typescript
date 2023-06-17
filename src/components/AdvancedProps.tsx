type Status ={
    status:'loading' | 'success' | 'error'
}

export const AdvancedProps = (props:Status) =>{
    let message
    if(props.status === 'loading'){
        message="Loading"
    }else if( props.status === 'success'){
        message="Data fetched succesfully"
    }else if( props.status === 'error'){
        message="Error fetching data"
    }
    return(
        <div>
            <h1>Status - {message}</h1>
        </div>
    )
}