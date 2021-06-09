fetch('./assets/JSON/problem_2.json')
  .then(response => response.json())
  .then(data => {
	Highcharts.chart('container_2', {
	    chart: {
	        type: 'column'
	    },
	    title: {
	        text: 'Top batsman of Royal Challengers Bangalore',
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
		            text: 'Players Name'
		        }
		}],
	    yAxis: [{
		        title: {
		            text: 'Scores'
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
			valueSuffix: ' Runs'
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