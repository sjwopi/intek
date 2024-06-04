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
}