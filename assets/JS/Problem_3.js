fetch('./assets/JSON/problem_3.json')
  .then(response => response.json())
  .then(data => {
	Highcharts.chart('container_3', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: 'Foreign umpire analysis',
	        align: 'center'
	    },
	    credits: {
			    enabled: false
		},
	    xAxis:[
	    {   
	    	categories: Object.keys(data)
	    },
	    {
		    title: {
		            text: 'Country'
		        }
		}],
	    yAxis: [{
		        title: {
		            text: 'Number of umpires'
		        },
		    }],
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
				}
			}
		},
		tooltip: {
			valueSuffix: ' Umpires'
		},
	    series:[
	    	{	
	    		showInLegend: false,      
	    		data: Object.values(data)
	    	},
	    ]
	});
	var keys = Object.keys(data);
	var values = Object.values(data);
	console.log(keys);
	console.log(values);
});
