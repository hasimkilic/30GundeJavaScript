//*Events Bubbling (içten dışa olay akışı)
//içten dışa doğru bir akış şeması 
// form tuşuna basıldığı zaman sırayla şu yazar form, nav ,container
//Bu olayı engellemek için stopPropagation() komutunu kullanırız.

const form = document.querySelector('.form')
const nav = document.querySelector('.nav')
const container = document.querySelector('.container')
const select = document.querySelector('#select')

// form.addEventListener('click', function(e) {
//     console.log('form');
//     e.stopPropagation();
// });
// nav.addEventListener('click', function(e) {
//     console.log('nav');
//     e.stopPropagation();
// });
// container.addEventListener('click', function(e) {
//     console.log('container');
//     e.stopPropagation();// Hangi eleman üzerine tıklarsak onu yazdırır. üst elementleri yazdırmamayı sağlar.
// });

//*Event Capturing (Dıştan içe bşr olay akışı)
//Dıştan içeri doğru gelen bir akış şeması izler
//addEventListener() içersine 3. bir değer olarak true yani ('komut','function',true yada false) verirsek bu şemayı tersine çevirmiş oluruz.
//form tuşuna basarak tersine çevirdiğimiz zaman yukarıdan aşağıya doğru bir akış olur sırayla şu yazar container,nav,form
//select tuşuna basarsak şu sırayla olur container,nav,form,select
// true değerini verirsek (en dış etiketten tıklanılan etikete doğru sıralanır.)

form.addEventListener('click', function(e) {
    console.log('form');

}, true);
nav.addEventListener('click', function(e) {
    console.log('nav');

}, true);
container.addEventListener('click', function(e) {
    console.log('container');

}, true);
select.addEventListener('click', function(e) {
    console.log('select');

}, true);


//*Exercises

//Bu örnekte forEach döngüsü kurarak istediğimiz tüm sınıfların click
//olduğunda etiketlerini göstermesini sağlayan bir döngü yazalım.

//belli bir kapsam içerinde bir elemana ulaşmak istiyorsak target 
//komutunu kullanarak istediğimziz elemana ulaşarak işlemlerimizi yapabiliriz.

const deleteItems = document.querySelectorAll('.hello1')

deleteItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        console.log(e.target.parentElement.parentElement.remove());
        //bu şekilde targettan eleman eleman aşağı inerek click
        //olduğu an hepsini silen bir fonksiyon yazdık.

        e.preventDefault();
    })

});