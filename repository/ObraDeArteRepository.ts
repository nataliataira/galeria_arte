import { ObraDeArte } from "../model/ObraDeArte";

export interface ObraDeArteRepository {
	buscarPorId(id: number): void;
	listarTodas(): void;
	cadastrar(obra: ObraDeArte): void;
	atualizar(obra: ObraDeArte): void;
	deletar(id: number): void;
}