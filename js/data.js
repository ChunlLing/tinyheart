// JavaScript Document

var dataObj = function () {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
};

dataObj.prototype.reset = function () {
    this.fruitNum = 0;
    this.double = 1;
};

dataObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;
    
    ctx1.save();
    
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = 'white';
    ctx1.fillStyle = 'white';
    ctx1.fillText('SCORE:' + this.score, w * 0.5, h - 50);
    
    if (this.gameOver) {
        this.alpha += deltaTime * 0.0005;
        if (this.alpha > 1) {
            this.alpha = 1;
        }
        ctx1.fillStyle = 'rgba(255, 255, 255, ' + this.alpha + ')'
        ctx1.fillText('GAMEOVER', w * 0.5, h * 0.5 - 20);
        ctx1.beginPath();                                   //
        ctx1.rect(w * 0.5 - 65, h * 0.5 - 10, 130, 40);     //
        ctx1.closePath();                                   //
        ctx1.strokeStyle = 'white';                         //
        ctx1.stroke();                                      //
        ctx1.fillText('REPLAY', w * 0.5, h * 0.5 + 20);     //
        canvas1.addEventListener('click', OnClick, false);  //
    }
    
    ctx1.restore();
};

dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;
};

function OnClick(e) {
    var p = getEventPosition(e);
    if (ctx1.isPointInPath(p.x, p.y)) {
        data.gameOver = false;
    }
}

function getEventPosition(e) {
    var x, y;
    if (e.offSetX || e.layerX) {
        x = e.offSetX == undefined ? e.layerX : e.offSetX;
        y = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
    return {
        x : x,
        y : y
    };
}