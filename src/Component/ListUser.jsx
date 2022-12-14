import { useSelector } from 'react-redux';
import User from './User';
import { useNavigate, } from "react-router-dom";

function ListUser(){
    const user  = useSelector(state => state.user)
    const navigate = useNavigate();
    
    return <div>
        <div className='listuser'>
            {user.users.map(item => <User key={item.id} image={item.image} firstName={item.firstName} lastName={item.lastName} 
            onClickdetails={e => navigate(`/DetailUser/${item.id}`)}
            onClickPanier={e => navigate(`/ListProduits/${item.id}`)}/>)}
        </div>
    </div>
}


export default ListUser;