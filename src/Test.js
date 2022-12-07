import React, { useState } from "react";

function Test() {

    const [data , setData] = useState();

    const showData = () =>{

        // try{
        //     const fetchPromise = fetch('https://fakestoreapi.com/users').then((res)=>{
        //         // console.log(res.ok)
        //         return res.json();
               
        //     }).then((test)=>{
        //         // console.log(test);
        //         setData(test);
        //         console.log(data);
        //     })
        // }

        // catch(error){
        //     console.log(error);
        // }

        const fetchPromise = fetch('https://fakestoreapi.com/users')
        .then((res)=>{
            return res.json();
        }).then((test)=>{
            setData(test);
        }).catch((error)=>{
            console.log(error);
        })

    }

  return (
    <div>
      <h1 className="text-center display-4 bg-primary text-white mt-5">
        Fetch api data
      </h1>
      <div className="container mt-5">
        <table className="table table-bordered mt-5">
          <thead>

            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Last name</th>
              <th>Phone</th>
            </tr>

          </thead>

          <tbody>
            {data?.map((item)=>
             
             <tr>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.name.firstname}</td>
                <td>{item.name.lastname}</td>
                <td>{item.phone}</td>
             </tr>

                )}

          </tbody>
        </table>
        <button onClick={showData} className='btn btn-outline-primary mt-5'>Show Data</button>
      </div>
    </div>
  );
}

export default Test;
