import React,{useContext,useEffect,useState,render} from 'react';

import Heart from '../../assets/Heart';
import {FirebaseContext,AuthContext} from '../../Store/Context'
import './Post.css';
import {postContext} from '../../Store/postContext'
import { useHistory } from 'react-router-dom';

function Posts() {
  const history= useHistory()
  const {firebase} = useContext(FirebaseContext)
  const {User} = useContext(AuthContext)
  const [products, setproducts] = useState([])
  const {postDetails, setpostDetails} = useContext(postContext)
  useEffect(() => {
    firebase.firestore().collection('Product').get().then((snapshot) => {
      const allProducts = snapshot.docs.map(obj =>{
        console.log(obj.data())
        return{
          ...obj.data(),
          id:obj.id
        }
      })
      console.log(allProducts)
      setproducts(allProducts)
      
    })
  }, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
          products.map(product=> {

           return( <div className="card" onClick={() =>{
             setpostDetails(product)
             history.push('/view')
           }
            
           }>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.Price}</p>
                <span className="kilometer">{product.Category}</span>
                <p className="name">{product.Name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div> )
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
