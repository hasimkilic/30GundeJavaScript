let models = [{
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
    },
    {
        name: 'Honda',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
    },
    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
    },
    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
    },
    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance',
    },

]


let index = 0;
let slayCount = models.length;
let settings = {
    duration: '2000',
    random: false
}
let interval;
init(settings);

document.querySelector('.bi-arrow-left').addEventListener('click', function() {

    index--;
    showSlide(index);
    console.log()

});
document.querySelector('.bi-arrow-right').addEventListener('click', function() {

    index++;
    showSlide(index);
    console.log()
});
document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        init(settings);
    })
});



function init(settings) {
    //setTimeout //belirttiğin süre sonra işlem durur.
    //setInterval // belirttiğin süre boyunca sonsuza kadar sürekli çalışır.
    let prev;

    interval = setInterval(function() {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slayCount);
            } while (index == prev) {
                prev = index;
            }
        } else {
            //artan index
            if (slayCount == index + 1) {
                index = -1;

            }
        }
        showSlide(index);
        index++;


    }, settings.duration)

}

function showSlide(i) {

    index = i;
    if (i < 0) {
        index = slayCount - 1;
    }
    if (i >= slayCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name
    document.querySelector('.card-img-top').setAttribute('src', models[index].image)
    document.querySelector('.card-link').setAttribute('href', models[index].link)
}