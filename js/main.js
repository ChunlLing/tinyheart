// JavaScript Document

var can1;           // 获取canvas1
var can2;           // 获取canvas2

var ctx1;           // 定义画布1容器
var ctx2;           // 定义画布2容器

var canWidth;       // 定义画布的宽度
var canHeight;      // 定义画布的高度

var lastTime;
var deltaTime;      // 时间增量

var ane;            // 定义海藻数组对象

var fruit;          // 定义果实数组对象

var mom;            // 定义大鱼
var baby;           // 定义小鱼

var mx;
var my;

var babyTail = [];
var babyBody = [];
var babyEye = [];

var momTail = [];
var momBodyBlue = [];
var momBodyOrange = [];
var momEye = [];

var bgPic = new Image();

var data;

var wave;

var halo;

var dust;
var dustPic = [];

document.body.onload = game;

function game () {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init () {
    // 获得canvas context
    can1 = document.getElementById('canvas1');
    can2 = document.getElementById('canvas2');
    ctx1 = can1.getContext('2d');
    ctx2 = can2.getContext('2d');
    ctx1.font = '30px Verdana';
    ctx1.textAlign = 'center';
    
    can1.addEventListener('mousemove', onMouseMove, false);
    
    bgPic.src = './src/background.jpg';
    
    canWidth = can1.width;
    canHeight = can1.height;
    
    ane = new aneObj();
    ane.init();
    
    fruit = new fruitObj();
    fruit.init();
    
    mom = new momObj();
    mom.init();
    
    baby = new babyObj();
    baby.init();
    
    mx = canWidth * 0.5;
    my = canHeight * 0.5;
    
    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = './src/babyTail' + i + '.png';
    }
    
    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = './src/babyFade' + i + '.png';
    }
    
    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = './src/babyEye' + i + '.png';
    }
    
    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = './src/bigTail' + i + '.png';
    }
    
    for (var i = 0; i < 8; i++) {
        momBodyBlue[i] = new Image();
        momBodyOrange[i] = new Image();
        momBodyBlue[i].src = './src/bigSwimBlue' + i + '.png';
        momBodyOrange[i].src = './src/bigSwim' + i + '.png';
    }
    
    for (var i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = './src/bigEye' + i + '.png';
    }
    
    data = new dataObj();
    
    wave = new waveObj();
    wave.init();
    
    halo = new haloObj();
    halo.init();
    
    for (var i = 0; i < 7; i++) {
        dustPic[i] = new Image();
        dustPic[i].src = './src/dust' + i + '.png';
    }
    
    dust = new dustObj();
    dust.init();
    
}

function gameloop () {
    window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 50) {
        deltaTime = 50;
    }
    
    
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    momFruitsCollision();
    momBabyCollision();
    baby.draw();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
    
}

function onMouseMove(e) {
    if (!data.gameOver) {
        if (e.offSetX || e.layerX) {
            mx = e.offSetX == undefined ? e.layerX : e.offSetX;
            my = e.offSetY == undefined ? e.layerY : e.offSetY;
        }
    }
}











