import Validacoes from '../services/validacoes.js'
import ErrosModel from './errors-model.js';

class MenuModel {
    constructor(requisicao) {
        this.produto = requisicao.produto;
        this.valor = requisicao.valor;
        this.descricao = requisicao.descricao;
        this.img = requisicao.img;
    }

    static validateModel(dados) {
        return new Promise(async (resolve, reject) => {
            try {
                if (Validacoes.isNumber(dados.valor) &&
                    Validacoes.isString(dados.produto) &&
                    Validacoes.isString(dados.img) &&
                    Validacoes.isString(dados.descricao)) {
                    const newModel = new MenuModel(dados)
                    await Validacoes.reqIsEmpty(newModel)
                    resolve(newModel)
                } else {
                    reject(
                        new ErrosModel("Alguns dados estão preenchidos incorretamente", 400)
                    )
                }
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default MenuModel;