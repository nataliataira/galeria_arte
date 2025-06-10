import { ObraDeArte } from "./ObraDeArte";

export class Escultura extends ObraDeArte {
    private _temBase: boolean;
    private _material: string;

    constructor(codigo : number, titulo : string, artista : string, preco : number, temBase : boolean, material : string) {
        super(codigo, titulo, artista, preco);
        this._temBase = temBase;
        this._material = material;
    }

    public set temBase(temBase : boolean) {
        this._temBase = temBase;
    }

    public get temBase() : boolean {
        return this._temBase;
    }

    public set material(material : string) {
        this._material = material;
    }

    public get material() : string {
        return this._material;
    }

    public visualizarInformacoes(): void {
        super.visualizarInformacoes();
        console.log(`           Material: ${this._material}`);
        console.log(`           Tem Base: ${this._temBase}\n`);
        console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
    }
}