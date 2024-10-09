$(document).ready(function() {
    try {
        const nameElement = document.querySelector('#name');
        const usernameElement = document.querySelector('#username');
        const avatarElement = document.querySelector('#avatar');
        const reposElement = document.querySelector('#repos');
        const followersElement = document.querySelector('#followers');
        const followingElement = document.querySelector('#following');
        const linkElement = document.querySelector('#link');

        fetch('https://api.github.com/users/albertmarques7')
        .then(function(res) {
            if (!res.ok) {
                throw new Error("Erro na resposta da API");
            }
            return res.json();
        })
        .then(function(json) {
            if (!json.name || !json.login) {
                throw new Error("Dados incompletos da API");
            }

            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;

            linkElement.href = json.html_url;
            linkElement.innerText = "Ver no Github";
        })
        .catch(function(error) {
            console.error("Erro ao buscar dados do GitHub:", error);
            alert("Erro ao carregar informações do GitHub. Tente novamente mais tarde.");
        });
    } catch (error) {
        console.error("Erro ao configurar a página:", error);
        alert("Erro ao configurar a página. Verifique se os elementos HTML estão corretos.");
    }
});
