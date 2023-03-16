import sqlite3 from "sqlite3";
import {
  dirname
} from "path";
import {
  fileURLToPath
} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
  import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

class StaffDb {
  static STAFF_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "STAFF" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "login" varchar(64),
    "senha" varchar(64)
    );`;
  static ADD_STAFF_DATA = `
    INSERT INTO STAFF (nome, login, senha)
    VALUES 
        ('MASTER', 'gestora', 'Gestora@123')
    `;

  static criaTabelaStaff() {
    db.run(this.STAFF_SCHEMA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela funcionários criada com sucesso");
    });
  }
  static populaTabelaStaff() {
    db.run(this.ADD_STAFF_DATA, (e) => {
      if (e) console.log(e);
      else console.log("Tabela funcionários populada com sucesso!");
    });
  }
  static staffSerialize() {
    db.serialize(() => {
      this.criaTabelaStaff();
      this.populaTabelaStaff();
    });
  }
}

export default StaffDb;