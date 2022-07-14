var x
var y

function setup() {
    createCanvas(500, 500)
    x = 250
    y = 250
    background(200)

}
function draw() {
    point(x, y)
    stroke(255)
    strokeWeight(10)
    var r = floor(random(4))


    stroke(floor(random(255)), floor(random(255)), floor(random(255)))
    switch (r) {
        case 0:
            x += 10
            break;
        case 1:
            x -= 10
            break;
        case 2:
            y += 10
            break;
        case 3:
            y -= 10
            break;
        default:
            break;

    }
    if (x + 10 > width || x + 10 < 0 || y + 10 > height || y + 10 < 0) {
        // x=floor(random(width))
        // y=floor(random(height))
        x = 250
        y = 250
    }
}