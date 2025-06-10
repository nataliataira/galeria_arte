export abstract class ObraDeArte {
    private _codigo: number;
    private _titulo: string;
    private _artista: string;
    private _preco: number;
    private _tipo: number;

    constructor (codigo : number, titulo : string, artista : string, preco : number, tipo : number) {
        this._codigo = codigo;
        this._titulo = titulo;
        this._artista = artista;
        this._preco = preco;
        this._tipo = tipo;
    }

    public set codigo(codigo : number) {
        this._codigo = codigo;
    }

    public get codigo() : number {
        return this._codigo;
    }

    public set titulo(titulo : string) {
        this._titulo = titulo;
    }

    public get titulo() : string {
        return this._titulo;
    }

    public set artista(artista : string) {
        this._artista = artista;
    }

    public get artista() : string {
        return this._artista;
    }

    public set preco(preco : number) {
        this._preco = preco;
    }

    public get preco() : number {
        return this._preco;
    }

    public set tipo(tipo : number) {
        this._tipo = tipo;
    }

    public get tipo() : number {
        return this._tipo;
    }

    public visualizarInformacoes() : void {
        let formatPreco =  new Intl.NumberFormat('pt-BR', {
            style : 'currency',
            currency: 'BRL',
        }).format(this.preco);
        console.log(`           Título: ${this._titulo}`);
        console.log(`           Artista: ${this._artista}`);
        console.log(`           Preço: ${formatPreco}`);
    }
}