import Validacoes from "../services/validacoes.js"
import ErrosModel from "./errors-model.js"

class StaffModel {
    constructor(dados) {
        this.nome = dados.nome
        this.login = dados.login
        this.senha = dados.senha
    }

    static validateModel(dados) {
        return new Promise(async (resolve, reject) => {
            try {
                if (
                    Validacoes.isString(dados.nome) &&
                    Validacoes.isString(dados.login)) {
                    const newModel = new StaffModel(dados)
                    await Validacoes.reqIsEmpty(newModel)
                    resolve(newModel)
                } else {
                    reject(
                        new ErrosModel("Dados preenchidos incorretamente", 400)
                    )
                }
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default StaffModel;