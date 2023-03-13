// Define the segments of the wheel
const segments = [
    "Prize 1",
    "Prize 2",
    "Prize 3",
    "Prize 4",
    "Prize 5",
    "Prize 6",
    "Prize 7",
    "Prize 8"
];

// Get the canvas and pointer elements
const canvas = document.getElementById("wheel-canvas");
const pointer = document.getElementById("pointer");

// Set up the canvas context
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 140;

// Draw the wheel segments
let angle = 0;
const segmentAngle = (2 * Math.PI) / segments.length;
for (let i = 0; i < segments.length; i++) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle, angle + segmentAngle);
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = i % 2 == 0 ? "#ffd700" : "#ff4500";
    ctx.fill();
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle + segmentAngle / 2);
    ctx.fillText(segments[i], radius / 2, 0);
    ctx.restore();
    angle += segmentAngle;
}

// Define the animation function
function spinWheel() {
    const minAngle = 1800;
    const maxAngle = 3600;
    const randomAngle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
    const spinDuration = 5000;
    const spinInterval = 20;
    const spinIncrement = (randomAngle / spinDuration) * spinInterval;
    let currentAngle = 0;
    let spinIntervalID = setInterval(() => {
        currentAngle += spinIncrement;
        if (currentAngle >= randomAngle) {
            clearInterval(spinIntervalID);
            const selectedSegment = Math.floor(((360 - pointerAngle) %