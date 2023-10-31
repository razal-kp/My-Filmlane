import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import {  getDatabase, ref, set, onValue  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBiQzygRCzd8R-n9D3Ci6gY591dL7mlmN0",
    authDomain: "filmlane-16ef5.firebaseapp.com",
    projectId: "filmlane-16ef5",
    storageBucket: "filmlane-16ef5.appspot.com",
    messagingSenderId: "437812699245",
    appId: "1:437812699245:web:fab7271b14986504105f64",
    measurementId: "G-P351DZLDM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);

const latestMovieRef = ref(database, 'Trending Movie');

onValue(latestMovieRef, (snapshot) => {
  const data = snapshot.val();

  document.getElementById('t_m_title').innerText = data.title
  document.getElementById('t_m_subtitle').innerText = data.subtitle
  document.querySelector('.hero').style.backgroundImage = `url("${data.bglink}")`;

}, (error) => {
  console.error('Error reading data from the database: ', error);
});

document.getElementById('banner_download').addEventListener('click', function() {

  onValue(latestMovieRef, (snapshot) => {
    const data = snapshot.val();

    const downloadLink = data.dlink
  
    window.open(downloadLink, '_blank');
  
  }, (error) => {
    console.error('Error reading data from the database: ', error);
  });
})



// Reference to the 'Movies' node in Firebase
const moviesRef =  ref(database, 'Movies');

onValue(moviesRef, (snapshot) => {
  const moviesData = snapshot.val();

  if (moviesData) {
    // Convert the data to a JSON object
    const jsonData = JSON.stringify(moviesData, null, 2);

    const movieList = document.getElementById('movieList');

    for (const movieKey in moviesData) {
      if (moviesData.hasOwnProperty(movieKey)) {
        const movie = moviesData[movieKey];

        // Create an <li> element for each movie card
        const movieCard = document.createElement('li');
        movieCard.innerHTML = `
          <div onclick="download_page('${movie.title}', '${movie.subtitle}', '${movie.plink}', '${movie.dlink}')" class="movie-card">
              <figure class="card-banner">
                <img src="${movie.plink}" alt="${movie.title} movie poster">
              </figure>
            <div class="title-wrapper">
                <h3 class="card-title">${movie.title}</h3>
            </div>
          </div>
        `;

        // Append the movie card to the list
        movieList.appendChild(movieCard);

        
      }
    }
  } else {
    console.log('No movie data found in the database.');
  }
}, (error) => {
  console.error('Error reading movie data from the database: ', error);
});
