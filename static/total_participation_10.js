url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    data.sort((a, b) => a.total_participation < b.total_participation ? 1 : -1);
    displayParticipationsChart(data.slice(0,20));
  });

function displayParticipationsChart(data) {
    console.log("display participation chart");
    let barData = {
        name: "Total Won",
        type: "bar",
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_won))
    };

    let lineData = {
        name: "Participation",
        type: "bar",
        yaxis: 'y2',
        x: data.map(d=>d.country),
        y: data.map(d=>parseInt(d.total_participation))
    };

    let layout = {
        title: 'Top 20 Total Won & Participation',
        yaxis: {title: 'Total Won'},

        yaxis2: {
          title: 'Participation',
          titlefont: {color: 'rgb(148, 103, 189)'},
          tickfont: {color: 'rgb(148, 103, 189)'},
          overlaying: 'y',
          side: 'right'
        }
      };

    Plotly.newPlot("plot", [barData, lineData], layout);
}