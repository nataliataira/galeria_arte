import readlinesync from "readline-sync";

export function mostrarMenu(): void {
    console.clear();
    console.log(`
  ✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦
  
                    N. Art Galeria
  
    1 - Cadastrar obra
    2 - Listar todas obras
    3 - Buscar obra por código
    4 - Atualizar dados de obra
    5 - Apagar registro de obra
    6 - Ver obras em exposição
    7 - Sair
  
  ✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦
  `);
}

export function mostrarMenuExpo(): void {
    console.clear();
    console.log(`
  ✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦
  
    1 - Mona Lisa
    2 - O Nascimento de Vênus
    3 - Peixes
    4 - Tuntacamon
    5 - Sair
  
  ✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦
  `);
}

export function obterString(msg: string): string {
    return readlinesync.question(msg);
}

export function obterFloat(msg: string): number {
    return readlinesync.questionFloat(msg, { limitMessage: "Valor inválido" });
}
  
export function obterInt(msg: string): number {
    return readlinesync.questionInt(msg, { limitMessage: "Número inválido" });
}

export function obterSN(pergunta: string): boolean {
    return (readlinesync.keyIn(
        `${pergunta} [s/n] `, {
            limit: "snSN",
            caseSensitive: false,
            limitMessage: "Escolha uma opção válida",
        }).toLowerCase() === "s"
    );
}

export function selecionarTipoOpcoes(opcoes: string[], mensagem: string): number | null {
    const posicao = readlinesync.keyInSelect(
        opcoes, mensagem, {
            cancel: "Voltar ao menu",
            limitMessage: "Escolha uma opção válida",
        }
    );
    return posicao === -1 ? null : posicao;
}

export function lerDadosBaseObra() {
    return {
      titulo: obterString("Título da obra: "),
      artista: obterString("Artista: "),
      preco: obterFloat("Valor da obra: "),
    };
}

export function mostrarSobre(): void {
    console.log(`
                 Obrigado por visitar a N.Art
  
  ✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦
    Projeto Desenvolvido por: Natalia Gomes Taira
    Generation Brasil - nataliagtaira@gmail.com
    https://github.com/nataliataira
  ✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦
  `);
  }