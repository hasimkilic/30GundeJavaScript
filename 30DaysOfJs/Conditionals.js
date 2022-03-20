/*
!Conditionals(Koşullar)
!İf (eğer koşulu )
/Bu şekilde kod bloğuna sahip olmalı
if (koşul){

}
/Hemen bir örnek verelim
/Yağmur yağmasını doğru yaptık eğer doğruysa console a basılan yorum çalışacak
let isRaining = true

if (isRaining) {

    console.log("Remember to take your rain coat.")
}

!İf else koşulu 
/Doğruysa bunu yazdır yanlışsa bunu yazdır şeklinde kullanılan kod bloğu

if (koşul) {
   koşul doğruysa bu blok çalışacak
} else {
   doğru değilse bu blok çalışacak
}


/Örnek verelim
let isRaining = true
if (isRaining) {
  console.log('Şemsiye kullanmalısın.')
} else {
  console.log('Şemsiye kullanmana gerek yok.')
}

/prompt yardımıyla örnek verelim

let result = prompt('2+5 kaç yapar?', '2+5')

if (result ==='7') {
    console.log("Tebrikler doğru cevap.")
} else {
    console.log("Yanlış cevap verdiniz.")
}

!İf else if else 
/Bu şekilde kod bloğuna sahip
if (KOŞUL) {
     / code
} else if (KOŞUL) {
   / code
}
 else if (KOŞUL) {
   / code
} else {
    /  code

}
/hemen örnek verelim
 
let number = 5

if (number === 4) {
    console.log("Numara 4 ise burası çalışır")
} else if (number > 5) {
    console.log("Numara 5 ten büyükse burası çalışır")
} else if (number >= 5) {
    console.log("Numara 5'e eşit veya büyükse burası çalışır.")
} else {
    console.log("Number eşit değilse burası çalışır.")
}
/2.örnek

let weather = 'güneşli'
if (weather === 'yağmurlu') {
  console.log('şemsiye kullanmalısın')
} else if (weather === 'bulutlu') {
  console.log('üzerine bir ceket giymelisin.')
} else if (weather === 'güneşli') {
  console.log('giyinmekte serbestsin')
} else {
  console.log('şemsiyeye gerek yok.')
}

!Switch if kullanımının alternatifi
/Bu şekilde kod bloğuna sahip
/Case değerine göre hangi blok çalışacağını bize veriyor.
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
/Örnek yapalım
let weather = 'yagmurlu'
switch (weather) {
    case 'yagmurlu':
        console.log('Hava yağmurlu')
        break
    case 'Bulutlu':
        console.log('Üzerine bir ceket alsan iyi olur hava bulutlu.')
        break
    case 'gunesli':
        console.log('serbestsin hava güneşli')
        break
    default:
        console.log(' Hava bulutlu değil yağmurluğa yada cekete gerek yok')
}

/Kullanıcıdan gün bilgisini alarak kullanıcıyı bilgilendirerek detaylı bir kullanım ile Örnek yapalım

let dayUserInput = prompt('Bugün günlerden hangi gün?')
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'pazartesi':
        console.log("Bugün günlerden Pazartesi")
        break;
    case 'salı':
        console.log("Bugün günlerden Salı")
        break;
    case 'çarşamba':
        console.log("Bugün günlerden Çarşamba")
        break;
    case 'perşembe':
        console.log("Bugün günlerden Perşembe")
        break;
    case 'cuma':
        console.log("Bugün günlerden Cuma")
        break;
    case 'cumartesi':
        console.log("Bugün günlerden Cumartesi")
        break;
    case 'pazar':
        console.log("Bugün günlerden Pazar")
        break;
    default:
        console.log("Yanlış gün ismi girdiniz doğru yazmayı deneyiniz.")

}
/Kullanıcıdan sayı alarak durumlarına bakalım
let num = prompt('Sayı Giriniz');
switch (true) {
    case num > 0:
        console.log('Sayı pozitif');
        break;
    case num == 0:
        console.log('Sayı 0 ');
        break;
    case num < 0:
        console.log('Sayı negatif');
        break;
    default:
        console.log('Herhangi bir sayı girmediniz.');
}

!ternany operators
/örnek
let isRaining = true
isRaining
  ? console.log('You need a rain coat.') //Kod doğruysa bu blok çalışır.
  : console.log('No need for a rain coat.') // Kod false değer veriyorsa bu blok çalışır.

!Exercises
/Kullanıcıdan yaş bilgisini alarak ehliyet bilgisini sorgulayalım
let age = prompt("Kaç yaşındasınız?")
if (age < 18) {
    console.log(`Ehliyet alamazsınız ehliyet almanız için ${Math.abs(age-18)} yıl daha beklemelisiniz.`)

} else if (age >= 18, age < 30) {
    console.log(`Ehliyet alabilirsiniz.`)

} else if (age >= 30) {
    console.log("Hala ehliyetinizi almadınız mı?")
} else {
    console.log("Lütfen yaşınızı giriniz.")
}



*/