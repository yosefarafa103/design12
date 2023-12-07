// console.log(`object`)
const allSpans = document.querySelectorAll('.last-part .pagenations span');
const lists = document.querySelectorAll('.art-gallrey .gallery-sections nav ul li');
const images = document.querySelectorAll('img');
let currentImageElement = document.querySelector('.wrapper .land-center .img ');
let sliderTitleElement = document.querySelector('.wrapper .land-center .text h2')
let artGal = document.querySelectorAll('.art-gallrey .gallery-sections nav ul li')
let img = document.createElement('img');
const absract = artGal[1];
const lineArt = artGal[2];
const portrais = artGal[3];
console.log(absract)
const sliderImages = ['imgs/art-4178302_1920.png',
    'imgs/pexels-steve-johnson-1145720.png',
    'imgs/timon-klauser-3MAmj1ZKSZA-unsplash.png'];
img.src = sliderImages[0]
let imgsItems = document.querySelectorAll('.wrapper .land-center .img img')
console.log(imgsItems)
currentImageElement.appendChild(img)
const sliderTitles = ['Rediscovery of Arts', 'Rediscovery of Portrait', 'Rediscovery of Paiting Arts'];
let start = 0;
allSpans.forEach((e, index) => {
    e.addEventListener('click', () => {
        start = 0;
        removeClasses()
        e.classList.add('active')
        sliderTitleElement.textContent = sliderTitles[index]
        addActiveImage(index)
    })
})
lists.forEach(list => {
    list.addEventListener('click', () => {
        lists.forEach(e => {
            e.classList.remove('active')
        })
        list.classList.add('active')
        document.querySelectorAll('#categories div').forEach((e) => {
            e.classList.remove("active")
        })
    })
})
for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('loading', 'lazy')
}
let end = (imgsItems.length - 1)
console.log(imgsItems)
setInterval(() => {
    if (start < end) {
        start++
    }
    else {
        start = 0
    }
    removeClasses()
    allSpans[start].classList.add('active')
    sliderTitleElement.textContent = sliderTitles[start]
    addActiveImage(start)
}, 3000)
function removeClasses() {
    allSpans.forEach(e => {
        e.classList.remove('active')
    })
    imgsItems.forEach(image => {
        image.classList.remove('active')
    })
    sliderImages.forEach((img) => img.classList)
}
function addActiveImage(index) {
    imgsItems[index].classList.add('active')
}
absract.addEventListener('click', () => {
    artGal.forEach((e) => {
        e.classList.remove("active")
    })
    absract.classList.add('active')
    document.querySelectorAll('#categories div').forEach((e) => {
        e.classList.remove("active")
    })
    document.querySelector('#categories .abstract').classList.add('active')
})
function removeC(arr) {
    arr.forEach((e) => {
        e.classList.remove("active")
    })
}
artGal[0].addEventListener('click', function () {
    removeC(artGal)
    artGal[0].classList.add('active')
    document.querySelector('#categories .all').classList.add('active')
})
artGal[1].addEventListener('click', function () {
    removeC(artGal)
    artGal[1].classList.add('active')
    document.querySelector('#categories .abstract').classList.add('active')
})
artGal[2].addEventListener('click', function () {
    removeC(artGal)
    artGal[2].classList.add('active')
    document.querySelector('#categories .line').classList.add('active')
})
artGal[3].addEventListener('click', function () {
    removeC(artGal)
    artGal[3].classList.add('active')
    document.querySelector('#categories .portrait').classList.add('active')
})
artGal[4].addEventListener('click', function () {
    removeC(artGal)
    artGal[4].classList.add('active')
    document.querySelector('#categories .vintage').classList.add('active')
})
artGal[5].addEventListener('click', function () {
    removeC(artGal)
    artGal[5].classList.add('active')
    document.querySelector('#categories .water').classList.add('active')
})
artGal[6].addEventListener('click', function () {
    removeC(artGal)
    artGal[6].classList.add('active')
    document.querySelector('#categories .oil').classList.add('active')
})