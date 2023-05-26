console.log("JS dosyası bağlandı.");

var deneme = 5;
varDeneme = 6;

let myVar = 5;

const myVar1 = 6;

// Aritmetiksel Operatörler
// +,-,*,/,%

const num1 = 10;
const num2 = 69;

const toplam = num1 + num2;

console.log(toplam);

const msg1 = "Hello";
const msg2 = "World!";

const mesaj = msg1 + msg2;
console.log(mesaj);

const firstName = "SONER";
const lastName = "OZCIFTCI";
console.log(firstName, lastName);
const fullName = firstName + " " + lastName;
console.log(fullName);

// `merhaba` `${değişken} ${değişken2}`;

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

const num3 = "6";
const num4 = "7";
console.log(num3 + num4);
console.log(num3 + 7);

console.log(7 + num3);
console.log(typeof (7 + num3)); // string

const x = 55;
const y = 44;

console.log(x - y);

const myNum = "1";
console.log(x - myNum);

const yourNum = "one";
console.log(x - yourNum);

console.log(x - "a");

let carp1 = 7;
let carp2 = 9;
console.log(carp1 * carp2);

console.log("a" * "b");
console.log("a" * 3);

console.log("5" * "9");
console.log(typeof ("5" * "9"));

// ! Operator

const böl1 = 81;
const böl2 = 9;

console.log(böl1 / böl2);

console.log(böl1 / "9");

console.log(böl1 / "dokuz");

console.log(böl2 / 0);
console.log(-16 / 0);
console.log(0 / 5);
console.log(0 / -5);

console.log(57 / 5);

// % (Mod alma) operatörü (Bölmedeki kalan sayıyı bulur)

const mod1 = 57;
const mod2 = 9;
console.log(mod1 % mod2);
console.log(22 % 7);

const benimSayim = 967;

const birlerBas = benimSayim % 10;
console.log(birlerBas);

const onlarBas = (benimSayim % 100) / 10;
console.log(onlarBas);

const yüzlerBas = benimSayim / 100;
console.log(yüzlerBas);

// Hazır fonksiyonlar !!
// Math.floor(); *Her zaman en yakin alt tam sayiya yuvarlar.
// Math.ceil(); *Her zaman en yakin ust tam saayıya yuvarlar.
// Math.trunc(); *Sayinin tam kısmını alır.
// Math.round(); *En yakın tam sayıya yuvarlar.
// Math.random(); 0 ve 1 arasında rastgele sayı uretir.

console.log(
  `YüzlerBas: ${Math.trunc(yüzlerBas)},
OnlarBas: ${Math.trunc(onlarBas)}, birlerbas : ${birlerBas}`
);

const hazirSayi = 56.788888;

console.log(`hazirSayi of Circle: ${hazirSayi.toFixed(3)} `); // 56.789
console.log(`hazirSayi of Circle: ${Math.floor(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.ceil(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.trunc(hazirSayi)} `);
console.log(`hazirSayi of Circle: ${Math.round(hazirSayi)} `);

const randomNum = Math.random();
console.log(randomNum);

const randomNum2 = Math.random() * 10;
console.log(randomNum2);
console.log(Math.round(Math.random() * 10));

//  (üs alma) operatörü

const üs1 = 2;
const üs2 = 3;
console.log(üs1 ** üs2);

const pi = 3.14;
const yariCap = 9;

const alan = pi * yariCap ** 2;
console.log(alan);

// //! 🔥🔥🔥              Artırma ve Eksiltme Operatörleri

// //? ++ ve -- operatörleri 1 artırır veya 1 eksiltir

let number1 = 6;
let artır = 6;
let artırNew = artır++;
console.log(artırNew);
console.log(artır);

let newSayi = ++number1;

console.log(newSayi);
console.log(--newSayi);
console.log(newSayi--);

// Atama operatörleri

let nums1 = 14;
let nums2 = 17;
// Ekle ve sonucu ata +=
nums2 = nums2 + nums1;
console.log(nums2);

nums2 += nums1;
console.log(nums2);

// ! -= Çıkar ve Sonucu Ata
let num14 = 6;
let num15 = 3;

// num14 = num14 - num15;
num14 -= num15;
console.log(num14);

//! *= Çarp ve Sonucu Ata
// num14 = num14 * num15;
num14 *= num15;
console.log(num14); //18
//! /= Böl ve Sonucu Ata
// num14 = num14 / num15;
// num14 /= num15;
// console.log(num14);
//! /= Bölümden Kalanı Bul ve Ata
// num14 = num14 % num15;
// num14 %= num15;
// console.log(num14);

//! **= Üs Al ve Sonucu Ata
// num14 = num14 ** num15;
// num14 **= num15;
// console.log(num14);

// //! 🔥🔥🔥              Karşılaştırma Operatörleri

// const num16 = 27;

// console.log(num16 == 27);
// console.log(num16 == "27");

// console.log(num16 === 27);
// console.log(num16 === "27");

// const user1 = prompt("Lütfen bir sayı giriniz:");
// const user2 = prompt("Lütfen bir sayı giriniz");
// console.log(user1);
// console.log(user2);
// const isSame = user1 == user2;
// console.log(isSame);

// console.log(true == 1);
// console.log(null == undefined);

console.log(true === 1); // false
console.log(null === undefined); // false

console.log(15 != "15");
console.log(15 !== "15");

// //? >=, <= (Büyük veya eşit mi?, Küçük veya eşit mi?)

console.log(15 >= 15); //true
console.log(15 <= 15); // true
console.log(15 >= 16); // false
console.log(15 >== "15");// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
console.log(15 >= "15"); // true
console.log("14" <= "15"); // true
