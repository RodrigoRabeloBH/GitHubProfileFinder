class UI{
    constructor(){
        this.profile = document.querySelector('#profile')
    }

    // display profile in ui
    showProfile(user){
        this.profile.innerHTML =`
        <div class="card card-body mb-3 ">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4" >View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>                    
                    <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
                    <span class="badge badge-info mb-1">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item"> Company: ${user.company}</li>
                        <li class="list-group-item"> Website/Blog: ${user.blog}</li>
                        <li class="list-group-item"> Location: ${user.location}</li>
                        <li class="list-group-item"> Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3"> Latest Repos</h3>
        <div id="repos">
        </div>
        `
    }
    showRepos(repos){
        let output = ''
        repos.forEach(repo => {
            output +=`
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary mb-1">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary mb-1">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success mb-1">Forks: ${repo.forks_count}</span>                   
                    </div>
                </div>
            </div>
            `
        })
        document.querySelector("#repos").innerHTML = output
        

       
    }
    // clear profile
    clearProfile(){
        this.profile.innerHTML = ''
    }
    // show Alert Message
    showAlert(msg, className){
        // clear any remaining alert
        this.clearAlert()
        // creat elements div,p
        const div = document.createElement('div')
        const p = document.createElement('p')
        // add class 
        div.className = `${className}`
        p.className = 'white-text text-center'
        p.appendChild(document.createTextNode(msg))
        // add message
        div.appendChild(p)
        // get parent
        const parent = document.querySelector('.searchContainer')
        // get search box
        const search = document.querySelector('.search')
        // insert alert 
        parent.insertBefore(div,search)
        setTimeout(()=>{
            this.clearAlert()
        },3000)
    }

    // clear alert 
    clearAlert(){
        const current_alert = document.querySelector('.alert')
        if(current_alert){
            current_alert.remove()
        }
    }
}