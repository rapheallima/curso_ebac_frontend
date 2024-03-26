document.addEventListener('DOMContentLoaded', function () {
    const nameProfile = document.querySelector('#name')
    const userProfile = document.querySelector('#username')
    const pictureProfile = document.querySelector('#picture')
    const repoProfile = document.querySelector('#repo')
    const followerProfile = document.querySelector('#follower')
    const followingProfile = document.querySelector('#following')
    const linkProfile = document.querySelector('#link')

    fetch('https://api.github.com/users/rapheallima')
        .then(function (resp) {
            return resp.json()
        })
        .catch(function (erro) {
            alert("Ocorreu um erro ao carregar a página,por favor tente novamente mais tarde.")
        })
        .then(function (json) {
            nameProfile.innerText = json.name
            userProfile.innerText = json.login
            pictureProfile.src = json.avatar_url
            followingProfile.innerText = json.following
            followerProfile.innerText = json.followers
            repoProfile.innerText = json.public_repos
            linkProfile.href = json.html_url
        })
        .catch(function (erro) {
            alert("Ocorreu um erro ao carregar a página,por favor tente novamente mais tarde.")
        })

})