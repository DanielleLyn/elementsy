DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS listings;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    auth0_id VARCHAR,
    username VARCHAR unique not null,
    password  VARCHAR not null,
    email VARCHAR unique not null
)

CREATE TABLE listings(
    id SERIAL PRIMARY KEY,
    image varchar(2083),
    name TEXT,
    price INTEGER,
    description TEXT, 
    category TEXT,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id) 
)

INSERT INTO users(auth0_id, username, password, email)
VALUES(25, 'Terry', 'password', 'terry@email.com');

INSERT INTO users(auth0_id, username, password, email)
VALUES (30, 'Sam', 'password', 'sam@email.com' );

INSERT INTO users(auth0_id, username, password, email)
VALUES (21, 'Jenny', 'password', 'Jenny@email.com');

INSERT INTO users(auth0_id, username, password, email)
VALUES(50, 'Sally', 'password', 'Sally@email.com');

--products


--clothes
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/397feb/1511440581/il_340x270.1511440581_f2km.jpg?version=1', 'hex the patriarchy tshirt', '$20', 'graphic tshirt', 'clothes', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/13591442/r/il/705f4a/1296860880/il_570xN.1296860880_tvh7.jpg', 'witch tshirts', '$15.99', 'graphic tshirts', 'clothes', 1);

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/5318198/r/il/d679c2/1476165000/il_570xN.1476165000_d1n9.jpg', 'forest print shirt', '$28', 'graphic tshirt', 'clothes', 2);

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/f42781/1354127614/il_570xN.1354127614_60im.jpg?version=2', 'Ouija tshirt', '$22', 'graphic tshirt', 'clothes', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 


--crystals
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 


--incense
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 


--tarot cards
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 



--Jewelry
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 


--Other
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

