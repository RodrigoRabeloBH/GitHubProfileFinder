class GitHub{
    constructor(){
        this.client_id = '447b0adc6839c05857b7'
        this.client_secret = 'ad5b56151d7718845e90219a2603083e518c9390'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https:/api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this,this.client_secret}`)
        const reposResponse = await fetch(`https:/api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this,this.client_secret}`)
        const profile = await profileResponse.json()
        const repos = await reposResponse.json()
        return {
            profile,
            repos 
        }
    }
}