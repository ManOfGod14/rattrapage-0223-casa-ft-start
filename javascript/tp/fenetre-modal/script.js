let currentModal = null;

const openModal = function(e) {
    e.preventDefault();

    const aHrefValue = e.target.getAttribute("href");
    // console.log(aHrefValue);

    currentModal = document.querySelector(aHrefValue);
    // console.log(currentModal);

    currentModal.style.display = null;
    // currentModal.removeAttribute("style");

    currentModal.setAttribute('aria-hidden', 'false');
    currentModal.setAttribute('aria-modal', 'true');

    // fermer le modal au click sur la page
    currentModal.addEventListener("click", closeModal);

    // fermer le modal au click sur le bouton
    currentModal.querySelector('.close-modal-js').addEventListener("click", closeModal);

    // pour arreter la propagation de l'evenement sur le modal
    currentModal.querySelector('.stop-modal-js').addEventListener("click", stopModalProgropation);
}

const closeModal = function(e) {
    if(currentModal === null) return;

    e.preventDefault();

    currentModal.style.display = "none";
    currentModal.setAttribute('aria-hidden', 'true');
    currentModal.setAttribute('aria-modal', 'false');

    // suppimer l'evenement de click sur la page lors de la fermeture du modal
    currentModal.removeEventListener("click", closeModal);

    // suppimer l'evenement de click sur le bouton lors de la fermeture du modal
    currentModal.querySelector('.close-modal-js').removeEventListener("click", closeModal);

    //  suppimer l'evenement de click der la propagation de l'evenement sur le modal
    currentModal.querySelector('.stop-modal-js').removeEventListener("click", stopModalProgropation);

    currentModal = null;
}

const stopModalProgropation = function (e) {
    e.stopPropagation();
}

document.querySelectorAll('.open-modal-js').forEach(a => {
    a.addEventListener('click', openModal);
});

/* ecoute d'evenement de touche des boutons du clavier */
window.addEventListener('keydown', function (e) {
    // console.log(e.key)
    // console.log(e.keyCode)
    if(e.key === "Escape" || e.key === "Esc") {
        closeModal(e);
    }
})

