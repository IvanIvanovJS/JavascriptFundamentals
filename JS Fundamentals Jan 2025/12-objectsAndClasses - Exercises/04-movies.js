function movie (arr){
    let result = [];
    for(let movieInfo of arr){
        if(movieInfo.includes(`addMovie`)){
            let movieName = movieInfo.split(`addMovie `)[1];
            
            let movieObj = {
                name: movieName
            }
            result.push(movieObj)
        } else if (movieInfo.includes(`directedBy`)){
            let [movieName, director] = movieInfo.split(` directedBy `);
            let foundMovie = result.find(movieObj => movieObj.name === movieName);

            if(foundMovie){
                foundMovie.director = director;
            }
        } else if (movieInfo.includes(`onDate`)){
            let [movieName, date] = movieInfo.split(` onDate `);
            let foundMovie = result.find(movieObj => movieObj.name === movieName);
            if(foundMovie){
                foundMovie.date = date;
            }
        }
        
    }
    
    for (let objects of result) {
        if(objects.name && objects.director && objects.date){
            let JSONtext = JSON.stringify(objects);
        console.log(JSONtext);
        } 
        
    }
    
    
    
}
movie([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )