import react, {useState} from 'react'

function App() {

  const [data, setData] = useState();

  const showData = () => {

    try{
      const fetchPromise = fetch('https://fakestoreapi.com/products').then((res)=>{
        return res.json()
      }).then((test)=>{
   
        setData(test)
      })

  }catch(error){
      console.log(error);
    }
 
  }

  return (
    <div>
      <h1 className='bg-danger text-center display-3'>Fetch Api </h1>
      <div className='container'>
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Discription</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              
            </tr>
            </thead>

            <tbody>
           {data?.map((item)=>
            
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>
                  <img style={{width : "100px"}} src={item.image}></img>
                </td>
                <td>{item.rating.rate}</td>
              </tr>
        
             

              )}
               </tbody> 
             
       
         
        </table>
        <button onClick={showData} className='btn btn-outline-primary mt-5'>Show Data</button>
      </div>
      
    </div>
  )
}

export default App

