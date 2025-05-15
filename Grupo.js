   class Grupo {
	constructor(nomeGrupo, idGrupo, adminGrupo){
		this.nomeGrupo = nomeGrupo;
		this.idGrupo = idGrupo;
		this.adminGrupo = []
        this.grupoUsuariosPresentes = [] // aqui é quem vai estar no grupo
//        this.bioGrupo = bioGrupo,
//        this.credencialGrupo = credencialGrupo //aqui é publico ou privado
    }


  adicionarMembro(usuario) {
    if (this.credencialGrupo === 'publico') {
      if (!this.grupoUsuariosPresentes.includes(usuario)) {
        this.grupoUsuariosPresentes.push(usuario);
        console.log(`${usuario.nomeUsuario} entrou no grupo ${this.nomeGrupo}`);
      } else {
        console.log(`${usuario.nomeUsuario} já está no grupo.`);
      }
    } }

  }

