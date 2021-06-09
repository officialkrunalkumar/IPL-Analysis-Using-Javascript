fetch('./assets/JSON/problem_1.json')
  .then(response => response.json())
  .then(data => {
	Highcharts.chart('container_1', {
	    chart: {
	        type: 'bar',
    		inverted: true
	    },
	    title: {
	        text: 'Total Runs Scored by teams',
	        align: 'center'
	    },
	    credits: {
			    enabled: false
		},
	    xAxis:[
	    {
	    	categories: Object.keys(data),   
		    title: {
		            text: 'Teams'
		    }
		}],
	    yAxis: [{
		        title: {
		            text: 'Scores'
		        },
		    }],
		tooltip: {
			valueSuffix: ' Runs'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
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
