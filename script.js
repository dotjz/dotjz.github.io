$(document).ready(function(){
	$('input.search').on('click', function(){
		$('input.search').animate({width: "300px"},500);
	});
	$('input.search').keyup(function(){
         var page = $('p.egp span.eg');
         var pageText = page.text().replace("<span class='search'>","").replace("</span>");
         var searchedText = $('input.search').val();
         var text = new RegExp("("+searchedText+")", "igm");    
         var newHtml = pageText.replace(text ,"<span class='search'>$1</span>");
         page.html(newHtml);
    });
});