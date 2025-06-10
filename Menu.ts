import readlinesync = require("readline-sync");
import { Quadro } from "./model/Quadro";
import { Escultura } from "./model/Escultura";
import { ObraDeArteController } from "./controller/ObraDeArteController";

export function main() {
    let opcao: number;

    let controller = new ObraDeArteController;
    let obra1 = new Quadro(1, "Mona Lisa", "Leonardo Da Vinci", 277000000000000000.00, true, "sfumato");
    let obra2 = new Escultura(2, "Estátua de David", "Michelangelo", 5436780000000.00, true, "mármore");

    obra1.visualizarInformacoes();
    obra2.visualizarInformacoes();

    let atualiza = obra1;
    obra1.titulo = "oi";
    controller.cadastrar(obra1);
    controller.cadastrar(obra2);
    controller.atualizar(atualiza);
    controller.deletar(1);
    
    while (true) {
        console.log("\n",
            "✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦\n",
            "                                                    \n",
            "                  N. Art Galeria                    \n",
            "                                                    \n",
            "✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦\n",
            "                                                    \n",
            "           1 - Cadastrar obra de arte            \n",
            "           2 - Listar todas obras de arte           \n",
            "           3 - Buscar obra de arte por código       \n",
            "           4 - Atualizar dados de obra de arte      \n",
            "           5 - Apagar registro de obra de arte      \n",
            "           6 - Comprar obra de arte                 \n",
            "           7 - Ver obra de arte                     \n",
            "           8 - Sair                                 \n",
            "                                                    \n",
            "✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦\n",
        );

        console.log('Digite a opção desejada: ');
        opcao = readlinesync.questionInt('', {limitMessage: 'Digite uma opção válida.'});

        if (opcao === 8) {
            console.log("               Obrigado por visitar a N.Art\n");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar obra de arte\n\n");
                break;
            case 2:
                console.log("\n\nListar todas obras de arte\n\n");
                break;
            case 3:
                console.log("\n\nListar todas obras de arte\n\n");
                break;
            case 4:
                console.log("\n\nListar todas obras de arte\n\n");
                break;
            case 5:
                console.log("\n\nListar todas obras de arte\n\n");
                break;
            case 6:
                console.log("\n\nListar todas obras de arte\n\n");
                break;
            case 7:
                console.log("\n\nListar todas obras de arte\n\n");
                break;
            default:
                console.log("Opção Inválida!");
        }
    }


}

export function sobre(): void {
    console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
    console.log("           Projeto Desenvolvido por: Natalia Gomes Taira ");
    console.log("          Generation Brasil - nataliagtaira@gmail.com");
    console.log("                 https://github.com/nataliataira");
    console.log("✦・┈・・・・・・・・・・・・・・・・・・・・・・・・・・・┈・✦");
}

main();