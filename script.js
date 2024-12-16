// const randomQuote = [
//     'Quality is not an act, it is a habit',
//     'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
//     'Life is 10% what happens to you and 90% how you react to it.',
//     'If you are going through hell, keep going.',
//     'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
//     'With the new day comes new strength and new thoughts.',
//   ];

//   const quoteElement = document.querySelector('#quote')
//   const authorElement = document.querySelector('#author')
//   const button = document.querySelector('#button')

//   let autoQuote = () => {
//     const quoteIndex = Math.floor(Math.random() * randomQuote.length)
//     quoteElement.textContent = randomQuote[quoteIndex]
//   }
//   button.addEventListener('click', autoQuote)





// const randomQuotes = [
//     {
//       quote: 'Quality is not an act, it is a habit',
//       author: 'Aristotle',
//     },
//     {
//       quote:
//         'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.',
//       author: 'Norman Vincent Peale',
//     },
//     {
//       quote: 'Life is 10% what happens to you and 90% how you react to it.',
//       author: 'Charles R. Swindoll',
//     },
//     {
//       quote: 'If you are going through hell, keep going.',
//       author: 'Winston Churchill',
//     },
//     {
//       quote:
//         'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
//       author: 'Samuel Beckett',
//     },
//     {
//       quote: 'With the new day comes new strength and new thoughts.',
//       author: 'Eleanor Roosevelt',
//     },
//   ];

//   const quoteElement = document.querySelector('#quote')
//   const authorElement = document.querySelector('#author')
//   const button = document.querySelector('#button')

//   let autoQuote = () => {
//     const quoteIndex = Math.floor(Math.random() * randomQuotes.length)
//     quoteElement.textContent = randomQuotes[quoteIndex].quote
//     authorElement.textContent = randomQuotes[quoteIndex].author
//   }
//   button.addEventListener('click', autoQuote)

const quoteElement = document.querySelector('#quote')
const authorElement = document.querySelector('#author')
const button = document.querySelector('#button')

const urlApi = 'https://api.api-ninjas.com/v1/quotes?category=computers'
const keyApi = 'l69l2RTUm0UfAmSOIYzLTQ==uxBjiCYua8DS9631'

const getQuote = () => {
  fetch(urlApi, {
    headers: {
      'X-Api-key': keyApi,
    }
  })
  .then(data => data.json())
  .then(item => {
    quoteElement.textContent = item[0].quote
    authorElement.textContent = item[0].author
  })
  .catch(error => {
    console.error('error fetching quotes', error)
  })
}
button.addEventListener('click', getQuote)
