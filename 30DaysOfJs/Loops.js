//*Loops
//!for loop(for döngüsü)
//Tekrarlayan işler için görevler için kullanılır.
//Temel olarak bu yaygın olarak kullanılır.
// For loop şablonu

//for ( başlatma, koşul-şart, artış/azalış){
//buraya kod yazıyoruz.
//}
//Örnek 1
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

// 0 1 2 3 4 5
//Örnek 2
for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// 5 4 3 2 1 0

//0-100 arasındaki sayıları yazzdıran bir örnek yapalım.
for (let a = 0; a <= 100; a++) {
    console.log(a)

}
//77-22 arası sayıları yazdıran bi döngü yazalım.
for (let b = 77; b >= 22; b--) {
    console.log("b", b)

}
//Örnek 3

for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}


//array kullanarak bi for döngüsünü kullanalım
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let c = 0; c < countries.length; c++) {
    newArr.push(countries[c].toUpperCase())
    console.log(newArr)
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

//array ile kendimiz örnek yapalım
const names = ['Haşim', 'Anıl', 'Enes', 'Ömür']

for (let d = 0; d < names.length; d++) {
    console.log("NAMES", names[d])
} //Haşim,Anıl,Enes,Ömür

//*Adding all elements in array(dizi içerisindeki elemanları toplama ekleme)
//Array içindeki sayıların toplamını bulan bir döngü yazalım
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let e = 0; e < numbers.length; e++) {
    sum = sum + numbers[e] // kısaca bu şekilde , sum += numbers[i]

}
console.log("Array içindeki sayıların toplamı:", sum) // 15

//*Creating a new array (mevcut array dışında yeni bir array oluşturalım)
//verilen ilk arrayin içindeki elemanları 2 katına çıkararak yeni bir array içinde tutan bir for döngüsü oluşturalım.
const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
let sum1 = 0
for (let i = 0; i < numbers1.length; i++) {
    newArr1.push(numbers1[i] ** 2)

}

console.log(newArr1) // [1, 4, 9, 16, 25]


//!while loop (iken döngüsü)
//Bir şey isteğimiz koşulda ise çalıştır şeklinde çalışan bir döngü

let f = 0
while (f <= 5) { //i 5e küçük ve eşitken i yi yazdır.(while true olduğu sürece çalışır.)
    console.log(f)
    f++
}

// 0 1 2 3 4 5
//İsimleri yazdırdığımız bir döngü yazalım.
let g = 0
while (g < names.length) {
    console.log('İsim:', names[g])
    g++
}

//!do while 
//(do while) ile (while) farkı do while da true şartı olmadan çalıştır. Koşul true ise bir sefer daha çalıştırıyor.
//do while da mantık önce bunu yap sonra bak

do {
    console.log('İsim', names[g])
    g++
} while (g < names.length) {

}

//! for of loop 
//diziler için kullanırız
//dizideki elemanın indexi ile ilgilenmiyorsak çok kullanışlıdır.

for (let name of names) {
    console.log('Namesi buraya yazdırır:', name)
}

const numbers2 = [1, 2, 3, 4, 5]
    //num içerisine numbers arrayini döngü ile çekiyoruz yani dahil edip alıyoruz.
for (const num of numbers) {
    console.log(num)
}

// 1 2 3 4 5
//farklı arraydan elemanları çekerek yeni bir dizi içerisine çekerek onların baş harflerini yazdırdığımız bir döngü yazalım.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech[0]) // dizideki elemanların sadece ilk harflerini yazdıralım 
        //  H C J R N M
}

//!break deyimi
//bir döngünün sonsuz döngüye girmesini engellemek ya da döngünün durması istiyorsak bu deyimi kullanırız.
// bir döngü yazarak onu istediğimniz yerde durduran bir örnek yapalım.
for (let k = 0; k <= 5; k++) {
    if (k == 3) {
        break
    }
    console.log(k)
}

// 0 1 2

//!continue deyimi 
// döngü içerisndeki elemanı durdurmamak atlatmak/esgeçmek için kullanırız.Şart koştuğumuz elemanı yazmaz ve döngüye devam eder.
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}

// 0 1 2 4 5

//*Exercises

//Örnek 1
//şöyle bir görüntü elde edelim
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for (let z = 0; z <= 10; z++) {
    console.log(`${z} * ${z} = ${z * z}`)
}