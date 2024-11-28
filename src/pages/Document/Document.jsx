import { useEffect } from "react";

function Document(props){

    useEffect(() =>{
        props.docHandler();
    },[]);

    return (
        <></>
    );
}


export default Document;