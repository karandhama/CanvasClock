var centerX = 250;
var centerY = 150;

var previousX,previousY;

function DrawOuterCircle(canvas,context) {
    context.beginPath();
    context.arc(centerX,centerY,140,0,2*Math.PI);
    context.lineWidth = 2;
    context.strokeStyle = "#009900";
    context.stroke();
}

function DrawInnerCircle(canvas,context) {
    context.beginPath();
    context.arc(centerX,centerY,135,0,2*Math.PI);
    context.stroke();
}

function DrawCenterCircle(canvas,context) {
    context.beginPath();
    context.arc(centerX,centerY,1,0,2*Math.PI);
    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.stroke();
}

function DrawDigits(canvas,context,degree) {
    context.beginPath();
    context.moveTo(centerX + (Math.sin(degree*Math.PI/180) * 115), centerY - (Math.cos(degree*Math.PI/180) * 115));
    context.lineTo(centerX + (Math.sin(degree*Math.PI/180) * 130), centerY - (Math.cos(degree*Math.PI/180) * 130));
    context.strokeStyle = "#ff9900";
    context.stroke();
}

function DrawDigits1(canvas,context,degree) {
    context.beginPath();
    context.moveTo(centerX + (Math.sin(degree*Math.PI/180) * 125), centerY - (Math.cos(degree*Math.PI/180) * 125));
    context.lineTo(centerX + (Math.sin(degree*Math.PI/180) * 130), centerY - (Math.cos(degree*Math.PI/180) * 130));
    context.strokeStyle = "#ff9900";
    context.stroke();
}

function DrawSecondHand(canvas,context,degree) {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.moveTo(centerX - (Math.sin(degree*Math.PI/180) * 20), centerY + (Math.cos(degree*Math.PI/180) * 20));
    context.lineTo(centerX + (Math.sin(degree*Math.PI/180) * 110), centerY - (Math.cos(degree*Math.PI/180) * 110));
    context.strokeStyle = "#ff9900";
    context.stroke();
}

function DrawMinuteHand(canvas,context,degree) {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.moveTo(centerX - (Math.sin(degree*Math.PI/180) * 20), centerY + (Math.cos(degree*Math.PI/180) * 20));
    context.lineTo(centerX + (Math.sin(degree*Math.PI/180) * 110), centerY - (Math.cos(degree*Math.PI/180) * 110));
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.stroke();
}

function DrawHourHand(canvas,context,degree) {
    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.moveTo(centerX - (Math.sin(degree*Math.PI/180) * 20), centerY + (Math.cos(degree*Math.PI/180) * 20));
    context.lineTo(centerX + (Math.sin(degree*Math.PI/180) * 80), centerY - (Math.cos(degree*Math.PI/180) * 80));
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.stroke();
}