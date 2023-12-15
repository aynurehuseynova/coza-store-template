const myDiv = document.getElementById('getProduct');


function getProducts() {
    console.log("'''");
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    myDiv.innerHTML = ``
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.innerHTML = `
        <img  style="max-width: 250px;min-height: 100px;" src="${item.image}" alt="">
        <p>${item.title}</p>
        <p>${item}</p>
        <button onclick="removeItem(${index})">Remove from cart</button> `


        myDiv.appendChild(box)
    })
    
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

window.onload = () => {
    getProducts()
}