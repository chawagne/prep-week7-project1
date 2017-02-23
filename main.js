/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/

$(document).ready(function() {
$("<h1>Trivia</h1>").appendTo("main");

var $xhr = $.getJSON('http://www.omdbapi.com/?t=transformers');
$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    console.log(data);
    $("<p>Did you know</p>").appendTo("main");
    $("<p>"+data.Title+" was released on "+data.Released+"</p>").appendTo("main");
});

$xhr.fail(function(err) {
    console.log(err);
});


//This works too, but doesn't have any of the nice failsure stuff and may not wait until done.  I'll need to look into it.
$.get("https://www.omdbapi.com/?t=Hackers", function(data) {
    console.log(data);
});




});
