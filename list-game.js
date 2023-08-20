document.addEventListener("DOMContentLoaded", function () {
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
    const search = document.getElementById("searchBarGame");
    const gameItems = document.getElementsByClassName("game-item");
    const btn = document.getElementById("buttonSearch");
    const li= document.querySelectorAll("ul.games li");
    const clear = document.getElementById("clearButton");
    const fbtn = document.querySelectorAll(".btn");
    const gameType = document.querySelectorAll(".categori");

    btn.addEventListener("click", function () {
      const searchTerm = search.value.toLowerCase();
    
      for (let i = 0; i < gameItems.length; i++) {
        const gameName = gameItems[i].querySelector(".name").textContent.toLowerCase();
       if (gameName.indexOf(searchTerm) >= 0) {
          li[i].classList.remove("hide")
        } else {
          li[i].classList.add("hide")
        }
      }
      for (let i = 0; i < fbtn.length; i++) {
        fbtn[i].classList.remove("active");
      }
    });
    clear.addEventListener("click", function() {
        search.value = '';
        for (let i =0; i< gameItems.length;i++){
            li[i].classList.remove("hide")
        }
        for (let i = 0; i < fbtn.length; i++) {
          fbtn[i].classList.remove("active");
        }
        var on = document.querySelector(".button-container li:first-child");
        on.classList.add("active");
    })
    Array.from(fbtn).forEach(function(element) {
        element.addEventListener("click", function(event){
          for (let i = 0; i < fbtn.length; i++){
            fbtn[i].classList.remove("active");
          }  
          this.classList.add("active");
          let type = this.getAttribute("data-filter");
          for (let i=0; i < gameType.length; i++){
            let tg = gameType[i].getAttribute('data-item');
            if (type === 'all' || tg === type) {
                li[i].classList.remove("hide");
            }
            else {
                li[i].classList.add("hide");
            }
          }
        })
    })
});

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

