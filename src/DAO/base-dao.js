import DB from "../database/db-sqlite.js";
import ErrosModel from "../model/errors-model.js";
import Validacoes from "../services/validacoes.js";

class DAO {
  static pickAllData() {
    return new Promise((resolve, reject) => {
      DB.all(this.querySelectAll, (erro, linhas) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else if (Validacoes.isEmpty(linhas)) {
          reject(new ErrosModel("Banco de dados vazio", 404));
        } else {
          resolve({

            resultado: {
              msg: {
                msg: "Aqui estão seus dados",
                dados: linhas,
              },
            },
            status: 200,
          });
        }
      });
    });
  }

  static dataPickOne(comparador) {
    return new Promise((resolve, reject) => {
      DB.get(this.querySelect, comparador, (erro, linhas) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else if (Validacoes.isEmpty(linhas)) {
          reject(new ErrosModel("Dados não encontrados", 404));
        } else {
          resolve({
            resultado: {
              msg: {
                msg: "Aqui estão seus dados",
                dados: linhas,
              },
            },
            status: 200,
          });
        }
      });
    });
  }
  
  static dataPickOneAlternative(comparador) {
    return new Promise((resolve, reject) => {
      DB.get(this.querySelectLogin, comparador, (erro, linhas) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else if (Validacoes.isEmpty(linhas)) {
          reject(new ErrosModel("Dados não encontrados", 404));
        } else {
          resolve({
            resultado: {
              msg: {
                msg: "Aqui estão seus dados",
                dados: linhas,
              },
            },
            status: 200,
          });
        }
      });
    });
  }

  static insertData(dados) {
    return new Promise((resolve, reject) => {
      DB.run(this.queryInsert, ...Object.values(dados), (erro) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else {
          resolve({
            resultado: {
              msg: {
                msg: "dados inseridos com sucesso",
                dados: dados,
              },
            },
            status: 201,
          });
        }
      });
    });
  }

  static attData(dados, comparador) {
    return new Promise((resolve, reject) => {
      DB.run(this.queryUpdate, ...Object.values(dados), comparador, (erro) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else {
          resolve({
            resultado: {
              msg: {
                msg: "Dados atualizados com sucesso",
              },
            },
            status: 200,
          });
        }
      });
    });
  }

  static delData(parametro) {
    return new Promise((resolve, reject) => {
      DB.run(this.queryDelete, parametro, (erro) => {
        if (erro) {
          reject(new ErrosModel("Erro desconhecido", 500, erro));
        } else {
          resolve({
            resultado: {
              msg: {
                msg: `Dados deletados com sucesso onde ${this.paramDel} = ${parametro}`,
              },
            },
            status: 200,
          });
        }
      });
    });
  }
}

export default DAO;