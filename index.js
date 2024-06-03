const profileSidebar = document.getElementById('profile-sidebar')
const changePasswordBtn = document.getElementById('changePassword')
const passwordModal = document.getElementById('password-modal')
const passwordModalOverlay = document.getElementById('password-modal__overlay')
const passwordModalClose = document.getElementById('password-modal__close')

profileSidebar.addEventListener('mouseover', () => {
  profileSidebar.classList.add('open')
})
profileSidebar.addEventListener('mouseout', () => {
  profileSidebar.classList.remove('open')
})

changePasswordBtn.addEventListener('click', () => {
  passwordModal.classList.add('open')
})
passwordModalOverlay.addEventListener('click', () => {
  passwordModal.classList.remove('open')
})
passwordModalClose.addEventListener('click', () => {
  passwordModal.classList.remove('open')
})