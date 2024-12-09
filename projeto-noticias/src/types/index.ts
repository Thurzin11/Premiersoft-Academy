export interface Usuario {
    id: number;
    email: string;
    senha: string;
    nome: string;
    noticias: Noticia[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Categoria {
    id: number;
    nome: string;
    noticias: Noticia[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Noticia {
    id: number;
    titulo: string;
    conteudo: string;
    dataPublicacao: Date;
    autorId: number;
    categoriaId: number;
    createdAt: Date;
    updatedAt: Date;
  }
  