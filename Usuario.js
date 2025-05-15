 
  class Usuario {
	constructor(nomeUsuario, matricula, idUsuario, curso){
		this.nomeUsuario = nomeUsuario;
		this.matricula = matricula;
		this.idUsuario = idUsuario;
		this.curso = []; //se for pra fazer herança, isso aqui fica só em aluno
    this.gruposDoUsuario = [];
       // this.capaUsuario = capaUsuario;
     //   this.bioUsuarioPerfil = bioUsuarioPerfil;
     //   this.fotoUsuarioPerfil = fotoUsuarioPerfil;
     //   this.postUsuarioLikes = [];
     }


AderirGrupo(Grupo) {
    if (!this.gruposDoUsuario.includes(Grupo)) {
      this.gruposDoUsuario.push(Grupo); //coloca o grupo que a pessoa entrou nos grupos dela
      console.log(`${this.nomeUsuario} entrou no grupo ${Grupo.nomeGrupo}`);
    } else {
      console.log(`${this.nomeUsuario} já está no grupo ${Grupo.nomeGrupo}`); //como
    }
  }

  listaGrupos() {
    console.log(`Grupos de ${this.nomeUsuario}: ${this.gruposDoUsuario.join(', ')}`);
  }

  getUserInfo(){
    console.log(`Nome${this.nomeUsuario}: ${this.matricula}`);
  }

}
