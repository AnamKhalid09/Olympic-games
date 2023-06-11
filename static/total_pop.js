url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
  console.log(data);

  data.sort((a, b) => a.population < b.population ? 1 : -1);
  displayPopulationChart(data);
});


function displayPopulationChart(data) {
    console.log("display population chart");
    let barData = {
        name: "Total Won",
        type: "bar",
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };
    let lineData = {
        name: "Population",
        type: "bar",
        yaxis: 'y2',
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.population))
    };


    let layout = {
        title: 'Ranked Population Total Won & Population',
        yaxis: {title: 'Total Won'},
        barmode: 'group',
        yaxis2: {
          title: 'Population',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right'
        }
      };
      
    Plotly.newPlot("plot", [barData, lineData], layout);
}
