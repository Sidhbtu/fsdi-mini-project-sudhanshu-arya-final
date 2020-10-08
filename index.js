// Import stylesheets
import './style.css';
var main =document.querySelector("main");

window.getWeather=function(){

const cityName=document.getElementById('cityName');
const nod=document.getElementById('inputGroupSelect01');
if(cityName.value=='')alert("Enter the City Name");
else{


try {
  getWeatherDetails(cityName.value,nod.value);
}
catch(err) {
  console.error(err);
}


}
console.log(cityName.value);
console.log(nod.value);
// getWeatherDetails();
}



const getWeatherDetails = (cityName,nod)=> {
   //main= document.querySelector("main");
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = response => {
   
    var data = response.target;
    if (data.readyState == 4 && data.status == 200) {
      const weatherDetails = JSON.parse(data.responseText);
      console.log(weatherDetails);   
 
main.innerHTML= "";
main= document.querySelector("main");


      const div = document.createElement("div");
      const h4 = document.createElement("h4");
      const p20 = document.createElement("p");
      p20.innerHTML="Today ,"+weatherDetails.forecast.forecastday[0].date;
     
      h4.setAttribute('class','d-flex justify-content-center pt-2');
      p20.setAttribute('class','d-flex justify-content-center pt-2');
      div.append(h4);
       div.append(p20);
      main.append(div);
      const city=weatherDetails.location.name;
      const region=weatherDetails.location.region;
      const country=weatherDetails.location.country;
      h4.innerHTML=city+", "+region+", "+country;
      
      const div1 = document.createElement("div");
      div1.setAttribute('class',' curr');
      const img = document.createElement("img");
      img.setAttribute('src',weatherDetails.current.condition.icon);
      img.setAttribute('class','condition');
      div1.append(img);
      const p = document.createElement("p");
      p.setAttribute('class','condition')
      p.innerHTML=weatherDetails.current.condition.text;
      div1.append(p);
      //div1.append(img);
      //main.append(div1);
const div2 = document.createElement("div");
      div2.setAttribute('class','currDetail');
     const p1 = document.createElement("p");
      p1.innerHTML="Precipitation : "+weatherDetails.current.precip_mm+" mm";
      const p2 = document.createElement("p");
      p2.innerHTML="Wind : "+weatherDetails.current.wind_kph+" kmph";
      const p3 = document.createElement("p");
      p3.innerHTML="Humidity : "+weatherDetails.current.humidity+" %";

      div2.append(p1);div2.append(p2);div2.append(p3);
      //main.append(div2);
const div3 = document.createElement("div");
 div3.setAttribute('class','d-inline p-2 bg-none  currTemp');

 const currDate=weatherDetails.forecast.forecastday[0].date;

 div3.innerHTML=weatherDetails.current.temp_c+ ' &deg;C';
 


      const div4=document.createElement("div");
      div4.setAttribute('class','d-flex justify-content-between');
div4.append(div1);
div4.append(div3);
div4.append(div2);
main.append(div4);

///////////////////////////////////////////////////////////////////////

var date = new Date(weatherDetails.forecast.forecastday[0].date);
//console.log(getWeekDay(date));

 var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );

    var day = date.getDay();


    //var wkd=weekdays[day];
////////////////////////////////////////////////////////////////////////////////////////
    const div5=document.createElement("div");const div6=document.createElement("div");const div7=document.createElement("div");

    div5.setAttribute('class','card');div6.setAttribute('class','card');div7.setAttribute('class','card');
  
  const p5=document.createElement("p");const p6=document.createElement("p");const p7=document.createElement("p");
  const img5=document.createElement("img");const img6=document.createElement("img");const img7=document.createElement("img");

const p9=document.createElement("p");const p10=document.createElement("p");const p11=document.createElement("p");

p5.innerHTML=weekdays[day];p6.innerHTML=weekdays[day+1];p7.innerHTML=weekdays[day+2];
console.log(weatherDetails.forecast.forecastday[0].day.condition.icon);
img5.setAttribute('src',weatherDetails.forecast.forecastday[0].day.condition.icon);
img6.setAttribute('src',weatherDetails.forecast.forecastday[1].day.condition.icon);
img7.setAttribute('src',weatherDetails.forecast.forecastday[2].day.condition.icon);

p9.innerHTML=weatherDetails.forecast.forecastday[0].day.maxtemp_c+"&deg;C , "+weatherDetails.forecast.forecastday[0].day.mintemp_c+"&deg;C";
p10.innerHTML=weatherDetails.forecast.forecastday[1].day.maxtemp_c+"&deg;C , "+weatherDetails.forecast.forecastday[1].day.mintemp_c+"&deg;C";
p11.innerHTML=weatherDetails.forecast.forecastday[2].day.maxtemp_c+"&deg;C , "+weatherDetails.forecast.forecastday[2].day.mintemp_c+"&deg;C";

div5.append(p5);div5.append(img5);div5.append(p9);
div6.append(p6);div6.append(img6);div6.append(p10);
div7.append(p7);div7.append(img7);div7.append(p11);

const div12=document.createElement("div");
div12.setAttribute('class','d-flex justify-content-between mt-3');

div12.append(div5);div12.append(div6);div12.append(div7);

main.append(div12);

    }
  };

   const url="https://api.weatherapi.com/v1/forecast.json?key=d536bb89e8a24d87873140853200610&q="+cityName+"&days="+parseInt(nod);

  xhttp.open("GET",url);
  xhttp.send();

}



// getWeatherDetails();



