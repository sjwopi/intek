window.onload = () => {
  // Открытие сайдбара
  const profileSidebar = document.getElementById('profile-sidebar')
  profileSidebar.addEventListener('mouseover', () => {
    profileSidebar.classList.add('open')
  })

  profileSidebar.addEventListener('mouseout', () => {
    profileSidebar.classList.remove('open')
  })

  // Открытия шапки на мобилке
  const headerModileHamb = document.getElementById('profile-header-mobile__hambbtn')
  const headerModal = document.getElementById('header-modal')

  headerModileHamb.addEventListener('click', () => {
    headerModileHamb.classList.toggle('open')
    headerModal.classList.toggle('open')
  })


  const modalSupportFunction = (modalOpenBtn, modal, modalOvelay, modalCloseBtn) => {
    if (modalOpenBtn && modal && modalOvelay && modalCloseBtn) {
      modalOpenBtn.addEventListener('click', () => {
        modal.classList.add('open')
      })
      modalOvelay.addEventListener('click', () => {
        modal.classList.remove('open')
      })
      modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('open')
      })
    }
  }

  // Смена пароля
  const changePasswordBtn = document.getElementById('changePassword')
  const passwordModal = document.getElementById('modal')
  const passwordModalOverlay = document.getElementById('modal__overlay')
  const passwordModalClose = document.getElementById('modal__close')
  modalSupportFunction(changePasswordBtn, passwordModal, passwordModalOverlay, passwordModalClose);

  // Отправка фидбека
  const feedbackSave = document.getElementById('feedbackSave')
  const feedbackModal = document.getElementById('feedback-modal')
  const feedbackModalOverlay = document.getElementById('feedback-modal__overlay')
  const feedbackModalClose = document.getElementById('feedback-modal__close')
  modalSupportFunction(feedbackSave, feedbackModal, feedbackModalOverlay, feedbackModalClose);

  // Отправка документа
  const docRequest = document.getElementById('doc-request')
  const docRequestModal = document.getElementById('doc-request-modal')
  const docRequestOverlay = document.getElementById('doc-request-overlay')
  const docRequestClose = document.getElementById('doc-request-close')
  modalSupportFunction(docRequest, docRequestModal, docRequestOverlay, docRequestClose);

  // Добавление авто
  const carsAdd = document.getElementById('cars-add')
  const carsAddModal = document.getElementById('cars-add-modal')
  const carsAddOverlay = document.getElementById('cars-add-overlay')
  const carsAddClose = document.getElementById('cars-add-close')
  modalSupportFunction(carsAdd, carsAddModal, carsAddOverlay, carsAddClose);

  // Добавление водителя
  const driversAdd = document.getElementById('drivers-add')
  const driversAddModal = document.getElementById('drivers-add-modal')
  const driversAddOverlay = document.getElementById('drivers-add-overlay')
  const driversAddClose = document.getElementById('drivers-add-close')
  modalSupportFunction(driversAdd, driversAddModal, driversAddOverlay, driversAddClose);

  // Редактирование водителя
  const driversEdit = document.querySelectorAll('.drivers-change')
  const driversEditModal = document.getElementById('drivers-change-modal')
  const driversEditOverlay = document.getElementById('drivers-change-overlay')
  const driversEditClose = document.getElementById('drivers-change-close')
  driversEdit.forEach(item => {
    modalSupportFunction(item, driversEditModal, driversEditOverlay, driversEditClose);
  })

  // Выбор базиса, когда кидают в корзину
  const catalogItemToBasket = document.querySelectorAll('.catalogItem__basket')
  const catalogItemToBasketModal = document.getElementById('catalog-item-modal')
  const catalogItemToBasketOverlay = document.getElementById('catalog-item-overlay')
  const catalogItemToBasketClose = document.getElementById('catalog-item-close')
  catalogItemToBasket.forEach(item => {
    modalSupportFunction(item, catalogItemToBasketModal, catalogItemToBasketOverlay, catalogItemToBasketClose);
  })

  // Модалка на ИНН
  const innCheck = document.getElementById('checkInn')
  const innCheckModal = document.getElementById('checkInn-modal')
  const innCheckOverlay = document.getElementById('checkInn-overlay')
  const innCheckClose = document.getElementById('checkInn-close')
  modalSupportFunction(innCheck, innCheckModal, innCheckOverlay, innCheckClose);

  // Модалка на ИНН не успешно
  const innCheckBad = document.getElementById('checkInn-bad')
  const innCheckBadModal = document.getElementById('checkInn-bad-modal')
  const innCheckBadOverlay = document.getElementById('checkInn-bad-overlay')
  const innCheckBadClose = document.getElementById('checkInn-bad-close')
  modalSupportFunction(innCheckBad, innCheckBadModal, innCheckBadOverlay, innCheckBadClose);


  // Раскрытие заказа
  const orderOpenBtn = document.querySelectorAll('.order__btn')
  orderOpenBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.target.classList.toggle("open");
      e.target.parentElement.classList.toggle("open");
      e.target.parentElement.querySelector('.order__container').classList.toggle("open");
    })
  })

  // Раскрытие водитея 
  const driverOpenBtn = document.querySelectorAll('.driver__open-btn')
  driverOpenBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.target.parentElement.classList.toggle("open");
    })
  })

  // Dropdown для выхода
  const logOutOpen = document.getElementById('userDataOpen');
  const logOutDropdown = document.getElementById('userData');
  logOutOpen.addEventListener('click', () => {
    logOutDropdown.classList.toggle('open')
  })
}