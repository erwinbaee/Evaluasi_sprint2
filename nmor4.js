for(var y = 1; y < 10; y++) {
    for(var x = 1; x < 10; x++)
    if( y = x || x + y == 10 || x && y == 5 || y && x == 5) {
        document.write(`1,3,5,7,,9,11,13,15,17`)
    } else {
        document.write(`16,14,12,10,9,6,4,2,0`)
    }
}
document.write("<br>")
