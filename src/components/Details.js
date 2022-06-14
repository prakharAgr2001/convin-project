import React from "react";
import "../components/Details.css";

function Details({ selectedUser }) {
  const [usersDetail, setUsersDetail] = React.useState({
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
});


  const f = async () => {
    const res = await fetch(`https://reqres.in/api/users/${selectedUser}`);
    const json = await res.json();
    if(selectedUser!=null){
    setUsersDetail(json.data)};
    console.log("Json=" ,json.data)
  };

  React.useEffect(() => {
    console.log(usersDetail);
  }, [selectedUser]);


  React.useEffect(() => {
    f();
  },[selectedUser]);


  if (selectedUser === null) {
    return <h5>click a button</h5>;
  }
   console.log("usersDetail=",usersDetail)
  return (
    <div>
    <h1>User Info</h1>
   <div className="card center" >
   <h1 className="Name">{usersDetail.first_name +" "+ usersDetail.last_name}</h1>
     <div className="image-crop">
     <img src={usersDetail.avatar} className="card-img-top image avatar" alt="..." />
     </div>
     <div class="card-body bio">
        
       <p class="card-text">
           {usersDetail.email}
       </p>
     </div>
   </div>
   <h5 className="info">Click on User ID to see Info of Person</h5>
 </div>
  
    
    
    // <div>
    //   <h1>User Info</h1>
    //   <div className="card center">
    //     <h1 className="Name">Prakhar Agrawal</h1>
    //     <div className="image-crop">
    //       <img
    //         src="https://media-exp1.licdn.com/dms/image/C4E03AQE1q5zu2OUddg/profile-displayphoto-shrink_800_800/0/1629710526168?e=1660780800&v=beta&t=BiF0oCOMVgipAtQYm02RTiN7Mhz5QpH9_cRqpr39E00"
    //         className="card-img-top image avatar"
    //         alt="..."
    //       />
    //     </div>
    //     <div class="card-body bio">
    //       <p class="card-text">prakharagrawal2001</p>
    //     </div>
    //   </div>
    //   <h5 className="info">Click on User ID to see Info of Person</h5>
    // </div>
  );

  // const [usersDetail, setUsersDetail] = React.useState(null);

  // const f = async () => {
  //   const res = await fetch(`https://reqres.in/api/users/${selectedUser}`);
  //   const json = await res.json();
  //   setUsersDetail(json.data);

  // };
  // React.useEffect(()=>{
  //    console.log(usersDetail)
  // },[selectedUser])
  // React.useEffect(() => {
  //   f();
  // }, [selectedUser]);
  // if(selectedUser===null){return(
  //     <h5>click a button</h5>
  // );}
  // if(usersDetail===null)return
  // return (

  //   <div>
  //      <h1>User Info</h1>
  //     <div className="card center" >
  //     <h1 className="Name">Prakhar Agrawal</h1>
  //       <div className="image-crop">
  //       <img src= "https://media-exp1.licdn.com/dms/image/C4E03AQE1q5zu2OUddg/profile-displayphoto-shrink_800_800/0/1629710526168?e=1660780800&v=beta&t=BiF0oCOMVgipAtQYm02RTiN7Mhz5QpH9_cRqpr39E00"className="card-img-top image avatar" alt="..." />
  //       </div>
  //       <div class="card-body bio">

  //         <p class="card-text">
  //             {usersDetail.email}
  //         </p>
  //       </div>
  //     </div>
  //     <h5 className="info">Click on User ID to see Info of Person</h5>
  //   </div>
  // );
}

export default Details;
