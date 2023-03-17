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
        "descricao" varchar(255),
        "img" varchar(255)
    );`;
    static ADD_MENU_DATA = `
    INSERT INTO MENU (produto,valor,descricao,img)
    VALUES
        ('caipirinha', 10.50, 'Drink de limão com cachaça 51 e açucar', 'https://user-images.githubusercontent.com/102765815/187473638-d69f65ab-443b-4acb-8f8e-9d3ac1fa6ca3.png'),
        ('gin & tônica', 20.50, 'Seagers com gelo, limão e água tônica', 'https://user-images.githubusercontent.com/102765815/187473641-38a446e5-471e-4de1-80d1-08150070602d.png'),
        ('brahma', 8.00,'Pilsen, 600ml', 'https://user-images.githubusercontent.com/102765815/187473642-be2eaff0-6935-4272-885d-46197037cca6.png'),
        ('skol', 8.00,'Pilsen, 600ml', 'https://user-images.githubusercontent.com/102765815/187473613-526077ca-5f95-411c-8919-2554b4f551c6.png'),
        ('heineken', 10.00,'Pilsen, 600ml', 'https://user-images.githubusercontent.com/102765815/187473619-89479dda-1d71-496a-85cb-9c9e3a9e9f51.png'),
        ('original', 10.00,'Pilsen, 600ml', 'https://user-images.githubusercontent.com/102765815/187473622-468b8f5d-71f8-47d1-8736-f373dd5d3a66.png'),
        ('eisenbahn', 11.00,'Pilsen, 600ml', 'https://user-images.githubusercontent.com/102765815/187473624-08c0d3f4-165a-42bc-82ce-e37957f04ddf.png'),
        ('batata frita', 20.00,'Uma porçao de 500 gramas de batata frita', 'https://user-images.githubusercontent.com/102765815/187473626-80597463-de4a-4ec1-8cd2-0fc2b79c0c3d.png'),
        ('calabresa acebolada', 25.00,'Uma porçao de 400 gramas de calabresa com cebola frita', 'https://user-images.githubusercontent.com/102765815/187473629-5dab1b1c-6561-449a-a450-7e6cec2ad3bd.png'),
        ('frango a passarinho', 35.00,'Uma porçao de 500 gramas de frango com alho frito', 'https://user-images.githubusercontent.com/102765815/187473632-270f7eba-1ce6-4c61-bcee-a4818083d37a.png'),
        ('coca-Cola', 5.00,'Lata 350ml', 'https://user-images.githubusercontent.com/102765815/187473633-c83ccda7-3102-46fa-abd9-d138acd27c80.png'),
        ('água sem gás', 3.00,'Água mineral', 'https://user-images.githubusercontent.com/102765815/187473636-e2171a30-478c-457a-a27f-0f63199f9904.png')
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