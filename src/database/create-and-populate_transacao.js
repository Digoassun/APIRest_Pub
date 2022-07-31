import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath);

const TRANSACTIONS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TRANSACTIONS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "funcionario" varchar(64),
    "produtos" varchar(64),
    "valorCompra" int,
    "data" date
  );`;

const ADD_TRANSACTIONS_DATA = `
INSERT INTO TRANSACTIONS (funcionario,produtos,valorCompra,data)
VALUES 
    ('Kleberr Knob', 'Drink de fogo, Caninha da serra, Batata gourmet', 1400, '10/04/2022'),
    ('Kleberr Knob', 'Caninha da serra, Shot de ices', 3000, '10/04/2022'),
    ('Flavio Mustang', 'Drink de fogo, Canitina da roça,Hamburguer gourmet', 5000, '11/04/2022')
`;

const criaTabelaTransactions = () => {
  db.run(TRANSACTIONS_SCHEMA, (e) => {
    if (e) console.log(e);
    else console.log("Tabela criada com sucesso");
  });
};

const populaTabelaTransactions = () => {
  db.run(ADD_TRANSACTIONS_DATA, (e) => {
    if (e) console.log(e)
    else console.log("Tabela populada com sucesso!");
  });
};

db.serialize(() => {
  criaTabelaTransactions();
  populaTabelaTransactions();
});
