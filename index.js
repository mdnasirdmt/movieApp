

function movieSearch(){
    console.log("hi")
     let movie = document.getElementById("movie").value;    
     const url=`http://www.omdbapi.com/?apikey=b62b1171&t=${movie}`;
     fetch(url).then(function(res){
         // console.log(res)
         return res.json();
     }).then(function(res){
         console.log(res);
         movieFun(res)
     }).catch(function(e){
         console.log(e);
     })
 }
 
 
 function movieFun(data){
     document.getElementById("container").innerHTML=null;
 
     let container = document.getElementById("container");
 
     let maindiv = document.createElement("div");
 
     let img = document.createElement("img");
     img.src=data.Poster;

     let actor=document.createElement('p')
     actor.innerText='Actor : '+data.Actors;

     let award=document.createElement('p')
     award.innerText='Award : '+data.Awards;

     let lang=document.createElement('p')
     lang.innerText='language : '+data.Language;

     let released=document.createElement('p')
     released.innerText='Released : '+data.Released;

     let year=document.createElement('p')
     year.innerText='Year : '+data.Year;



 
     maindiv.append(img,actor,award,lang,released,year);
     container.append(maindiv)
     
 
 }
 
 /*
 Actors: "N.T. Rama Rao Jr., Ram Charan, Ajay Devgn"
 Awards: "N/A"
 BoxOffice: "$9,500,000"
 Country: "India"
 DVD: "N/A"
 Director: "S.S. Rajamouli"
 Genre: "Action, Drama"
 Language: "Telugu, Hindi, Tamil, Malayalam, Kannada"
 Metascore: "N/A"
 Plot: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920's."
 Poster: "https://m.media-amazon.com/images/M/MV5BOGQ3ZjMwZDctZTFkMi00ZjUwLTlmMDUtNDZlYzJjNzZiNTg5XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_SX300.jpg"
 Production: "N/A"
 Rated: "PG-13"
 Ratings: [{…}]
 Released: "25 Mar 2022"
 Response: "True"
 Runtime: "187 min"
 Title: "RRR"
 Type: "movie"
 Website: "N/A"
 Writer: "Vijayendra Prasad, Sai Madhav Burra, Madhan Karky"
 Year: "2022"
 imdbID: "tt8178634"
 imdbRating: "9.1"
 imdbVotes: "37,302"
 */
 