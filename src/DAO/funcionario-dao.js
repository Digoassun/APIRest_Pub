import DAO from "./base-dao.js";

class StaffDAO extends DAO {
    static querySelectAll = 'SELECT * FROM STAFF'
    static querySelectLogin = 'SELECT * FROM STAFF WHERE login = ?'
    static querySelect = 'SELECT * FROM STAFF WHERE nome = ?'
    static queryInsert = 'INSERT INTO STAFF (nome, login, senha) VALUES (?,?,?)'
    static queryUpdate = 'UPDATE STAFF SET nome = ?, login = ?, senha = ? WHERE nome = ?'
    static queryDelete = 'DELETE FROM STAFF WHERE nome = ?'
    static paramDel = 'nome'
}

export default StaffDAO