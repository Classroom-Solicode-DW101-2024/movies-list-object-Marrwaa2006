class Movie {
    constructor(title, synopsis, date, rating) {
        this.title = title;
        this.synopsis = synopsis;
        this.date = date;
        this.rating = rating;
    }
}
let movies = [
    new Movie('the silent city', 'A haunting thriller set in a dystopian world where silence is both a weapon and a shield. Follow the journey of a lone survivor.', 2010, 4),
    new Movie('the last horizon', 'In a race against time, a group of explorers travels to the edge of the universe to uncover the secrets of existence.', 2011, 5),
    new Movie('echoes of the past', 'A historian discovers ancient relics that reveal dark truths about humanitys origin and its impending future.', 2012, 3),
    new Movie('shadows in the mist', 'When a small town is enveloped by a mysterious fog, its residents are forced to confront their deepest fears.', 2013, 2),
    new Movie('a quantum leap', 'A physicist accidentally opens a portal to alternate dimensions, setting off a chain of events that could destroy the universe.', 2014, 1),
    new Movie('fragments of time', 'Two strangers from different timelines find themselves linked by a mysterious artifact that transcends time.', 2015, 3),
    new Movie('the forgotten realm', 'An archaeologist uncovers an ancient civilization hidden beneath the Earth, which holds the key to humanitys future.', 2016, 5),
    new Movie('waves of tomorrow', 'Set in a world submerged by rising seas, survivors battle for resources while searching for the last dry land.', 2017, 4),
    new Movie('into the abyss', 'A deep-sea exploration team encounters a terrifying species in the uncharted depths of the ocean.', 2018, 2),
    new Movie('legacy of the fallen', 'A warrior from a fallen kingdom seeks revenge, but in his quest, he discovers the truth behind his lineage.', 2019, 1)    
];
function update(){
     const tableBody = document.getElementById("table");
     for (let i = 0; i < movies.length; i++) {
        const film = movies[i];
        let row = document.createElement("tr");
        row.innerHTML=`
        <td> ${film.title}</td>
        <td> ${film.synopsis}</td>
        <td> ${film.date}</td>
        <td> ${film.rating}</td>
        <td><button class="dlt" onclick="deleteRow(this)">X</button></td>`;
        tableBody.appendChild(row);  
     }
    }
     function search() {
        const searchInput = document.getElementById("searchInput").value;
       
        tableBody.innerHTML = '';
       
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].title.toLowerCase().includes(searchInput.toLowerCase())){
                let row = document.createElement("tr");
                
                row.innerHTML = `
                    <td>${movies[i].title}</td>
                    <td>${movies[i].synopsis}</td>
                    <td>${movies[i].date}</td>
                    <td>${movies[i].rating}</td>
                `;
               
                tableBody.appendChild(row);
            }
        } 
    }
   
    

function displayMovies() {
    document.getElementById("tab").style.display="inline-block"
    document.getElementById("button").style.display="none"
    document.getElementById("header").style.display="none"
    document.getElementById("button2").style.display="none"
    document.getElementById("searchMovie").style.display="inline-block"
    document.getElementById("searchInput").style.display="inline-block"
}
function addMovie() {
    document.getElementById("form").style.display="inline-block"
    document.getElementById("button2").style.display="none"
    document.getElementById("button").style.display="none"
    document.getElementById("header").style.display="none"
}
function deleteRow (button) {
    button.parentElement.parentElement.remove();
}
function addFilm() {
   let title =document.getElementById("title").value
   let synopsis =document.getElementById("synopsis").value
   let date =document.getElementById("date").value
   let rating =document.getElementById("rating").value
   let film = new Movie (title, synopsis, date, rating)
   document.getElementById("form").reset()
   movies.push(film);
   update()
   document.getElementById("form").style.display="none"
   document.getElementById("header").style.display="block"
   document.getElementById("button").style.display="inline-block"
   document.getElementById("button2").style.display="inline-block"
} 