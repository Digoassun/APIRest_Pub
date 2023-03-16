import StaffDAO from "../DAO/funcionario-dao.js";
import StaffModel from "../model/funcionario-model.js";
import Validacoes from "../services/validacoes.js";

class StaffControllers {
    static routes = (app) => {
        app.get("/staff", async (req, res) => {
            try {
                const resposta = await StaffDAO.pickAllData()
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });

        app.get("/staff/nome/:nome", async (req, res) => {
            try {
                const resposta = await StaffDAO.dataPickOne(req.params.nome)
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });

        app.get("/staff/login/:login", async (req, res) => {
            try {
                const resposta = await StaffDAO.dataPickOneAlternative(req.params.login)
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });

        app.post("/staff", async (req, res) => {
            try {
                const dados = await StaffModel.validateModel(req.body);
                const resposta = await StaffDAO.insertData(dados)
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });

        app.put("/staff/nome/:nome", async (req, res) => {
            try {
                const dados = await StaffModel.validateModel(req.body);
                await Validacoes.notInBank(await StaffDAO.dataPickOne(req.params.nome));
                const resposta = await StaffDAO.attData(dados, req.params.nome);
                res.status(resposta.status).json(resposta.resultado.msg);
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        });

        app.delete("/staff/nome/:nome", async (req, res) => {
            try {
                await Validacoes.notInBank(await StaffDAO.dataPickOne(req.params.nome));
                const resposta = await StaffDAO.delData(req.params.nome);
                res.status(resposta.status).json(resposta.resultado.msg)
            } catch (error) {
                res.status(error.status).json(error.msg);
            }
        })


    };
}

export default StaffControllers;