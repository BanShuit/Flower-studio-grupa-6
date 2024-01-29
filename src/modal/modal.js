(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openModalSubBtn: document.querySelector('[data-modal-sub-open]'),
    closeModalSubBtn: document.querySelector('[data-modal-sub-close]'),
    modalSub: document.querySelector('[data-modal-sub]'),
    
  };

  refs.openModalBtns.forEach(openModalBtn => openModalBtn.addEventListener('click', toggleModal));
  refs.closeModalBtns.forEach(closeModalBtn =>
    closeModalBtn.addEventListener('click', toggleModal),
  );

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  refs.openModalSubBtn.addEventListener('click', toggleModalSub);
  refs.closeModalSubBtn.addEventListener('click', toggleModalSub);

  function toggleModalSub() {
    refs.modalSub.classList.toggle('is-hidden');
  }
})();