import { useEffect, useState } from "react"

//import firebase from "./fireBaseConfig"

  

function CategoryForm (){

    let [errors,setErros] = useState ({})

    let [categories,setCategories] = useState([])

    let [data,setData] = useState({

        categoryName : '',
        categoryId : null,
    })


    useEffect(function ()
    {
        fetch('http://localhost:4000/api/categories')
        .then(response => response.json())
        .then(categories=> setCategories (categories))


    },[])

    function submit (e){

        e.preventDefault()
        console.log(data)

        fetch ('http://localhost:4000/api/categories',{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    
    .then(response => {
if (response.status ===201) {
    setData({categoryName : ''})
} 
else {

    console.log(response.json())
}

        })

     
    }   

    function handleInput (e) {
      setData({

        ...data,
        [e.target.name] : e.target.value
      })

    }

return (

<form action = "" onSubmit={submit}>

<select name="categoryId" onInput = {handleInput}>
<option value=""></option>
{categories.map(c => <option value={c._id}>{c.categoryName}</option>)}


</select>

<div>

<label htmlFor="">Nombre</label>
<input type="text" name ="categoryName" onInput = {handleInput}/>
<div>{errors.message?.name.msg}</div>
</div>





<div>

<button>Continuar</button>

</div>





</form>

)}


export default CategoryForm