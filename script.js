var chartOptions1 = {
  legend: {
    display: false,
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    },
  },
  scales: {
  	yAxes: [{
  		display: false,
  		ticks: {
  			beginAtZero: true
  		}  		
  	}]
  },
};

var chartOptions2 = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    },
  },
  scales: {
  	yAxes: [{
  		ticks: {
  			beginAtZero: true
  		}
  	}]
  },
};

var chart1 = null;
var chart2 = null;

function showPlots() {
	document.getElementById('fliers').checked = false;
	document.getElementById('imageRegion1').style.display = "block";
	document.getElementById('imageRegion2').style.display = "none";	
	if(document.getElementById("scenario1").checked){
		document.getElementById('showFlier').style.display = "block";
		document.getElementById("imageRegion2").innerHTML = "<h2>Drive count vs Equipments</h2><img src='Drive Count_fliers.jpg' height=400 width= 90% ></img>";
		document.getElementById("imageRegion1").innerHTML = "<h2>Drive count vs Equipments</h2><img src='Drive Count.jpg' height=400 width= 90%></img>";
		document.getElementById('imageRegion2').style.display = "none";
	}
	if(document.getElementById("scenario2").checked){
		document.getElementById('showFlier').style.display = "block";
		document.getElementById("imageRegion2").innerHTML = "<h2>Key-on hours vs Equipments</h2><img src='Key On Hours_fliers.jpg' height=400 width= 90% ></img>";
		document.getElementById("imageRegion1").innerHTML = "<h2>Key-on hours vs Equipments</h2><img src='Key On Hours.jpg' height=400 width= 90%></img>";
		document.getElementById('imageRegion2').style.display = "none";
	}
	if(document.getElementById("scenario3").checked){
		document.getElementById('showFlier').style.display = "none";
		document.getElementById("imageRegion1").innerHTML = "<div style='display:flex;'><div style='width:50%;'><h2>Location of all vehicles</h2><img src='all_vehicle_GPS.jpg' height=400 width=90%></img></div><div style='width:50%;'><h2>Path of the vehicle GNB4</h2><img src='GNB4_path.jpg' height=400 width=90% ></img></div></div>";
	}
}

function showFliers() {
	if(document.getElementById("fliers").checked){
		document.getElementById('imageRegion1').style.display = "none";
		document.getElementById('imageRegion2').style.display = "block";		
	} else {
		document.getElementById('imageRegion1').style.display = "block";
		document.getElementById('imageRegion2').style.display = "none";
	}
}

function gnb4Plot() {
	chart1 = new Chart(document.getElementById("GNB4"), {
	  type: 'scatter',
	  data: {
	  	datasets: [{
	  		label: "Position of GNB 4",
		  	data: [{x:453, y:636},
				  {x:499, y:864},
				  {x:476, y:960},
				  {x:445, y:534},
				  {x:473, y:890},
				  {x:489, y:901}],
			  backgroundColor: 'rgb(77, 172, 219)'
			}]
		},
	  options: {
	      scales: {
	        x: {
	          type: 'linear',
	          position: 'bottom'
	        }
	      }
	    }
	});
}

function gnb6Plot() {
	chart2 = new Chart(document.getElementById("GNB6"), {
	  type: 'scatter',
	  data: {
	  	datasets: [{
	  		label: "Position of GNB 6",
		  	data: [
			  	{x:973,	y:135},
			  	{x:213,	y:275},
			  	{x:577,	y:511},
			  	{x:490,	y:628},
			  	{x:488,	y:504},
			  	{x:26,	y:882},
			  	{x:210,	y:203},
			  	{x:560,	y:486},
			  	{x:789,	y:724},
			  	{x:65,	y:867},
			  	{x:71,	y:898},
			  	{x:57,	y:733},
			  	{x:560,	y:486},
			  	{x:26,	y:2},
			  	{x:113,	y:903},
			  	{x:24,	y:926},
			  	{x:842,	y:756},
			  	{x:376,	y:312},
			  	{x:507,	y:615},
			  	{x:317,	y:539},
			  	{x:332,	y:548}
				],
			  backgroundColor: 'rgb(77, 172, 219)'
			}]
		},
	  options: {
	      scales: {
	        x: {
	          type: 'linear',
	          position: 'bottom'
	        }
	      }
	    }
	});
}

// makeSliders();
showPlots();
