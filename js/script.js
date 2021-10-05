// Constants and Variables
const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = '395abbbf7cf54db3a33ddbdd4e6b5442';
// const API_KEY='01eae44241356793d267c8322f9d143b'; // 16day forecast
// 16 day forecast api key not available for free
let weatherData;

const $city = $('#city');
const $temperature = $('#temperature');
const $feelsLike = $('#feels-like');
const $weather = $('#weather');
const $form = $('form');
const $input = $('input[type="text"]');
const $inputCount = $('#input-count');

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// Event Listeners
$form.on('submit', handleGetData);

// Functions
function handleGetData(evt) {
    evt.preventDefault();

    const cityName = $input.val();
    // const count = $inputCount.val();
    $input.val('');


    $.ajax(`${BASE_URL}/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
    .then(function(data) {
        weatherData = data;
        console.log(weatherData)
        render();
    }, function(err) {
        console.log(err);
    });
}

function render() {
    $city.text(weatherData.name);
    $temperature.text(weatherData.main.temp);
    $feelsLike.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather[0].description);
}