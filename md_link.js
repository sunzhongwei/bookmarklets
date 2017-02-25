javascript:(function(){
	var title = document.getElementsByTagName("title")[0].innerHTML;
	var url = window.location.href;
	alert('[' + title + '](' + url + ')');
})();
