window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var toTop = document.getElementById('to-top');
    if (scrollPosition > 0) {
        header.classList.add('black-bg');
        toTop.style.visibility = "visible";
    } else {
        header.classList.remove('black-bg');
        toTop.style.visibility = "hidden";
    }
});
 
//Đi lên đầu trang
function moveTop() {
    var move = setInterval( function(){
        document.documentElement.scrollTop -= 50;
        if(document.documentElement.scrollTop <= 0) {
            clearInterval(move);
        }
    }, 10)
}

let searchIcon = document.getElementById('search-icon');
let searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click', function (event) {
    event.stopPropagation(); //giải thích chỗ này
    searchBar.style.display = 'block';
});

document.addEventListener('click', function (event) {
    if (event.target !== searchIcon && event.target !== searchBar) {
      searchBar.style.display = 'none';
    }
});
const imgList = [
    "website_imgs/g5.avif",
    "website_imgs/g9.jpg",
    "website_imgs/g9.png",
    "website_imgs/g6.jpg",
    "website_imgs/g10.jpg"
]
const i1 = document.getElementById("image1")
const i2 = document.getElementById("image2")
let cur = 0;

function changeImg() {
    if(cur === imgList.length){
        cur = 0;
    }
    i1.src = imgList[cur];
    i2.src = imgList[cur];
    cur++;
}

setInterval(changeImg, 1500);