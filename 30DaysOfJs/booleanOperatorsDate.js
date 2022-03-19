/*
!Booleans
Karşılaştırma işlemlerinde kullanılır
True yada false değer döndürür
koşullarda kullanılır

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

!Operators(Operatörler)

/Arithmetic Operators (Atama operatörleri)

Addition(+): a + b       //Toplama işlemi yapar
Subtraction(-): a - b    //Çıkarma işlemi yapar
Multiplication(*): a * b //Çarpma İşlemi yapar
Division(/): a / b       //Bölme işlemi yapar 
Modulus(%): a % b        //Mod alma işlemi yapar   
Exponential(**): a ** b  //Üs alma işlemi yapar


/Assigment Operators (Atama operatörleri)

x+=y // x=x+y // Bu operatöre eşittir.
x-=y // x=x-y // Bu operatöre eşittir.
x*=y // x=X*Y // Bu operatöre eşittir.
x/=y // x=X/Y // Bu operatöre eşittir.
x&=y // x=X%Y // Bu operatöre eşittir.
x**=y // x=X**Y//Bu operatöre eşittir.

/Comparasion operators (Karşılaştırma Operatörleri)

==  // x==y  // iki değerin aynı mı değil mi
=== // x===y // üç eşittir hem değere hem de veri türüne bakarak eşitler.
/!= // x!=y  // eşit değilse
/!== // x!==y // x y'ye eşit ya da denk değil mi
>    // x>y   // x y'den büyüktür.
<    // x<y   // x y'den küçüktür.
>=   // x>=y  // x y'den büyük eşittir.
<=   // x<=y  // x y'den küçük eşittir.


console.log('mango'.length == 'avocado'.length)  //  false değer döner
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

!Logical Operators(Mantıksal operatörler)

&& ampersand // ve yerine geçer 
|| pipe      // ya da yerine geçer bu işaretir "Alt Gr + -" tuşları ile yapabilirsiniz.
/! negatation // değilse yerine geçer 

&& (ve) operatörü örnekler
iki işlemde doğru olmalı

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

|| (ya da) operatörü örnekler
iki işlemden biri doğru olursa yeterli

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

/! değilse(olumsuzluk) operatörü örnekler
olan bir şeyi tersine çeviririz

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true

!Increment Operators (Artırma operatörü)
değişkende olan bir değerin değerini artırmak için kullanılır.
!önceden artırmalıda kullanılır
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

!sonradan artırmalıda kullanılır.
let count = 0
console.log(count++)        // 0
console.log(count)          // 1

!Decrement Operators (Azaltma operatörü)
değişkende olan bir değerin değerini azaltmak için kullanılır.
!önceden azaltmalı olarakta kullanılır
let count = 0
console.log(--count)        // -1
console.log(count)          // -1

!sonradan azaltmalı olarakta kullanılır.
let count = 0
console.log(count++)        // 0
console.log(count)          // -1

!Ternany operators(üçlü operatör)
koşul yazmanızı sağlar
let isRaining = true
isRaining
  ? console.log('You need a rain coat.') // true ise burası çalışır.
  : console.log('No need for a rain coat.') //false ise burası çalışıyor
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

You need a rain coat.
No need for a rain coat.

*/




/*
!Window Methods(Pencere metodları)
sayfaya uyarı kutusu çıkarır.
alert("hello")
alert('Welcome to 30DaysOfJavaScript')

!prompt() methodu 
sayfaya bir girdisi olan uyarı mesajı gelir

!confirm() methodu
tanımladığınız bir mesajla onay kutusu olarak kullanılır. true ya da false döndürür.

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

*/



/*
!Date Object (Tarih objesi)
getFullYear()(yyyy) // yıl kısmını getirir
getMonth() (0-11) // ay kısmını getirir 0 ocak ayını verir 1 şubat ayını verir
getDate() (1-31)  // gün kısmını getirir.
getHours() (0-23) // saat kısmını getirir.
getMinutes() (0-59)// dakika kısmını getirir.
getSeconds() (0-59) // saniye kısmını getirir.
getMilliseconds()(0-999)// milisaniye kısmını verir.
getTime()(Ocak 1,1970)// o tarihten itibaren saniye cinsinden verir.
getDay() (0-6)// haftanın günlerini verir. pazar günleri 0 ı pazartesi 1i verir

!Örnekler

const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

let a = now.getMonth() + 1
let b = now.getTime()
console.log(b)

const now = new Date()
console.log(now.getDay()) // 
pazar 0 pazartesi 1 cumartesi 6
haftanın günleri numaraları

const now = new Date()
const year = now.getFullYear() // yıl geriye döndürür.
const month = now.getMonth() + 1 // ayları tam olarak geri döndürür.
const date = now.getDate() //günleri geri döndürür
const hours = now.getHours() // saati geri döndürür.
const minutes = now.getMinutes() // dakikayı geri döndürür.

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

19/3/2022 23:28

*/