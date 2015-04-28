$(function() {
    startCounterForLowValues();
    startCounterForHighValues();
    initElevator();
});

function startCounterForLowValues() {
    $("span.count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).data('timeout', 100);
        $(this).html('0');
        count($(this));
    });
}

function startCounterForHighValues () {
    $("span.count-fast").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).data('timeout', 5);
        $(this).html('0');
        count($(this), 10);
    });
}

function count($counter) {
    var current = parseInt($counter.html(), 10);
    $counter.html(++current);
    if(current !== $counter.data('count')) {
        setTimeout(function() { count($counter); }, $counter.data('timeout'));
    }
}

function initElevator() {
    var elementButton = document.querySelector('.elevator');
    var elevator = new Elevator({
        element: elementButton,
        mainAudio: 'sounds/music.mp3', // Music from http://www.bensound.com/
        endAudio:  'sounds/ding.mp3' // Music from http://www.bensound.com/
    });
}
