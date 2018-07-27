// $.get(url, callback);

var apikey = "34d44b1a7cd25b5c3d5265115a5354b1";

$('#weatherForm').on("submit", (e) => {
  var city = $('#cityInput').val();
  var units = $('#unitsInput option:selected').attr('name');
  var url = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&q=${city},us&units=${units}`;
  var measurement = "mph";
  var degrees = "F";

  $.get(url, data => {
    if(units === 'metric')
    {
      measurement = "kph";
      degrees = "C"
    }
    $('#weatherPanel').css("display", "block");
    $('#cityName').html(`${data.name}`);
    $('#description').html(`<strong>Conditions</strong>: ${data.weather[0].description}`);
    $('#windSpeed').html(`<strong>Wind speed</strong>: ${data.wind.speed}${measurement}`);
    $('#temperature').html(`<strong>Current</strong>: ${Math.floor(data.main.temp)}&deg;${degrees}`);
    $('#highTemperature').html(`<strong>High</strong>: ${Math.floor(data.main.temp_max)}&deg;${degrees}`);
    $('#lowTemperature').html(`<strong>Low</strong>: ${Math.floor(data.main.temp_min)}&deg;${degrees}`);
  });
  e.preventDefault();
});
