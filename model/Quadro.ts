import { ObraDeArte } from "./ObraDeArte";

export class Quadro extends ObraDeArte {
    private _temMoldura: boolean
    private _tecnica: string;

    constructor(codigo : number, titulo : string, artista : string, preco : number, tipo : number, temMoldura : boolean, tecnica : string) {
        super(codigo, titulo, artista, preco, tipo);
        this._temMoldura = temMoldura;
        this._tecnica = tecnica;
    }

    public set temMoldura(temMoldura : boolean) {
        this._temMoldura = temMoldura;
    }

    public get temMoldura () : boolean {
        return this._temMoldura;
    }

    public set tecnica(tecnica : string) {
        this._tecnica = tecnica;
    }

    public get tecnica () : string {
        return this._tecnica;
    }

    public visualizarInformacoes(): void {
        console.log(`           Quadro ${super.codigo}\n`);
        super.visualizarInformacoes();
        console.log(`           Técnica: ${this._tecnica}`);
        console.log(`           Tem moldura: ${this._temMoldura}\n`);
    }
}