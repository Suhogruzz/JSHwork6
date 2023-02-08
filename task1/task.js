const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
const close = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('.show-success');

function popupShow() {
    main.classList.add('modal_active');
    [...close].forEach((btn) => {
        btn.onclick = () => {
            main.classList.remove('modal_active');
            success.classList.remove('modal_active');
        };
    })
    showSuccess.onclick = () => {
        success.classList.add('modal_active');
    }
};

popupShow();