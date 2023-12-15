const div = document.getElementById("product");
const cartbutton = document.getElementById("pages");
let page = 1;
let limit = 4;
let db;

async function getProducts() {
    let skip = (page - 1) * limit;
    const response = await axios.get(`https://655ddd779f1e1093c59a0b08.mockapi.io/basket?page=${page}&limit=${limit}&skip=${skip}`);
    const data = await response.data;

    db = data;
    db.map(item => {
        const box = document.createElement("div");
        box.className = 'boxDiv';
        box.innerHTML = `
            <img src="${item.image}" style="max-width: 250px;min-height: 100px;" alt="">
            <p>${item.title}</p>
            <p>${item.price}</p>
            <p>${item.id}</p>
            <button onclick="addToBasket(${item.id})">Add To Basket</button>
        `;
        div.appendChild(box);
    });
    page++;
}

cartbutton.addEventListener('click', getProducts);
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id == id));
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(db);
}


window.onload = () => {
    getProducts()
}


function getbyname() {
    abcd.innerHTML = ``
    abc.style.display = 'none'
    abcd.style.display = 'block'

    axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?title=${inpp.value}`)
        .then(res => {
            db = res.data
            db.map(item => {
                const div = document.createElement('div')
                div.innerHTML = `
            <p>${item.title}</p>`
                abcd.append(div)
            })

        })
}
btn.addEventListener('click', getbyname)

function getbyname() {
    abcd.innerHTML = ``
    abc.style.display = 'none'
    abcd.style.display = 'block'

    axios.get('https://655c81de25b76d9884fd6913.mockapi.io/products')
        .then(res => {
            db = res.data
            let filteredData = db.filter(item => item.title.toLowerCase().includes(inpp.value))
            console.log(filteredData);
            filteredData.map(item => {
                const div = document.createElement('div')
                div.innerHTML = `
            <img src="${item.image}" style="max-width: 250px;min-height: 100px;" alt="">
            <p>${item.title}</p>`
                abcd.append(div)
            })

        })
}
btn.addEventListener('click', getbyname)

