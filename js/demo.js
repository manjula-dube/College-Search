var snapper = new Snap({
       element: document.getElementById('content')
});
var addEvent = function addEvent(element, eventName, func) {
	if (element.addEventListener) {
    	return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};

snapper.on('close', function(){
  document.getElementById('open-right').className = 'close';

});

snapper.on('open', function(){
  document.getElementById('open-right').className = 'open';
});
addEvent(document.getElementById('open-right'), 'click', function(){
	if(document.getElementById('open-right').className.indexOf('close') == -1) {
		snapper.open('right');
	} else {
	  document.getElementById('open-right').className = document.getElementById('open-right').className.replace('close','');
	}
});

addEvent(document.getElementById('done'), 'click', function(){
	snapper.close();

})