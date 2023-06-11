url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    chart(data);
});

function chart(data) {
    console.log("display population chart");
    var trace1 = {
        x: data.map(d=>parseInt(d.population)),
        y: data.map(d=>parseInt(d.total_won)),
        mode: 'markers',
        type: 'scatter',
        text: data.map(d=>d.country),
        textposition: 'bottom center',
        marker: { size: 12 },
        xlabel: "population",
        ylabel: "Total Wins"
      };
      var layout = {
        title: {
          text:'Population and Total Medals',
          font: {
            size: 24
          },
          xref: 'paper',
          x: 0.05,
        },
        xaxis: {
          title: {
            text: 'Population in thousands (2017)',
            font: {
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: 'Total Medals',
            font: {
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      };
      
      Plotly.newPlot('plot', [trace1],layout);
};