// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


    /* ---------------------------------- Local Variables ---------------------------------- */
    var urlPage = "http://10.0.2.2:3002/mobile.html";
    //var urlPage = "http://localhost:3002/mobile.html";
    
    //window.open(urlPage,'_self');

//-------------------------------- Event Registration -------------------------------- */
    $('#start').on('click', function() {
       	
       	var ref = window.open(urlPage,'_self');
       	$('#Load').html(window.show());
        ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
       	ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
       	ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		    ref.addEventListener('exit', function(event) { alert(event.type); });  

    });

    /* ---------------------------------- Local Functions ---------------------------------- */

}());