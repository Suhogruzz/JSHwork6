const link = document.querySelectorAll('.menu__link')
const bodyClick = document.documentElement


function navMenu () {
    [...link].forEach((navItem) => {
        navItem.onclick = () => {
            let navMenu = navItem.closest('ul');
            let subMenu = navItem.parentElement.querySelector('.menu_sub');
            if (navMenu.className === 'menu menu_main') {
                let activeMenu = navMenu.querySelector('.menu_active');
                if (activeMenu && (activeMenu !== subMenu)) {
                    activeMenu.className = 'menu menu_sub';
                }
            }
            console.log(subMenu.classList)
            switch(true) {
                case !subMenu:
                    return true;
                case subMenu.classList.contains('menu_sub'):
                    subMenu.classList.toggle('menu_active')
            }
            return false;
        }
    })
};

navMenu();