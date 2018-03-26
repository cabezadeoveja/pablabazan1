$( document ).ready(function(){
	//type effect
    $('span.text-change').typed({
        strings: ["ux & ui", "diseño", "<code>", "ilustración"], //array text
        typeSpeed: 60,
        backDelay: 600,
        callback: function () { $(this) }
    });

    });