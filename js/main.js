//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
//   const choice = document.querySelector('input').value
  const url ="https://meowfacts.herokuapp.com/"//+choice

  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data[0])
        document.querySelector('h2').innerHTML = data.data[0]
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

       fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0].url)
        document.querySelector('img').src = data[0].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
 }

// function test(){
//     fetch('https://api.thecatapi.com/v1/images/search')
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data[0].url)
//         document.querySelector('img').src = data[0].url
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// test()

