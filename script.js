//Api key dfca9c4d01546e2c6f2196c086d78bd3

var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=dfca9c4d01546e2c6f2196c086d78bd3')
    .then(response => response.json())
    .then(data=> {
        data.results.map((i, j) => {
            if(j > 15) {
                return;
            }
            if(j == 0) {
                main.innerHTML += `
                    <div class="principal-banner" 
                    style="background-image: url('https://image.tmdb.org/t/p/original${i.backdrop_path}')">
                    
                    </div>
                `;
            }
            else{
                if(j == 1) {
                    main.innerHTML += `
                        <h2>Assista o melhor filme</h2>
                        <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500${i.poster_path}" /></div>
                    `;
                }
                else {
                    main.innerHTML += `
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500${i.poster_path}" /></div>
                `;
                }
            }
        })
    })