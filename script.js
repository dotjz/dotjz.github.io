$(document).ready(function(){
	$('input.search').on('click', function(){
		$('input.search').animate({width: "300px"},500);
	});
    var	text = $('input.search').val();
	$("div:contains("+ text +")").html(function(_, o) {
    return o.replace(new RegExp(text, "i"), "<span class='search'>" + text + "</span>")
}
});