const menu = [
    {
        id: 1,
        title: "Hamburger Premium",
        category: "breakfast",
        price: 15.99,
        img: "./assets/item-1.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut posuere ligula. Phasellus non metus in velit consequat porta. Etiam."
    },
    {
        id: 2,
        title: "Hamburger Med",
        category: "lunch",
        price: 13.99,
        img: "./assets/item-2.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus dictum dui posuere sagittis. Mauris maximus purus et tellus sodales."
    },
    {
        id: 3,
        title: "Dinner Prem",
        category: "dinner",
        price: 21.99,
        img: "./assets/item-3.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dignissim nibh, in maximus lacus faucibus eget. Donec quis hendrerit."
    },
    {
        id: 4,
        title: "Hamburger Light",
        category: "breakfast",
        price: 15.99,
        img: "./assets/item-4.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut posuere ligula. Phasellus non metus in velit consequat porta. Etiam."
    },
    {
        id: 5,
        title: "Salchipapa Med",
        category: "lunch",
        price: 10.99,
        img: "./assets/item-5.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus dictum dui posuere sagittis. Mauris maximus purus et tellus sodales."
    },
    {
        id: 6,
        title: "Dinner Mayor",
        category: "dinner",
        price: 17.99,
        img: "./assets/item-6.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dignissim nibh, in maximus lacus faucibus eget. Donec quis hendrerit."
    },
    {
        id: 7,
        title: "Hamburger Super",
        category: "breakfast",
        price: 19.99,
        img: "./assets/item-7.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut posuere ligula. Phasellus non metus in velit consequat porta. Etiam."
    },
    {
        id: 8,
        title: "Posho",
        category: "lunch",
        price: 20.99,
        img: "./assets/item-8.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus dictum dui posuere sagittis. Mauris maximus purus et tellus sodales."
    },
    {
        id: 9,
        title: "Dinner light",
        category: "dinner",
        price: 25.99,
        img: "./assets/item-9.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper dignissim nibh, in maximus lacus faucibus eget. Donec quis hendrerit."
    }
]

const $sectionCenter = document.querySelector('.section-center')
const $btnContainer = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
    displayMenuButtons()
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `
            <article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} width="250">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <p class="price">$${item.price}</p>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
                <a href="https://api.whatsapp.com/send?phone=++51999999999&text=Hola%20quiero%20un%20${item.title}" target="_blank" class="btn-whatsapp"><i class="fab fa-whatsapp"></i> Hacer pedido</a>
            </article>
        `
    })

    displayMenu = displayMenu.join("")
    $sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce((values, item) => {
        if(!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['all'])
    const categoryBtns = categories.map(category => `<button class="filter-btn" type="button">${category}</button>`).join("")
    $btnContainer.innerHTML = categoryBtns
    
    const $btnsFilter = $btnContainer.querySelectorAll('.filter-btn')
    
    $btnsFilter.forEach(btn => {
        btn.addEventListener('click', e => {
            const category = e.currentTarget.textContent
            const menuCategory = menu.filter(menuItem => menuItem.category === category)
            if(category === 'all') {
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
}