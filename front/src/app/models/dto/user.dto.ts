import { RoleDto } from "./role.dto";


export class UserDto {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  matricula: string;
  perfil: RoleDto;
  token: string;
}
