document.addEventListener("DOMContentLoaded", function() {

    // Hide menu initially
    const menu = document.querySelectorAll('.menu');
    menu.forEach(content => content.style.display = 'none');

    const menuButton = document.querySelectorAll('.menu-button');
    menuButton.forEach(content => content.style.backgroundColor = "white");
    
    const coll = document.getElementsByClassName("menu-button");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            /*this.classList.toggle("active");
            if (this.style.backgroundColor === "white"){
                this.style.backgroundColor = "#eee"
            }
            else {
                this.style.backgroundColor = "white"
            }*/
            this.style.backgroundColor = this.style.backgroundColor === "white" ? "#eee" : "white";
            const menu = document.querySelectorAll('.menu');
            menu.forEach(content => content.style.display = content.style.display === "block" ? "none" : "block");
        });
    }
  
    // Add event listener for window resize
    window.addEventListener('resize', () => {
        const newWindowWidth = window.innerWidth;
        if (newWindowWidth > 715) {
            const menu = document.querySelectorAll('.menu');
            menu.forEach(content => content.style.display = 'none');

            const menuButton = document.querySelectorAll('.menu-button');
            menuButton.forEach(content => content.style.backgroundColor = "white");
        }
    });
  });