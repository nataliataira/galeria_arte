import { ObraDeArte } from "../model/ObraDeArte";
import { ObraDeArteRepository } from "../repository/ObraDeArteRepository";

export class ObraDeArteController implements ObraDeArteRepository {

    private idSeq: number = 0;
    private listaObras: Array<ObraDeArte> = new Array<ObraDeArte>();

    public cadastrar(obra: ObraDeArte): void {
        this.listaObras.push(obra);
        console.log(`\nA Obra com código: ${obra.codigo} foi criada com sucesso!`);
    }

    public buscarPorId(id: number): void {
        let buscaObra = this.buscarNoArray(id);
        if (buscaObra != null) {
            buscaObra.visualizarInformacoes();
        } else
            console.log(`\nA Obra com código: ${id} não foi encontrada!`);
    }

    public listarTodas(): void {
        for (let obra of this.listaObras) {
            obra.visualizarInformacoes();
        };
    }

    public atualizar(obra: ObraDeArte): void {
        let buscaObra = this.buscarNoArray(obra.codigo);

        if (buscaObra != null) {
            this.listaObras[this.listaObras.indexOf(buscaObra)] = obra;
            console.log(`\nA Obra com código: ${obra.codigo} foi atualizada com sucesso!`);
        } else
            console.log(`\nA Obra com código: ${obra.codigo} não foi encontrada!`);
    }

    public deletar(codigo: number): void {
        let buscaObra = this.buscarNoArray(codigo);

        if (buscaObra != null) {
            this.listaObras.splice(this.listaObras.indexOf(buscaObra), 1);
        	console.log(`\nA Obra com codigo: ${codigo} foi apagada com sucesso!`);
        } else
        console.log(`\nA Obra com codigo: ${codigo} não foi encontrada!`);
    }

    private buscarNoArray(codigo: number): ObraDeArte | null {

        for (let obra of this.listaObras)   {
            if (obra.codigo === codigo) return obra;
        }
        return null;
    }

    public geraridSeq(): number {
        return ++this.idSeq;
    }
}