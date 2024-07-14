let searchbox=document.querySelector('#searchbox');
let sicon=document.querySelector('#sicon');
let sunphase=document.querySelector('#sunphase');
let tempChange=document.querySelector('#tempChange');
let cityChange=document.querySelector('#cityChange');
let humCng=document.querySelector('#humCng');
let none=document.querySelector('.none');
let speedCng=document.querySelector('#speedCng');
let hide=document.querySelector('.hide');
let invalid=document.querySelector('.invalid');

let apikey="c8f493bdff9e0f3ef66cae08731a7509";
let baseUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
async function checkWeather(city){
    const response=await fetch(baseUrl+city+`&appid=${apikey}`);
    let data=await response.json();
    if(response.status===404){
        invalid.classList.remove("hide");
        none.classList.add("none");
    }else{
        cityChange.innerText=data.name;
        tempChange.innerText=data.main.temp;
        if(data.weather[0].main=="Clear"){
            sunphase.src="clear.png";
        }else if(data.weather[0].main=="Clouds"){
            sunphase.src="clouds.png";
        }else if(data.weather[0].main=="Rain"){
            sunphase.src="rain.png";
        }else if(data.weather[0].main=="Clouds"){
            sunphase.src="clouds.png";
        }else if(data.weather[0].main=="Drizzle"){
            sunphase.src="drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            sunphase.src="mist.png";
        }else{
            sunphase.src="snow.png";
        }
        speedCng.innerText=data.wind.speed;
        none.classList.remove("none");
        invalid.classList.add("hide");
    }
    console.log(data);
    

    
}
sicon.addEventListener("click",(event)=>{
    event.preventDefault();
    checkWeather(searchbox.value);
})
