url = 'http://127.0.0.1:5000/api';

d3.json(url).then(function(data) {

    console.log(data);
    chart(data);
  });

function chart (data) {

    Highcharts.chart('container', {
        chart: {
            type: 'bar',
            width: 1800,
            height: 4000
        },
        title: {
            text: 'Total Wins Break Down'
        },
        xAxis: {
            categories: data.map(d=>d.country)
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Medals'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Summer',
            data: data.map(d=>parseInt(d.summer_total))
        }, {
            name: 'Winter',
            data: data.map(d=>parseInt(d.winter_total))
        }]
    
    });
}