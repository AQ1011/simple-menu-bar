document.addEventListener("DOMContentLoaded", () => {
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const menuList = document.getElementById('menu-list');
    const menuContainer = document.getElementById('menu-list-container');
    leftBtn.onclick = () => {
        menuList.scrollTo({
            left: 0,
            behavior: "smooth",
        })
    }
    rightBtn.onclick = () => {
        menuList.scrollTo({
            left: menuList.scrollWidth,
            behavior: "smooth",
        })
    }
    (new Array(20).fill('1')).forEach((c, index) => {
        const node = document.createElement('li');
        node.textContent = 'Category ' + index;
        node.onmouseenter = (e) => {
            console.log('hover element', e, e.target.offsetLeft)
            openMenu(e.target.offsetLeft - menuList.scrollLeft);
            injectMenu();
        }
        menuList.appendChild(node)
    })
    console.log(menuContainer)
    menuContainer.onmouseleave = () => {
        console.log('mouseout')
        closeMenu();
    }
});

function openMenu(location) {
    const menu = document.getElementById('menu');
    menu.hidden = false;
    menu.style.transform = 'translateX(' + location + 'px)'
}
function closeMenu() {
    const menu = document.getElementById('menu');
    menu.hidden = true;
}
function injectMenu(child) {
    const menu = document.getElementById('menu');
    if (menu) {
        while (menu.firstChild) {
            menu.removeChild(menu.lastChild);
        }
        const node = document.createElement('div');
        node.textContent = 'random child ' + Math.random();
        menu.appendChild(node);
    }
}