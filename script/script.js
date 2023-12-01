const pagesNodeList = document.querySelectorAll("[class$='page']")

const menuItemsNodeList = document.querySelectorAll("[class*='navigation-link']")
const logo = document.querySelector('.logo')
const menuItems = Array.from(menuItemsNodeList)
const pages = Array.from(pagesNodeList)
function navigatePage(pageNumber) {
    Array.from(pagesNodeList).map(page => {
        page.style.display = 'none';
    })
    pages[pageNumber].style = { display: 'block' }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function optionsPage() {
    logo.addEventListener('click', () => {
        navigatePage(0)
    })
    menuItems.map((item) => {
        item.addEventListener('click', (e) => {
            if (item.innerHTML === 'Blog') navigatePage(1);
            if (item.innerHTML === 'About') navigatePage(4);
            if (item.innerHTML.startsWith('Contact') === true) navigatePage(5);
            if (item.innerHTML === 'Home') navigatePage(0);

        })
    })
}
function handleOpenBlog(blogNumber) {
    blogNumber === 1 ? navigatePage(2) : navigatePage(3)
}
function handleOpenAny(pageNumber) {
    navigatePage(3)
}
const HiddenMenu = document.querySelector('.hide-menu')
const HiddenMenuButton = document.querySelector('.hide-menu-button')
function handleOpenMenu () {
    
    HiddenMenu.style.display === 'block' ? HiddenMenu.style.display = 'none' : HiddenMenu.style.display= 'block'
    
}
window.onclick = function(event) {
    console.log(event.target);
    if (event.target !== HiddenMenu && event.target !== HiddenMenuButton) {
        HiddenMenu.style.display = "none";
    }
}
optionsPage()
handleOpenBlog()
navigatePage(0)
