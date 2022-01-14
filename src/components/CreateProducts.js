import {useState} from 'react'


function CreateProducts (props) {

     let [errors, setErrors] = useState(null)
     let [success, setSuccess] = useState(false)

let [brands,setBrands] = useState([

    {
        _id : 1,
        name : "Fiat"
    },
    {
        _id : 2,
        name : "BMW"
    },
    {
        _id : 3,
        name : "Ford"
    },
])

    let [data,setdata] = useState({
        name : null,
        price : null,

    })

    function sendFormData (e){
console.log(e)
e.preventDefault()
   
    // el fetch por default es un GET
   fetch('http://localhost:4000/products')
    
    
    
    
    // FETCH PARA HACER UN POST
    fetch('http://localhost:4000/products', {

        method : "POST",
        body: JSON.stringify(data),
        headers : {
            "content-type" : "application/JSON"
        },

    })
    .then(response => {
        if (response.status !== 201) {

            //error
            setErrors(response.json())
        } else {
         
            //informar que salio bien
            setSuccess (true)
            setErrors (null)

        }
    })

    }

function handleInput (e) {
    let inputName = e.target.name

    setdata({
        ...data,
        [inputName] : e.target.value
    })
}


    return(

        <>
{
    errors ? <p>Revise todos los campos</p> : ""
}

<form action="/products" method="post" novalidate autocomplete="off" onSubmit = {sendFormData} >

<h1>Alta de producto</h1>

    <div>
<label htmlFor="ProductTitle">Titulo del Producto</label>
<input id = "ProductTitle" type ="text" name="name" value = {data.name} onInput = {handleInput}/>

<label htmlFor="ProductPrice">Precio</label>
<input id = "ProductPrice" type ="number" name="price" min = "0" value = {data.price} onInput = {handleInput} />

<label htmlFor="">Marca</label>
<select name="brands" value = {data.brands} onInput = {handleInput}>
<option></option>
{brands.map(brand=> {
    return <option value={brand._id}>{brand.name}</option>
})}
</select>

    </div>

    <div>
    <button>Enviar</button>
    </div>

</form>
</>
    )}


    

export default CreateProducts