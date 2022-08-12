(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        body: document.querySelector("[data-body]"), // це утилітка яка забороняє прокрутку контенту поза бекдропом при відкритому модальному вікні
        modalNameInput: document.getElementById("modal-name"), // це <input id="modal-name"> для першого поля input в формі модалки в HTML
        modalForm: document.getElementById("modal-form"), // це <form id="modal-form"> для форми модалки в HTML
    };

    // refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModalOpen); // виклик функції вікриття модалки
    refs.closeModalBtn.addEventListener("click", toggleModalClose); // виклик функції закриття модалки

    function toggleModalOpen() {
        refs.modal.classList.toggle("is-hidden");
        refs.body.classList.toggle("is-overflow"); // забороняємо прокрутку контенту поза бекдропом
        refs.modalNameInput.focus(); // передача фокусу полю <input id="modal-name"> першого поля input в формі модалки в HTML 
    }

    function toggleModalClose() {
        refs.modal.classList.toggle("is-hidden");
        refs.body.classList.toggle("is-overflow"); // відключаємо заборону прокрутки контенту поза бекдропом
        // refs.modalForm.reset(); // очищення форми <form id="modal-form"> модалки від заповнених даних при закритті модалки
        refs.openModalBtn.focus(); // передача фокусу кнопці замовлення в HTML при закритті модалки
    }
})();