import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import tela from "./tela.js";
export default class CalculadoraControle {
    Tela;
    operacao;
    constructor(Tela = new tela(), operacao = new Operacao({
        onCalculado: (resultado) => {
            this.Tela.conteudo = resultado;
        }
    })) {
        this.Tela = Tela;
        this.operacao = operacao;
        new DataHora();
        this.eventosBotoes();
    }
    eventosBotoes() {
        document.querySelectorAll("#teclado button").forEach(elemento => {
            elemento.addEventListener("click", (evento) => {
                const target = evento.target;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.adicionarNumero(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "divisao":
                    case "multiplicacao":
                        this.adicionarOperador(target.dataset.valor);
                        break;
                    case "ponto":
                        break;
                    case "limpar":
                        break;
                    case "desfazer":
                        break;
                    case "porcentagem":
                        break;
                    case "igual":
                        this.calcular();
                        break;
                }
            });
        });
    }
    calcular() {
        this.operacao.calcular();
    }
    adicionarOperacao(valor) {
        this.operacao.adicionar(valor);
        console.log(this.operacao.length);
    }
    adicionarNumero(numero) {
        if (isNaN(Number(this.operacao.ultimaPosiçao))) {
            this.adicionarOperacao(numero.toString());
        }
        else {
            numero = Number(this.operacao.ultimaPosiçao.toString() + numero.toString);
            this.operacao.ultimaPosiçao = numero.toString();
        }
        this.Tela.conteudo = numero.toString();
    }
    adicionarOperador(operador) {
        if (isNaN(Number(this.operacao.ultimaPosiçao))) {
            this.operacao.ultimaPosiçao = operador;
        }
        else {
            if (this.operacao.length === 0) {
                this.adicionarOperacao("0");
            }
            this.adicionarOperacao(operador);
        }
        this.adicionarOperacao(operador);
    }
}
//# sourceMappingURL=CalculadoraControle.js.map