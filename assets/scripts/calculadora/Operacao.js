export default class Operacao {
    operacao;
    onCalculado;
    constructor(opts, operacao = []) {
        this.operacao = operacao;
    }
    adicionar(valor) {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        this.operacao.push(valor);
        console.log(this.operacao);
        return this.length;
    }
    obterResultado() {
        let resultado;
        try {
            resultado = (eval(this.operacao.join(""))).toString();
        }
        catch (e) {
            resultado = "erro";
        }
        return resultado;
    }
    calcular() {
        let resultado = this.obterResultado();
        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
    set ultimaPosiçao(valor) {
        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;
        this.operacao[ultimoIndex] = valor;
    }
    get length() {
        return this.operacao.length;
    }
}
//# sourceMappingURL=Operacao.js.map