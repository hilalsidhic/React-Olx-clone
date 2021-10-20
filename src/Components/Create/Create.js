import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../Store/Context";

const Create = () => {

  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [Image, setImage] = useState(null);
  const handleSubmit=()=>{
    firebase.storage().ref(`/images/${Image.name}`).put(Image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={Price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            id="fname"
            name="Price"
          />
          <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={Image ? URL.createObjectURL(Image) : null}
          ></img>
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          <button onClick={handleSubmit}className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
