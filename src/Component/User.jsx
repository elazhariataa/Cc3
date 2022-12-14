


function User(props){
    return <div className="user">
        <img src={props.image} alt='image'/>
        <h2>{props.firstName} - {props.lastName}</h2>
        <button onClick={props.onClickdetails}>Details User</button>
        <button onClick={props.onClickPanier}>Panier</button>
    </div>
}


export default User;