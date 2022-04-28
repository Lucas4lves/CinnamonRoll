//Footer Script

const date = new Date();
const currentYear = date.getFullYear();

document.querySelector('footer').innerText=`Desenvolvido por Lucas Alves © ${currentYear}`;

function showCardContent(){
    const cards = document.querySelectorAll('.card__content');
    cards.forEach((card) => {
        card.classList.add("active")
    })
}

function removeCardContent(){
    const cards = document.querySelectorAll('.card__content');
    cards.forEach((card) => {
        card.classList.remove("active")
    })
}

function scrollHorizontallyR(){
    document.querySelector('.card__container').scrollBy(300, 0);
}

function scrollHorizontallyL(){
    document.querySelector('.card__container').scrollBy(-300, 0);
}
