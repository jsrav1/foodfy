const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        let modalImg = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `assets/${modalImg}.png`;
        modalOverlay.querySelector('h4').innerHTML = card.querySelector('h4').textContent
        modalOverlay.querySelector('p').innerHTML = card.querySelector('p').textContent
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("").src = ""
})
