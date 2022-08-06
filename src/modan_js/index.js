/**
 * const letでの変数宣言
 */
const val1 = "var";
// val1 = "const"

/**
 * テンプレート文字列
 */
/* const name ="kaiji";
const age = "25";
console.log(`わたしの名前は${name}です。年齢は${age}です。`); */

/**
 * アロー関数
 */
// 従来の関数宣言
function func1(message) {
  return message;
}
console.log(func1("test message"));

const func2 = (string) => {
  return string;
};
console.log(func2("yeah!!"));

const sum = (num1, num2) => num1 + num2;
console.log(sum(1, 2));

/**
 * 分割代入
 */
/* const myProfile = {
  name: 'かいじ',
  age: 25
};

const message1 = `なまえは${myProfile.name}年齢は${myProfile.age}`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `なまえは${name}年齢は${age}`;
console.log(message2); */

const myProfile = ["かいじ", 25];

const [name, age] = myProfile;
const message3 = `名前は${name}年齢は${age}`;

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => {
  console.log(`こんにちは${name}さん`);
};
sayHello();

/**
 * スプレッド構文
 */
// 展開
/* const arr1 = [1,2];
console.log(arr1);
console.log(...arr1)

const sumArr = (num1, num2) => console.log(num1 + num2);
sumArr(...arr1); */

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のこぴー結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * mapやfilterをつかった配列の処理
 */
const nameArr = ["たなか", "やまだ", "かいじ"];

/* 新しいはいれつを作る例
  const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2); */

nameArr.map((name) => console.log(name));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => num % 2 === 1);
console.log(newNumArr);

nameArr.map((name, index) => console.log(`${index}: ${name}`));
