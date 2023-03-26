const api_key =`` //Enter the Api over here
const form = document.querySelector('form')
const search = document.querySelector('#search')
const weather = document.querySelector('#weather')

const getWeather = async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    return showWeather(data);
}

const showWeather = (data) => {
    console.log(data);
    weather.innerHTML =`
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
                <h2>${data.main.temp}°C</h2>
                <h4>${data.weather[0].main}</h4>
       
    </div>
    <div>
    <h4><br>Minimum Temperature:${data.main.temp_min}</h4>
    <h4>Maximum Temperature:${data.main.temp_max}</h4>
    <h4>Wind Speed:${(data.wind.speed*18/5 ).toFixed()+ 'km/h'}</h4>
    <h5></h5>
    </div>
  `
}

form.addEventListener('submit',
function(event){
getWeather(search.value);
event.preventDefault();
}
)
