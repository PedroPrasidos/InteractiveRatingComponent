const classification_cards = document.querySelectorAll(".classifications span");

const submit_button = document.querySelector(".submit_btn");

const evaluation_points = document.getElementById("assess");

const section_assess = document.querySelector(".classification_section");

const section_thanks = document.querySelector(".thanks_section");

let assess = null

classification_cards.forEach((classification_card) => {
    classification_card.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove("checked");
        }

        const card = e.target;
        card.classList.add("checked");
        assess = e.target.innerText;
    })
});

submit_button.addEventListener("click", () => {
    if(assess){
        evaluation_points.innerText = assess;
        section_assess.classList.add("hidden");
        section_thanks.classList.remove("hidden");
    }
})