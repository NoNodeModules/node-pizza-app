import axios from 'axios'
let addToCart = document.querySelectorAll('.add-to-cart')

function updateCart(pizza){
    axios.post('/update-cart',pizza).then(res =>{
    })
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
        console.log(pizza)
    })
}) 