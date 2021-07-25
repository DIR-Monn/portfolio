//各画像の読み込み
var images = [
    'url(./img/JAN.jpeg)',
    'url(./img/FEB.jpeg)',
    'url(./img/MAR.jpeg)',
    'url(./img/APR.jpeg)',
    'url(./img/MAY.jpeg)',
    'url(./img/JUN.jpeg)',
    'url(./img/JUL.jpeg)',
    'url(./img/AUG.jpeg)',
    'url(./img/SEP.jpeg)',
    'url(./img/OCT.jpeg)',
    'url(./img/NOV.jpeg)',
    'url(./img/DEC.jpeg)',
];

//トップ画面に配置する画像の設定
document.getElementById('top').style.backgroundImage = images[0];

//省略のための宣言
var target = document.getElementById('top');
var right = document.getElementById('sc-to-right');
var left = document.getElementById('sc-to-left');

var count = 0; //画像番号（初期値0）

//画像変更の際に呼び出す関数
function change(){
    target.style.backgroundImage = images[count];
}

//画像番号を1増やす関数
function goNext(){
    if(count == 11){
        count = 0;
    }else{
        count = count + 0.5;
    }
    change();
}

//画像番号を1減らす関数
function goBack(){
    if(count == 0){
        count = 11;
    }else{
        count = count - 0.5;
    }
    change()
}

right.addEventListener('click', goNext); //右矢印をクリックしたら画像が1つ先のものが表示されるようになる
left.addEventListener('click', goBack); //左矢印をクリックしたら画像が1つ前のものが表示されるようになる

setInterval(goNext, 5000); //タイマー設定