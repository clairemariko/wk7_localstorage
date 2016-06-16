var init = function(){
  console.log('app started');

//so when the app runs for the first time there is no films so it will be an empty array
  var films = JSON.parse(localStorage.getItem('film_app_list')) || []
  console.log("on init got films", films);
//now we want to populate film_app_list by going to underneath ul.appendChild and pushing filmName into films.

//now to grab our film collection and append it to our page. so we need to loop through it. create a new element of list. li.innerText allows for text to be put in there and we are putting in the film name. now we need ul to append it to. 


    var addFilms = function(filmName){
    var li = document.createElement('li')
    li.innerText = filmName;
    var ul = document.getElementById('film-list');
    
    ul.appendChild(li);
  }
    films.forEach(function(fimName){
      addFilms(filmName)
  //   })
    
  // })
  //now if you refresh the browser it will appear on the page. 

  var button = document.getElementById('add-button');
  var handleClick = function(){
    console.log('Woah I was got clicked')
    var textInput = document.getElementById('film-text-input')
    var filmName = textInput.value;
    console.log('film name', filmName);

    
    addFilms(filmName);
    // var li = document.createElement('li');
    // li.innerHTML = filmName;
    // var ul = document.getElementById('film-list');
    // ul.appendChild(li);


//this is how to populate film_app_list and save it to the storage which needs to be a string , remember local storage can only take strings
    films.push(filmName)
    localStorage.setItem('film_app_list', JSON.stringify(films))
  }
  button.onclick = handleClick;
};

window.onload = init;
