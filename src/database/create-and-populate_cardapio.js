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

class MenuDb {
    static MENU_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "MENU" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,    
        "produto" varchar(64),
        "valor" int,
        "descricao" varchar(255)
    );`;
    static ADD_MENU_DATA = `
    INSERT INTO MENU (produto,valor,descricao)
    VALUES 
        ('caipirinha', 10.50, 'Drink de limão com cachaça 51 e açucar'),
        ('gin & tônica', 20.50, 'Seagers com gelo, limão e água tônica'),
        ('brahma', 8.00,'Pilsen, 600ml'),
        ('skol', 8.00,'Pilsen, 600ml'),
        ('heineken', 10.00,'Pilsen, 600ml'),
        ('original', 10.00,'Pilsen, 600ml'),        
        ('eisenbahn', 11.00,'Pilsen, 600ml'),
        ('batata frita', 20.00,'Uma porçao de 500 gramas de batata frita'),
        ('calabresa acebolada', 25.00,'Uma porçao de 400 gramas de calabresa com cebola frita'),
        ('frango a passarinho', 35.00,'Uma porçao de 500 gramas de frango com alho frito'),
        ('coca-Cola', 5.00,'Lata 350ml'),
        ('água sem gás', 3.00,'Água mineral')
    `;
    static criaTabelaMenu = () => {
        db.run(this.MENU_SCHEMA, (e) => {
            if (e) console.log(e);
            else console.log("Tabela cardapio criada com sucesso");
        });
    };
    static populaTabelaMenu = () => {
        db.run(this.ADD_MENU_DATA, (e) => {
            if (e) console.log(e)
            else console.log("Tabela cardapio populada com sucesso!");
        });
    };
    static menuSerialize() {
        db.serialize(() => {
            this.criaTabelaMenu();
            this.populaTabelaMenu();
        });
    }
}


export default MenuDb