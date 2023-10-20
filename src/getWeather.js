export async function getweather(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=8019975fe450418c9e1211654231910&q=${location}&days=5&aqi=no&alerts=no`,
    { mode: "cors" }
  );
  let data = await response.json();
  console.log(data);
  console.log("location " + data.location.name);
  console.log("time " + data.location.localtime);
  console.log("icon " + data.current.condition.icon);
  console.log("current " + data.current.condition.text);
  console.log("current temp " + data.current.temp_c + " °C");
  console.log("current temp " + data.current.temp_f + " °F");
  console.log("feels like " + data.current.feelslike_c + " °C");
  console.log("feels like " + data.current.feelslike_f + " °F");
  console.log("wind " + data.current.wind_kph + " kph");
  console.log("wind " + data.current.wind_mph + " mph");
  console.log("wind direction " + data.current.wind_dir);
  console.log("humidity " + data.current.humidity);
  console.log(data.current.precip_in + " rain inches");
  console.log(data.current.precip_mm + " rain mm");
  console.log("tomorrow sunrise " + data.forecast.forecastday[0].astro.sunrise);
  console.log("tomorrow sunset " + data.forecast.forecastday[0].astro.sunset);
  console.log("tomorrow high C " + data.forecast.forecastday[0].day.maxtemp_c);
  console.log("tomorrow high F " + data.forecast.forecastday[0].day.maxtemp_f);
  console.log("tomorrow low C " + data.forecast.forecastday[0].day.mintemp_c);
  console.log("tomorrow low F " + data.forecast.forecastday[0].day.mintemp_f);
  console.log(
    "tomorrow chance of rain " +
      data.forecast.forecastday[0].day.daily_chance_of_rain
  );
  console.log(
    "tomorrow descrip " + data.forecast.forecastday[0].day.condition.text
  );
  console.log(
    "tomorrow amount of rain mm " +
      data.forecast.forecastday[0].day.totalprecip_mm
  );
  console.log(
    "tomorrow amount of rain inches " +
      data.forecast.forecastday[0].day.totalprecip_in
  );
  console.log("day + 2 sunrise " + data.forecast.forecastday[1].astro.sunrise);
  console.log("day + 2 sunset " + data.forecast.forecastday[1].astro.sunset);
  console.log("day + 2 high C " + data.forecast.forecastday[1].day.maxtemp_c);
  console.log("day + 2 high F " + data.forecast.forecastday[1].day.maxtemp_f);
  console.log("day + 2 low C " + data.forecast.forecastday[1].day.mintemp_c);
  console.log("day + 2 low F " + data.forecast.forecastday[1].day.mintemp_f);
  console.log(
    "day + 2 chance of rain " +
      data.forecast.forecastday[1].day.daily_chance_of_rain
  );
  console.log(
    "day + 2 descrip " + data.forecast.forecastday[1].day.condition.text
  );
  console.log(
    "day + 2 amount of rain mm " +
      data.forecast.forecastday[1].day.totalprecip_mm
  );
  console.log(
    "day + 2 amount of rain inches " +
      data.forecast.forecastday[1].day.totalprecip_in
  );
}
