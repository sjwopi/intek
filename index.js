const profileSidebar = document.getElementById('profile-sidebar')

profileSidebar.addEventListener('mouseover', () => {
  profileSidebar.classList.add('open')
})
profileSidebar.addEventListener('mouseout', () => {
  profileSidebar.classList.remove('open')
})