var t = Date.parse("December 31 2016 23:59:59") - Date.parse(new Date());
var done = false

var clock = $('#myclock').FlipClock(t/1000, {
    clockFace: 'DailyCounter',
    countdown:true,

    stop: function() {
        if(!done){
            done = true
            alert("Happy New Year!")
        }
	}
});
