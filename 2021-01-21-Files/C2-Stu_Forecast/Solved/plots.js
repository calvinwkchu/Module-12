let city = 'Chicago'

let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`


function getTimes(data) {
  return data.list.map(x => x.dt_txt)
}

function getTemps(data) {
  return data.list.map(x => x.main.temp)
}
d3.json(url).then(function(data) {
  console.log(data);

  times = getTimes(data)
  temps = getTemps(data)

  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: times,
    y: temps,
    line: {
      color: "#17BECF",
    }
  };

  var data = [trace1];

  var layout = {
    title: `${city} 5-day forecast`,
  };

  Plotly.newPlot("plot", data, layout);
})


