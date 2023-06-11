url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {
    console.log();

    chart(data);
});

function chart(data) {
    var data = [{
        values: data.map(d=>parseInt(d.population)),
        labels: data.map(d=>d.region),
        type: 'pie',
        hoverinfo: 'label+percent+name',
        textinfo: 'none',
        name: ""
      }];
       
      var layout = {
        title: 'Regions Populaiton Break Down',
        height: 800,
        width: 2000
      };
      
      Plotly.newPlot('plot', data, layout);
};