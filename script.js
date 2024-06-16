const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8fa6185e77mshff5e368a1debe00p159445jsnde587b91215c',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) =>{

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct,
            temp.innerHTML = response.temp,
            temp2.innerHTML = response.temp,
            feels_like.innerHTML = response.feels_like,
            humidity.innerHTML = response.humidity,
            humidity2.innerHTML = response.humidity,
            min_temp.innerHTML = response.min_temp,
            max_temp.innerHTML = response.max_temp,
            wind_speed.innerHTML = response.wind_speed,
            wind_speed2.innerHTML = response.wind_speed,
            // wind_degrees.innerHTML = response.wind_degrees,
            sunrise.innerHTML = response.sunrise,
            sunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})


getWeather("Delhi")

const getWeather2 = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then(response => response.json())
      .then((response) => {
        console.log(response);
  
        const prefix = city.toLowerCase();
        document.getElementById(`${prefix}-cloud_pct`).innerHTML = response.cloud_pct;
        document.getElementById(`${prefix}-temp`).innerHTML = response.temp;
        document.getElementById(`${prefix}-feels_like`).innerHTML = response.feels_like;
        document.getElementById(`${prefix}-humidity`).innerHTML = response.humidity;
        document.getElementById(`${prefix}-min_temp`).innerHTML = response.min_temp;
        document.getElementById(`${prefix}-max_temp`).innerHTML = response.max_temp;
        document.getElementById(`${prefix}-wind_speed`).innerHTML = response.wind_speed;
        document.getElementById(`${prefix}-sunrise`).innerHTML = response.sunrise;
        document.getElementById(`${prefix}-sunset`).innerHTML = response.sunset;
      })
      .catch(err => console.error(err));
  }
  
const cities = ["Delhi", "Boston", "London", "Shanghai"];
cities.forEach(city => getWeather2(city));