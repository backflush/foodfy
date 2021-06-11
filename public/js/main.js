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