	var happyCount=0, indifferentCount=0, sadCount=0;

	$(function(){
		update();
		$('.votingButtons').hide();
		$('.results').hide();
	});
	
	function renderChart() {
		var chart = new CanvasJS.Chart("chartContainer", {
			theme: "theme2",
			colorSet: "colorSet3",
			title:{
				text: "Tech Talk Feedback Results"              
			},
			data: [              
			{
				type: "column",
				dataPoints: [
					{ label: "Happy",  y: happyCount  },
					{ label: "Indifferent", y: indifferentCount  },
					{ label: "Unhappy", y: sadCount  }
				]
			}
			]
		});
		chart.render();
	}

	function happy() {
		happyCount++;
		changeView()
		update();
	};
	function indifferent() {
		indifferentCount++;
		changeView()
		update();
	};
	function sad() {
		sadCount++;
		changeView()
		update();
	};
	
	function yes(){
		showResults();
	}
	function no() {
		showResults();
	}
	
	function changeView() {
		$('.votingFaces').hide();
		$('.votingButtons').show();
	}
	function showResults() {
		$('.votingButtons').hide();
		$('.results').show();
		renderChart();
		setTimeout(function() {
			$('.results').hide();
			$('.votingFaces').show();
	    }, 5000);
	}
	
	function update() {
		$('.happy').html(happyCount);
		$('.indifferent').html(indifferentCount);
		$('.sad').html(sadCount);
		renderChart();
	};
