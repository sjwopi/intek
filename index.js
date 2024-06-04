window.onload = () => {
  const profileSidebar = document.getElementById('profile-sidebar')
  const changePasswordBtn = document.getElementById('changePassword')
  const passwordModal = document.getElementById('password-modal')
  const passwordModalOverlay = document.getElementById('password-modal__overlay')
  const passwordModalClose = document.getElementById('password-modal__close')
  const headerModileHamb = document.getElementById('profile-header-mobile__hambbtn')
  const headerModal = document.getElementById('header-modal')

  profileSidebar.addEventListener('mouseover', () => {
    profileSidebar.classList.add('open')
  })
  profileSidebar.addEventListener('mouseout', () => {
    profileSidebar.classList.remove('open')
  })

  if (changePasswordBtn && passwordModalOverlay && passwordModalClose) {
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


  headerModileHamb.addEventListener('click', () => {
    headerModileHamb.classList.toggle('open')
    headerModal.classList.toggle('open')
  })
}