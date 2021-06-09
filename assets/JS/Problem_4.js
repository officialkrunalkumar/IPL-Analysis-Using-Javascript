fetch('./assets/JSON/problem_4.json')
  .then(response => response.json())
  .then(data => {
	Highcharts.chart('container_4', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches plyaed by team by season'
    },
    credits: {
			    enabled: false
	},
    xAxis:[
	    {   
	    	categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
	    },
	    {
	    	labels: {
            enabled: false
        	},
		    title: {
		            text: 'Seasons'
		    }
		}], 
    yAxis: {
    	className: 'highcharts-color-1',
        title: {
            text: 'Played Matches'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( 
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
    	margin: 10,
    	padding: 10,
        align: 'center',
        verticalAlign: 'top',
        y: 10,
        floating: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: data
    });
    console.log(data);
});
