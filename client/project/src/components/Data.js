import {useState,useEffect} from 'react'

const Data = () => {

    const [data,setData] = useState({})

    useEffect( () => {
        getData()
    },[])

    const getData = async () => {
        const url = "http://localhost:4011/getdata"
       const response = await fetch(url)
       const dataval = await response.json()
        console.log(dataval)
        setData(dataval)
    }
    return (
        <>
            <h1>Data Component</h1>
            {
              data.length > 0 &&   data.map(each => 
                        <div key = {each._id}>
                        <h1>{each.title}</h1>
                        <p>{each.description}</p>
                        </div>
                )
            }
        </>
    )
    
}

export default Data
