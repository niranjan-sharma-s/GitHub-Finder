class GitHub {
  constructor(){
    this.client_id = '754f24ef7d8605e48b89'
    this.client_secret = 'fa9f9a9dd69adbe904e7e35f0cb3da0229ca2cc8'
    this.repos_count= 5;
    this.repos_sort= 'created: asc'
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();


    return {
      profile, //profile: profile
      repos: repos
    }

  }
}