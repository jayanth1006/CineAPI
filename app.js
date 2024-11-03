// movie app 
let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=';


// fetch(api).then((response) => {
//     return response.json()
// }).then((movieData) => {
//     console.log(movieData)
// })


// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });

let title = document.getElementById('title');
let date = document.getElementById('date');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let poster = document.getElementById('poster');
let desc = document.getElementById('desc');
let collection = document.getElementById('collection');
let ratings = document.getElementById('ratings');
let genre = document.getElementById('genre');



function searchMovie() {
    let movieName = document.getElementById('movieName');
    let query = api + movieName.value;
    fetch(query).then((response) => {
        return response.json()
    }).then((movieData) => {
        console.log(movieData)
        title.innerText = movieData.Title;
        genre.innerText = movieData.Genre;
        date.innerText = movieData.Released;
        collection.innerText = movieData.BoxOffice;
        director.innerText = movieData.Director;
        ratings.innerText = movieData.imdbRating;
        actors.innerText = movieData.Actors;
        desc.innerText = movieData.Plot;
        poster.src = movieData.Poster;

    })
}