let images = [
    {
        id: 1,
        src: "./img/1.png"
    },
    {
        id: 2,
        src: "./img/1_1.png"
    },
    {
        id: 3,
        src: "./img/2.png"
    },
    {
        id: 4,
        src: "./img/2_2.png"
    },
    {
        id: 5,
        src: "./img/3.png"
    },
    {
        id: 6,
        src: "./img/3_3.png"
    }
];


let allimg = document.getElementById('allimg');
let index = 0;

let nextImg = () => {

    
    allimg.classList.add('hide-img');

    setTimeout(() => {

        index++;
        if (index >= images.length) {
            index = 0;
        }

        allimg.src = images[index].src;

        
        allimg.classList.remove('hide-img');

    }, 300);
}


let prevImg = () => {

    allimg.classList.add('hide-img')

    setTimeout(()=>{

        index--; 

    if (index < 0) {
        index = images.length - 1; 
    }

    allimg.src = images[index].src;

    allimg.classList.remove('hide-img');
    },300)
};

setInterval(() => {
    nextImg();
}, 3000);
