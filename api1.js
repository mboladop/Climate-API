let request = new XMLHttpRequest();

function displayNicely(apiData){
     let newData = JSON.parse(apiData);
    
     document.getElementById("name").innerHTML = "<strong>Name: </strong>" + newData.name + "<br>";
     
     document.getElementById("eye_color").innerHTML += "<strong>Eye color: </strong>" + newData.eye_color + "<br>";
     
     document.getElementById("birth_year").innerHTML += "<strong>Birth year: </strong>" + newData.birth_year;
}
request.onreadystatechange= function (){
    if (this.readyState == 4 && this.status == 200){
        displayNicely(this.responseText);
    }
}




request.open("GET","https://swapi.co/api/people/4/")
request.send();