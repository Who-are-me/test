$(document).ready(function(){
	//при натисканні на любу кнопку, що має клас .btn
	$(".btn").click(function() {
		//відкрити модальне вікно з id="myModal"
		$("#myModal").modal('show');
	});
});