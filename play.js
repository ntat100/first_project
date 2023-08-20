window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var toTop = document.getElementById('to-top');
    var menu = document.getElementsByClassName('menu_item'); //cần phải sửa  
    if (scrollPosition > 0) {
        header.classList.add('black-bg');
        toTop.style.visibility = "visible";
        menu.style.backgroundColor = '#afe0f5'; //cần phải sửa 
        menu.style.color = 'black'; //cần phải sửa 
    } else {
        header.classList.remove('black-bg');
        toTop.style.visibility = "hidden";
        menu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; //cần phải sửa 
        menu.style.color = '#afe0f5'; //cần phải sửa 
    }
});

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

function addComment() {
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment").value;

    if (name.replace(/^\s+|\s+$/gm,'') === "" || commentText.replace(/^\s+|\s+$/gm,'') === "") {
      alert("Please fill in all fields");
      return;
    }

    const commentList = document.getElementById("comments-list");
    const time = new Date();
    commentList.innerHTML += `<p><span>${name}</span> (${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time.toDateString()}): <br/> ${commentText}</p>`;
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }
  
const imgList = [
    "slider-imgs/Best-Retro-Video-Games-Snake.jpg",
    "slider-imgs/Best-Retro-Video-Games-Tomb-Raider.jpg",
    "slider-imgs/Best-Retro-Video-Games-Pac-Man.jpg",
    "slider-imgs/Best-Retro-Video-Games-Metal-Gear-Solid.jpg",
    "slider-imgs/Best-Retro-Video-Games-Grand-Theft-Auto.jpg"
]
const imgs = document.querySelectorAll(".change img")
let cur = 0;

function changeImg() {
    if(cur === imgList.length){
        cur = 0;
    }
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = imgList[cur];
    }
    cur++;
}
setInterval(changeImg, 1500);