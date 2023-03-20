const photoArray = [
    {
        name: 'blue',
        img: 'blue.png',
    },
    {
        name: 'green',
        img: 'green.png',
    },
    {
        name: 'orange',
        img: 'orange.png',
    },
    {
        name: 'purple',
        img: 'purple.png',
    },
    {
        name: 'red',
        img: 'red.png',
    },
    {
        name: 'yellow',
        img: 'yellow.png',
    },
    {
        name: 'blue',
        img: 'blue.png',
    },
    {
        name: 'green',
        img: 'green.png',
    },
    {
        name: 'orange',
        img: 'orange.png',
    },
    {
        name: 'purple',
        img: 'purple.png',
    },
    {
        name: 'red',
        img: 'red.png',
    },
    {
        name: 'yellow',
        img: 'yellow.png',
    },
    {
        name: 'blue',
        img: 'blue.png',
    },
    {
        name: 'green',
        img: 'green.png',
    },
    {
        name: 'orange',
        img: 'orange.png',
    },
    {
        name: 'purple',
        img: 'purple.png',
    },
    {
        name: 'red',
        img: 'red.png',
    },
    {
        name: 'yellow',
        img: 'yellow.png',
    },
    {
        name: 'blue',
        img: 'blue.png',
    },
    {
        name: 'green',
        img: 'green.png',
    },
    {
        name: 'orange',
        img: 'orange.png',
    },
    {
        name: 'purple',
        img: 'purple.png',
    },
    {
        name: 'red',
        img: 'red.png',
    },
    {
        name: 'yellow',
        img: 'yellow.png',
    },
]

photoArray.sort(() => 0.5 - Math.random())
const showGrid = document.querySelector('#grid')
const Outcome = document.querySelector('#outcome')
let photoChosen = []
let photoChosenIds = []
const photosMatched = []

function displayBoard () {
    for (let i = 0; i < photoArray.length; i++) {
        const photo = document.createElement('img')
        photo.setAttribute('src','blank.png')
        photo.setAttribute('data-id', i)
        photo.addEventListener('click', flipPhoto)
        showGrid.append(photo)
    }
}

displayBoard()

function flipPhoto() {
    const photoId = this.getAttribute('data-id')
    photoChosen.push(photoArray[photoId].name)
    photoChosenIds.push(photoId)
this.setAttribute('src', photoArray[photoId].img)
if (photoChosen.length === 2) {
    setTimeout(checkForMatch, 500)
}
}

function checkForMatch() {
    const photos = document.querySelectorAll('img')
if (photoChosenIds[0] == photoChosenIds[1]) {
    alert("photo match!")
    photos[photoChosenIds[0]].setAttribute('src', 'blank.png')
    photos[photoChosenIds[1]].setAttribute('src', 'blank.png')
}
if(photoChosen[0] == photoChosen[1]) {
    alert("Match!")
    photos[photoChosenIds[0]].setAttribute('src', 'white.png')
    photos[photoChosenIds[1]].setAttribute('src', 'white.png')
    photos[photoChosenIds[0]].removeEventListener('click', flipPhoto)
    photos[photoChosenIds[1]].removeEventListener('click', flipPhoto)
    photosMatched.push(photoChosen)
} else {
    alert('Try again')
    photos[photoChosenIds[0]].setAttribute('src', 'blank.png')
    photos[photoChosenIds[1]].setAttribute('src', 'blank.png')
}
Outcome.innerHTML = photosMatched.length
photoChosen = []
photoChosenIds = []

if(photosMatched.length == photoArray.length/2) {
Outcome.innerHTML = 'All are matched'
}
}