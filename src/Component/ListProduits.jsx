import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

function ListProduits(){
    const { id } = useParams()
    const { produitsdata } = useSelector(state => state.produits)
    const selectedProduits = produitsdata.carts.filter(item => item.userId === id)
    const totalPrice =0 ;
    const nbProduit = selectedProduits.length
    
    return <div>
        <table>
            {selectedProduits.map(item=> 
                <tr>
                    <td>{item.products.id}</td>
                    <td>{item.products.title}</td>
                    <td>{item.products.price}</td>
                    <td>{item.products.quantity}</td>
                    <td>{item.products.total}</td>
                    <td>{item.products.discountPercentage}</td>
                    <td>{item.products.discountedPrice}</td>
                </tr>
                )}
        </table>

    </div>
}

export default ListProduits;