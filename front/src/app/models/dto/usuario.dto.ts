import { PerfilDto } from "./perfil.dto"

export class UsuarioDto {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  matricula: string;
  perfil: PerfilDto;
  token: string;
}
