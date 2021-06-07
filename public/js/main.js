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