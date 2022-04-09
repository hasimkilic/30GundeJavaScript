//*Error Handling
//! Try catch
//Hata yakalama işlemi

//!Referance error
//!TypeError
//!SyntaxError 
//!URIError

//!Error


try { //Hata olabilecek kısımları buraya yazarız
    console.log(myFunciton());
} catch (e) { //hata alındığı zaman ne yapılacağını bu kısımı yazarız.,
    console.log(e) //Hatanın ne olduğuna dair hepsi yazar
    console.log(e.message) // hatanın türünün mesajını alırız
    console.log(e.name); //name ile hatanın türünü alırız
    console.log(e instanceof ReferenceError) //true//Bu hata ismi Referance error mu diye sorarız true ya da false dğeri bize geri döner.
    console.log(e instanceof TypeError) //False
    console.log(typeof e) // tipine bakarız bu bir objemi diye
}
//!Örnek
let user = {
    name: 'Haşim Kılıç'
}

try {
    console.log(user.name)
        //console.log(user.email)//undefined
    if (!user.email) { //burada hata almak için kendimiz user.email boş ise şu mesajı yaz diye koşul yazdık.
        throw new Error('User has no email!')
    }

} catch (e) {
    console.log(e); //Error: User has no email!
    console.log(e.name) //Error
    console.log(typeof e) //Object
    console.log(e instanceof Error) //True
    console.log(e.message) //User has no email!
} finally { // catch bloğu çalışıp çalışmasada kesin olarak bu blok çalışır.
    console.log('Finally block') //Finally block
}
console.log('********************')

//!Uygulama

const btn = document.querySelector('#myBtn')

btn.addEventListener('click', (e) => {

    let name = document.getElementById('name')
    let age = document.getElementById('age')
    let errors = document.getElementById('errors')
    errors.innerHTML = ''; //hata almazsak eğer html sayfamızda bir şey görünmesin diye bunu yazdık.
    try {

        if (name.value.length === 0) {
            throw new Error('Name is required'); // eğer isim inputuna değer girilmemişse burası çalışır
        }
        if (name.value.length > 20) {
            throw new Error('name is too lang'); //eğer input değeri 20 den uzunsa burası çalışır
        }
        if (age.value.length === 0) {
            throw new Error('age is required'); //Eğer boş bir input varsa burası çalışır.
        }
        if (isNaN(age.value)) { //Eğer yaş inputuna sayı girilmemişse burası çalışır
            throw new Error('age not a number');
        }
        console.log('form is submitteed')
    } catch (err) {
        errors.innerHTML = err.message; //Aldığımız error mesajını yazdırmak için bunu kullandık.
    } finally {
        name.value = ''; //bu şekilde catch çalışmazsa boşluk olması için bunu yazdık.
        name.age = '';
    }

    e.preventDefault(); //sayfanın her seferinde güncellenmemesi için bu komutu yazdık.
});