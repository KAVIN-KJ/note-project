import ParentComponent from "./ParentComponent";

function Grandparent(props){
    return(
        <>
            <h1>Grand Parent Surname : {props.surname}</h1>
            <ParentComponent surname={props.surname}/>
        </>
    )
}
export default Grandparent