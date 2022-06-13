let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

// メイン部分
let alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}