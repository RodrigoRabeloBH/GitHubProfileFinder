// init GitHub
const gitHub = new GitHub()
const ui = new UI()

// search input
const searchUser = document.querySelector('#searchUser')

// search input event listener
searchUser.addEventListener('keyup',(e)=>{
// get input text
const userText = e.target.value
if(userText !==""){
   gitHub.getUser(userText)
   .then(data=>{
      if(data.profile.message === 'Not Found'){
        // show alert
        ui.showAlert('User not found','alert alert-warning')
      }else{
        // show profile
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)
      }
   })
}else{
    // clear profile
    ui.clearProfile()
}
})