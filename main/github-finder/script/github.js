class Github {
    constructor() {
        this.client_id = '4146583b938ba491a28f';
        this.client_secret = 'eca98102864ef5bf89e1062f46c9c37fece3fc34';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // const responseProfile = await fetch(`https://api.github.com/users/${user}`);
        const responseProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await responseProfile.json();

        // const responseRepos = await fetch(`https://api.github.com/users/${user}/repos`);
        const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposData = await responseRepos.json();

        return {
            profile: profileData,
            repos: reposData
        }
    }
}