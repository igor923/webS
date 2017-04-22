	

$(document).ready(function(){

	var resRates;
	var urlCur = "http://api.fixer.io/latest";
	$.ajax({url: urlCur}).then(function(res){
	resRates = res.rates;
	resRates['EUR']=1;
	
});


$('.calc').on("click",function(){
	var cur1 = $("#cur1 option:selected" ).text();	
	var cur2 = $("#cur2 option:selected" ).text();
   	var sum = $('#sum').val();
   	$("#cur1").on("change", function(){
   		cur1 = $(this).children("option:selected").val();
   	});
   	$("#cur2").on("change", function(){
   		cur2 = $(this).children("option:selected").val();
   	});
   	
   	var result = (resRates[cur2]/resRates[cur1])*sum;
   	$('#result').val(result);
});




});