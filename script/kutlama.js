const dilekButton = document.querySelector('#dilek');
const mumButton = document.querySelector('#mum');
const cake = document.querySelector('div.img');
const baloons = document.querySelectorAll('.baloons>img');
const card = document.querySelector('.card');

dilekButton.onclick = () => {
    mumButton.style.display = "inline-block";
    dilekButton.style.display = "none";
}

mumButton.onclick = () => {
    cake.classList.remove('img');
    cake.classList.add('img-2');

    baloons[0].classList.remove('animate__infinite');
    baloons[0].classList.remove('animate__pulse');
    

    baloons[1].classList.remove('animate__infinite');
    baloons[1].classList.remove('animate__pulse');

    baloons[0].classList.add('baloon-animate');
    baloons[1].classList.add('baloon-animate');

    mumButton.style.display = "none";
    card.style.animation = "card_animate .8s linear 1.3s forwards";
}