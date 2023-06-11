url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log(data);

    chart(data);
});

function chart(data) {
    console.log("display population chart");
    var trace1 = {
        x: data.map(d=>parseInt(d.gdp)),
        y: data.map(d=>parseInt(d.total_won)),
        mode: 'markers',
        type: 'scatter',
        text: data.map(d=>d.country),
        textposition: 'bottom center',
        marker: { size: 12 }
      };
      var layout = {
        title: {
          text:'GDP and Total Medals',
          font: {
            size: 24
          },
          xref: 'paper',
          x: 0.05,
        },
        xaxis: {
          title: {
            text: 'GDP',
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
      

      
      

