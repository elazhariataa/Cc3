import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function DetailsUser(){

    const { id } = useParams()
  
    const { userdata } = useSelector(state => state.user)
      const selectedUser = userdata.users.filter(item => item.id === id)

    return <div>
        {selectedUser.map(item=>
            <div>
                <img src={item.image} alt="" />
                <p>First Name : {item.firstName}</p>
                <p>Last Name : {item.lastName}</p>
                <p>Age : {item.age}</p>
                <p>Gender : {item.gender}</p>
                <p>Email : {item.email}</p>
                <p>Phone : {item.phone}</p>
                <p>Poids : {item.weight}</p>
                <p>Hauteur : {item.height}</p>
                <p>Date de naissance : {item.birthDate}</p>
                <p>groupe sanguin : {item.bloodGroup}</p>
                <p>la couleur de l'œil : {item.eyeColor}</p>
            </div>
            )}
    </div>
}


export default DetailsUser;

// Age, gender, Email, phone, poids, hauteur, date naissance, groupe sanguin et la couleur de l'œil 