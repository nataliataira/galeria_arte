import readlinesync = require("readline-sync");
import { mostrarMenu, mostrarMenuExpo} from "./utils/Auxiliar"
import { Quadro } from "./model/Quadro";
import { Escultura } from "./model/Escultura";
import { ObraDeArteController } from "./controller/ObraDeArteController";

export function main() {
    let opcao: number, codigo : number, preco : number;
    let temMoldura : boolean, temBase : boolean;
    let titulo : string, artista : string, tecnica : string, material : string;

    let obras: ObraDeArteController = new ObraDeArteController();
    const tipoObra : string[] = ["Quadro", "Escultura"];

    const fs = require('fs');

    let tipo : number = 1;

    while (true) {
        mostrarMenu();

        console.log('Digite a opção desejada: ');
        opcao = readlinesync.questionInt('', {limitMessage: 'Digite uma opção válida.'});

        if (opcao === 7) {
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Obra\n\n");

                console.log("Digite o título da obra: ");
                titulo = readlinesync.question("");

                console.log("\nDigite o nome do artista: ");
                artista = readlinesync.question("");

                console.log("\nDigite o valor da obra: ");
                preco = readlinesync.questionFloat("");

                tipo = readlinesync.keyInSelect(
                    tipoObra, 
                    'Qual tipo de obra que desja cadastrar?', {
                        limitMessage:"Escolha uma opcao válida",
                        cancel:"Voltar ao menu"
                    }
                );

                if (tipo === -1) break;
                tipo++;

                switch (tipo) {
                    case 1:
                        tecnica = readlinesync.question("Digite a técnica: ");
                
                        temMoldura = readlinesync.keyIn(
                            "Esse quadro possui moldura? [s/n] ", {
                                limit: "snSN",
                                limitMessage:"Escolha uma opção válida",
                                caseSensitive: false
                        }).toLowerCase() === "s";
                    
                        obras.cadastrar(
                            new Quadro(
                                obras.gerarIdSeq(), 
                                titulo, 
                                artista, 
                                preco, 
                                tipo,
                                temMoldura, 
                                tecnica
                            )
                        );

                        keyPress();
                        break;
            
                    case 2:
                        material = readlinesync.question("Digite o material: ");
        
                        temBase = readlinesync.keyIn(
                            "Essa escultura possui base? [s/n] ", {
                                limit: "snSN",
                                limitMessage:"Escolha uma opção válida",
                                caseSensitive: false
                        }).toLowerCase() === "s";

                        obras.cadastrar(
                            new Escultura(
                                obras.gerarIdSeq(), 
                                titulo, 
                                artista, 
                                preco, 
                                tipo,
                                temBase, 
                                material
                            )
                        );
                        keyPress();
                        break;
                }
                break;

            case 2:
                console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
                console.log("\n\nListar todas obras de arte\n\n");
                obras.listarTodas();
                keyPress();
                break;

            case 3:
                console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
                console.log("\n\nListar obras de arte por código\n\n");
                codigo = readlinesync.questionInt("Digite o código da obra: ");
                obras.buscarPorId(codigo);
                keyPress();
                break;

            case 4:
                console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
                console.log("\n\nAtualizar dados de uma obras de arte\n\n");
                codigo = readlinesync.questionInt("Digite o código da obra: ");

                let obra = obras.buscarNoArray(codigo);

                if (obra != null) {
                    console.log("Digite o título da obra: ");
                    titulo = readlinesync.question("");

                    console.log("\nDigite o nome do artista: ");
                    artista = readlinesync.question("");

                    console.log("\nDigite o valor da obra: ");
                    preco = readlinesync.questionFloat("");

                    tipo = obra.tipo;
                    
                    switch (tipo) {
                        case 1:
                            tecnica = readlinesync.question("Digite a técnica: ");

                            temMoldura = readlinesync.keyIn(
                                "Esse quadro possui moldura? [s/n] ", {
                                    limit: "snSN",
                                    limitMessage:"Escolha uma opção válida",
                                    caseSensitive: false
                            }).toLowerCase() === "s";

                            obras.atualizar(
                                new Quadro(
                                    codigo, 
                                    titulo, 
                                    artista, 
                                    preco, 
                                    tipo, 
                                    temMoldura, 
                                    tecnica
                                )
                            );
                            keyPress();
                            break;

                        case 2:
                            material = readlinesync.question("Digite o material: ");

                            temBase = readlinesync.keyIn(
                                "Essa escultura possui base? [s/n] ", {
                                    limit: "snSN",
                                    limitMessage:"Escolha uma opção válida",
                                    caseSensitive: false
                            }).toLowerCase() === "s";
    
                            obras.atualizar(
                                new Escultura(
                                    codigo, 
                                    titulo, 
                                    artista, 
                                    preco, 
                                    tipo,
                                    temBase, 
                                    material
                                )
                            );
                            keyPress();
                            break;
                    }

                }
                break;

            case 5:
                console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
                console.log("\n\nApagar resgitro de obra de arte\n\n");
                codigo = readlinesync.questionInt("Digite o código da obra: ");
                obras.deletar(codigo);
                keyPress();
                break;

            case 6:
                console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
                console.log("\n\nVer obras em exposição\n\n");
                mostrarMenuExpo();

                console.log("Para uma experiência melhor, use o terminal em tela cheia");
                let quadro = readlinesync.questionInt("Agora digite o número do quadro: ");

                if (quadro === 7)  break;
                
                switch (quadro) {
                    case 1:
                        console.log(require('fs').readFileSync("./quadros/abaporu.txt", 'utf8'));
                        keyPress();
                        break;

                    case 2:
                        console.log(require('fs').readFileSync('./quadros/amor.txt', 'utf8'));
                        keyPress();
                        break;

                    case 3:
                        console.log(require('fs').readFileSync('./quadros/magritte.txt', 'utf8'));
                        keyPress();
                        break;

                    case 4:
                        console.log(require('fs').readFileSync('./quadros/mona_lisa.txt', 'utf8'));
                        keyPress();
                        break;

                    case 5:
                        console.log(require('fs').readFileSync('./quadros/noite_estrelada.txt', 'utf8'));
                        keyPress();
                        break;
                    case 6:
                        console.log(require('fs').readFileSync('./quadros/o_nascimento_de_venus.txt', 'utf8'));
                        keyPress();
                        break;
                    default:
                        console.log("Opção inválida");
                        keyPress();
                        break;
                }

                break;

            default:
                console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
                console.log("Opção Inválida!");
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("               Obrigado por visitar a N.Art\n");
    console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
    console.log("Projeto Desenvolvido por: Natalia Gomes Taira ");
    console.log("Generation Brasil - nataliagtaira@gmail.com");
    console.log("https://github.com/nataliataira");
    console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();