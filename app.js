let hello = 'Hello World';
alert(hello);

//整数を代入
let int1 = 1

//負数を代入
let int2 = -10

//少数を代入
let float1 = 3.14

//文字列を代入
let str1 = 'javascriptを覚えよう'

alert('Hello' + 'World');

let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');