// fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(data => {
//     data.map((data) => {
//         const ul = document.createElement('ul')
//         const li = document.createElement('li')

//         li.textContent = `${data.id} ${data.title}`
//         ul.appendChild(li)
//         document.querySelector('body').appendChild(ul)
//     })

// }).catch(err => console.log(err))

// async and await 

async function getData() {

    try {
        const res = await fetch(`https://fakestoreapi.com/products`, {
            method: "GET"
        })
        const data = await res.json()
        console.log(data)
        const html = data.map((item) => {
            return `
            <div class="home2">

                <div class="card">
                    <div class="img_card_hover">
                        <button class="add1" style="background: none; border: none;float: right; padding: 20px 20px;">
                            <img src="../img/icons8-heart-50.png" alt="" style="float: right;color: red;" class="add">
                        </button>
                        <div class="home_card_img" style="background-image: url('${item.image}')"></div>
                        <p class="card_narxlari1">${item.title}</p>
                    </div>
                </div>
                <div class="card_malumotlar">
                <div class="shar_center">
                    <div class="shar_star"></div>
                    <p class="sharh_uzum1">${item.rating.rate}
                    <p class="sharh_uzum">(${item.rating.count} sharh)</p>
                    </p>
                </div>
                <div class="border_som"></div>
                    <div class="space_betwen">
                        <p>${item.price} so&apos;m</p>
                        <button class="bag_png"></button>
                    </div>
                </div>
            </div>
            `
        })
        document.querySelector('.container').innerHTML = html
    } catch (err) {
        console.log(err)
    }
}
getData()

// let id = 0;
// document.querySelector('button').addEventListener("click", () => {
//     id = id + 1;
//     getData(id)
// })

// CRUD - (create, read, update, delete)

// Methods :
//  Create - POST,
//  Read - GET,
//  Update - PUT, PATCH,
//  Delete - DELETE