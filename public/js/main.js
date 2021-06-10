const sectionCards = document.querySelector(".content");

const card = document.querySelector(".card");

const cards = [
    {
        card_id: 2,
        title: "Pizza 4 estações",
        author: "Fabiana Melo",
        image: "../assets/pizza.png"
    },
    {
        card_id: 3,
        title: "Espaguete ao olho",
        author: "Julia Kinoto",
        image: "../assets/espaguete.png"
    },
    {
        card_id: 4,
        title: "Lasanha",
        author: "Juliano Vieira",
        image: "../assets/lasanha.png"
    },
    {
        card_id: 5,
        title: "Asinhas de frango ao barbecue",
        author: "Vania Steroski",
        image: "../assets/asinhas.png"
    },
    {
        card_id: 6,
        title: "Docinhos pão-do-céu",
        author: "Ricardo Golvea",
        image: "../assets/doce.png"
    },
]

const Modal = {
    open() {
        document.querySelector(".modal-overlay").classList.add("activeModal");
    },
    
    close() {
        document.querySelector(".modal-overlay").classList.remove("activeModal");
    }
}

const Toggle = {
    Ingredients() {
        const button = document.querySelector(".btn-show-ingredients");

        const ingredients = document.querySelector(".ingredients-content");
        
        if (button.innerHTML === "ESCONDER") {
            button.innerHTML = "MOSTRAR";
            ingredients.classList.toggle("display");
        } else {
            button.innerHTML = "ESCONDER";
            ingredients.classList.toggle("display");
        }
    },

    Preparation() {
        const button = document.querySelector(".btn-show-preparation");

        const preparation = document.querySelector(".preparation-content");
        
        if (button.innerHTML === "ESCONDER") {
            button.innerHTML = "MOSTRAR";
            preparation.classList.toggle("display");
        } else {
            button.innerHTML = "ESCONDER";
            preparation.classList.toggle("display");
        }
    },
    
    Information() {
        const button = document.querySelector(".btn-show-information");

        const information = document.querySelector(".information-content");
        
        if (button.innerHTML === "ESCONDER") {
            button.innerHTML = "MOSTRAR";
            information.classList.toggle("display");
        } else {
            button.innerHTML = "ESCONDER";
            information.classList.toggle("display");
        }
    },
}