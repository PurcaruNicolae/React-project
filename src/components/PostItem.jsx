import React from "react";

function PostItem(props){
    const {title,body} = props


    return(
        <div>
            <h2>{ title }</h2>
            <p>{ body }</p>
        </div>
    )
        
    
}

export default PostItem