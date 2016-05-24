	var happyCount=0, indifferentCount=0, sadCount=0, yesCount=0, noCount=0;

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
				text: "Feedback"               
			},
			data: [              
			{
				 indexLabel: "{label} : {y}",
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
		
		var chart = new CanvasJS.Chart("chartContainerYN", {

			title:{
				text:"Increased TechLab Understanding?"				

			},
                        animationEnabled: true,

			data: [
			{     
				indexLabel: "{label} : {y}",
				type: "bar",
                name: "companies",
				axisYType: "secondary",
				color: "#014D65",				
				dataPoints: [
				
				{y: yesCount, label: "Yes"  },
				{y: noCount, label: "No"  }
				]
			}
			
			]
		});

		chart.render();

	}

	function happy() {
		happyCount++;
		changeView()
	};
	function indifferent() {
		indifferentCount++;
		changeView()
	};
	function sad() {
		sadCount++;
		changeView()
	};
	
	function yes(){
		yesCount++;
		showResults();
		update();
	}
	function no() {
		noCount++;
		showResults();
		update();
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
	    }, 4000);
	}
	function results() {
		$('.votingFaces').hide();
		$('.results').show();
		document.getElementById('thanks').innerHTML = "TechTalk Feedback Results";;
		renderChart();
	}
	
	function update() {
		$('.happy').html(happyCount);
		$('.indifferent').html(indifferentCount);
		$('.sad').html(sadCount);
		$('.yes').html(yesCount);
		$('.no').html(noCount);
		renderChart();
	};
