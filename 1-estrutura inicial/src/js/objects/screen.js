const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){

        this.userProfile.innerHTML = `<div class="info">
        <img src ="${user.avatarUrl}" alt="Foto do perfil do usúario" /> 
      <div class ="data">
         <h1>${user.name ?? 'Não possui nome cadastrado😭'}</h1> 
         <p>${user.bio ?? 'Não Possui Bio Cadastrada 😭'}</p>
      </div>
      </div> `
     
      let repositoriesItens = ''
      user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}"target="blank">${repo.name}</a></li>`)

     if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section"> 
                                            <h2>Repósitorios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
     }
    },
     renderNotFound(){
             this.userProfile.innerHTML = "<h3>Usuario não Encontrado</h3>"
     }
};

export { screen }