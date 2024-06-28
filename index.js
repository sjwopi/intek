window.onload = () => {
  const profileSidebar = document.getElementById('profile-sidebar')

  const changePasswordBtn = document.getElementById('changePassword')
  const passwordModal = document.getElementById('password-modal')
  const passwordModalOverlay = document.getElementById('password-modal__overlay')
  const passwordModalClose = document.getElementById('password-modal__close')

  const feedbackSave = document.getElementById('feedbackSave')
  const feedbackModal = document.getElementById('feedback-modal')
  const feedbackModalOverlay = document.getElementById('feedback-modal__overlay')
  const feedbackModalClose = document.getElementById('feedback-modal__close')

  const headerModileHamb = document.getElementById('profile-header-mobile__hambbtn')
  const headerModal = document.getElementById('header-modal')

  const docRequest = document.getElementById('doc-request')
  const docRequestModal = document.getElementById('doc-request-modal')
  const docRequestOverlay = document.getElementById('doc-request-overlay')
  const docRequestClose = document.getElementById('doc-request-close')

  const orderOpenBtn = document.querySelectorAll('.order__btn')


  profileSidebar.addEventListener('mouseover', () => {
    profileSidebar.classList.add('open')
  })
  profileSidebar.addEventListener('mouseout', () => {
    profileSidebar.classList.remove('open')
  })

  if (changePasswordBtn && passwordModal && passwordModalOverlay && passwordModalClose) {
    changePasswordBtn.addEventListener('click', () => {
      passwordModal.classList.add('open')
    })
    passwordModalOverlay.addEventListener('click', () => {
      passwordModal.classList.remove('open')
    })
    passwordModalClose.addEventListener('click', () => {
      passwordModal.classList.remove('open')
    })
  }
  if (feedbackSave && feedbackModal && feedbackModalOverlay && feedbackModalClose) {
    feedbackSave.addEventListener('click', (e) => {
      e.preventDefault()
      feedbackModal.classList.add('open')
    })
    feedbackModalOverlay.addEventListener('click', () => {
      feedbackModal.classList.remove('open')
    })
    feedbackModalClose.addEventListener('click', () => {
      feedbackModal.classList.remove('open')
    })
  }

  headerModileHamb.addEventListener('click', () => {
    headerModileHamb.classList.toggle('open')
    headerModal.classList.toggle('open')
  })

  orderOpenBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.target.classList.toggle("open");
      e.target.parentElement.classList.toggle("open");
      e.target.parentElement.querySelector('.order__container').classList.toggle("open");
    })
  })
  if (docRequest && docRequestModal && docRequestOverlay && docRequestClose) {
    docRequest.addEventListener('click', () => {
      docRequestModal.classList.add('open')
    })
    docRequestOverlay.addEventListener('click', () => {
      docRequestModal.classList.remove('open')
    })
    docRequestClose.addEventListener('click', () => {
      docRequestModal.classList.remove('open')
    })
  }
}