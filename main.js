x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech Has been Recognised"+content;
}
if (content == circle) {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    document.getElementById("status").innerHTML = "Started Drawing Circle";
    draw_circle = "set";
}
if (content == rect) {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    document.getElementById("status").innerHTML = "Started Drawing Rectangle";
    draw_rect = "set";
}

function draw() {
    if (draw_circle == "set") {
        r = Math.floor(Math.random() * 150);
        circle(x, y, r);
        document.getElementById("status").innerHTML = "Circle Is Drawn";
    draw_circle = "";

    }
    if (draw_rect == "set") {
        rect(x, y, 100, 50);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn";
    draw_rect = "";

    }
}

function setup() {
    canvas = createCanvas(900, 600);

}