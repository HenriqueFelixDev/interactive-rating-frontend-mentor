const ratingForm = document.getElementById('rating-form')
const thankYouSection = document.querySelector('.thank-you')
const selectedRating = document.getElementById('selected-rating')

ratingForm.onsubmit = event => {
    event.preventDefault()

    const ratingElement = event.target.rating
    const rating = ratingElement.value

    // Exibe uma mensagem de erro caso o usuário não tenha selecionado nenhuma avaliação
    if (!rating) {
        alert('Please, enter a valid rating!')
        return
    }

    // Troca para a "Thank You" page
    ratingForm.style.display = 'none'
    thankYouSection.style.display = 'flex'

    // Insere a avaliação selecionada pelo usuário na "Thank You" page
    selectedRating.innerText = rating
}