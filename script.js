// ? QUESTION : 1

function areEqual(obj1, obj2) {
  let sortedJSON1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  let sortedJSON2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  return sortedJSON1 === sortedJSON2;
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let result = areEqual(obj1, obj2);
console.log(result);

Question : 2

var request = new XMLHttpRequest ();
request.open ("GET","https://restcountries.com/v3.1/all",true)
request.send ();
request.onload = function(){
    var data=request.response ;
    // console.log(data);
    var result = JSON.parse(data);
    console.log(result);
    for(i=0;i<=result.length;i++){
        console.log(result[i].flag);
    }
     }


// //! QUESTION :3


var a = new XMLHttpRequest();

a.open("GET", "https://restcountries.com/v3.1/all", true);

a.onload = function () {
  if (a.status === 200) {
    var data = JSON.parse(a.responseText);

    data.forEach((country) => {
       

            const name = country.name.common;
            const region = country.region;
            const subregion = country.subregion;
            const population = country.population;
            console.log(`Country: ${name}, Region: ${region}, Subregion: ${subregion}, Population: ${population}`);
    });
  } else {
    console.error("Error fetching data. Status code:", a.status);
  }
};

a.onerror = function () {
  console.error("Network error occurred");
};

a.send();

 
 
