(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyMenuRef = document.querySelector("[data-body]"); // це утилітка яка забороняє прокрутку контенту при відкритому мобільному меню

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    bodyMenuRef.classList.toggle("is-overflow-mobile"); // забороняємо прокрутку контенту при відкритому мобільному меню

    mobileMenuRef.classList.toggle("is-open");
  });
})();