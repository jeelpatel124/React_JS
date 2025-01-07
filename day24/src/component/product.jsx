import React, { useEffect, useState } from 'react'

function Product() {

    const [product,setProduct] = useState([])
    const [sort,setSort] = useState("")
    const [sortdata,setSortdata] = useState([])
    const [filterval,setFilterval] = useState("")
    const [search,setSearch] = useState("")

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setProduct(res)
            setSortdata(res)   
        })
        .catch((err)=>{
            console.log(err);
            
        })

    },[])

    useEffect(()=>{
        let arr = [...product]
        if(sort == "high"){
            arr = arr.sort((a,b)=> b.price - a.price)
        }else if(sort == "low"){
            arr = arr.sort((a,b)=> a.price - b.price)
        }else{
            arr = product
        }

        if(filterval != ""){
            arr = arr.filter((e)=>{
                return e.category == filterval
            })
        }

        if(search != ""){
            arr = arr.filter((e)=>{
                return e.title.toLowerCase().includes(search.toLowerCase())
            })
        }

        setSortdata(arr)
    },[sort,filterval,search])

  return (

<>
        <div className='w-[100%] h-[80px] border pt-[25px]'>
            <center>
        <input type="text" placeholder='search product' className='ps-3 h-[30px] rounded-[8px] border shadow-lg' onChange={(e)=>{setSearch(e.target.value)}}/>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <select name="" id="" onChange={(e)=>{setFilterval(e.target.value)}}>
            <option value="">Filtering</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <select name="" id="" onChange={(e)=>{setSort(e.target.value)}}>
            <option value="">sorting</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
        </select>
        </center>
        </div>
        <br /><br /><br />



<div className='w-[100%] h-[auto] grid grid-cols-4 gap-5 items-center'>

        {  sortdata.map((el)=>{
            return <div key={el.id} className='border h-[360px] rounded-[10px]'>
                <div className='h-[200px] w-[100%] flex justify-center items-center pt-3'><img src={el.image} alt="" width='110px' /></div>
                <div className='h-[180px] w-[100%] p-4 pt-5'><h3>{el.title}</h3>
                    <h3 className='text-[orange]'>₹{el.price}</h3>
                    <h4 className='text-[dimgray]'>{el.category}</h4></div>
                </div>
        })

        }
    </div>
    </>)
}

export default Product


