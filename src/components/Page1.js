import React from "react";
import Number from "./Number";
import Details from "./Details";
import "../components/page1.css"

export default function Page1() {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSlectedUser] = React.useState(null);
  const[page,setPage]=React.useState(1)
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  function handleClick(id) {
    setSlectedUser(id);
  }
  const handleClick2 = async () => {  
    const url= `https://reqres.in/api/users?page=${page+1}`
    setPage(page+1) 
    let data = await fetch(url);
        let parsedData = await data.json()
        setUsers(parsedData.data);}

        const handlePrevClick = async () => {  
          const url= `https://reqres.in/api/users?page=${page-1}`
          setPage(page-1) 
          let data = await fetch(url);
              let parsedData = await data.json()
              setUsers(parsedData.data);}
              
  
  
  return (
    <div>
       {/* <h5>click on any button</h5> */}
      {<Details  selectedUser={selectedUser} />}
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div >
                <div >
                  <div  key={user.id}>
                     
                   <Number handleClick={handleClick} identity={user.id} /> 
                  </div>
                  
                </div>
              </div>
            );
          })}
        
      </div>
      <div className ="buttonMotion container d-flex justify-content-between">
      <button disabled ={page<=1} onClick={handlePrevClick}>&larr; Previous</button>
      <button disabled ={page+1>2} onClick={handleClick2}>Next &rarr;</button>
      </div>
    </div>
  );
}
