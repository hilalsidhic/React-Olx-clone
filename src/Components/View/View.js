import React, { useContext, useEffect, useState} from 'react';
import {FirebaseContext, AuthContext} from '../../Store/Context'
import { postContext } from '../../Store/postContext';
import './View.css';
function View() {
  const {postDetails, setpostDetails} = useContext(postContext)
  const {firebase} = useContext(FirebaseContext)
  const [userDetails, setuserDetails] = useState()
  useEffect(() => {
    const {userId}= postDetails
      firebase.firestore().collection('users').where('Id','==',userId).get().then((snapshot) => {
        snapshot.forEach(element => {
          setuserDetails(element.data())
          console.log(element.data());
      })
      }) 
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.Price} </p>
          <span>{postDetails.Name}</span>
          <p>{postDetails.Category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails &&
          <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.Name}</p>
          <p>{userDetails.Phone}</p>     
          </div>
        }
        
      </div>
    </div>
  );
}
export default View;
