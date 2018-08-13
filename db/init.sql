DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS listings;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    auth0_id VARCHAR,
    username VARCHAR unique not null,
    email VARCHAR unique not null
);

CREATE TABLE listings(
    id SERIAL PRIMARY KEY,
    image varchar(2083),
    name TEXT,
    price DECIMAL,
    description TEXT, 
    category TEXT,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id) 
)

INSERT INTO users(auth0_id, username, email)
VALUES(25, 'Terry', 'terry@email.com');

INSERT INTO users(auth0_id, username,  email)
VALUES (30, 'Sam', 'sam@email.com' );

INSERT INTO users(auth0_id, username, email)
VALUES (21, 'Jenny', 'Jenny@email.com');

INSERT INTO users(auth0_id, username, email)
VALUES(50, 'Sally',  'Sally@email.com');

--products


--clothes
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/397feb/1511440581/il_340x270.1511440581_f2km.jpg?version=1', 'Hex the Patriarchy Tshirt', 20, 'Graphic tshirt', 'clothes', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/13591442/r/il/705f4a/1296860880/il_570xN.1296860880_tvh7.jpg', 'Witch Tshirts', 15.99, 'Graphic Tshirts', 'clothes', '1');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/5318198/r/il/d679c2/1476165000/il_570xN.1476165000_d1n9.jpg', 'Forest Print Shirt', 28, 'Graphic Tshirt', 'clothes', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/f42781/1354127614/il_570xN.1354127614_60im.jpg?version=2', 'Ouija Tshirt', 22, 'Graphic Tshirt', 'clothes', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/9b5d76/1316637418/il_570xN.1316637418_dfsb.jpg?version=0', 'Witchy Leggings', 18, 'Creepy Whimsical Leggings ' '1')

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/17414993/r/il/9fb4d5/1478131100/il_570xN.1478131100_c8y0.jpg', 'Moon Chaser Tshirt', 17.99, 'Graphic Tshirt', 'clothes', '1');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/9db107/1189995777/il_340x270.1189995777_f2nj.jpg?version=2', 'Sun Moon Tshirt', 16.99, 'Graphic Tshirt', 'clothes', '4');


--crystals
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/f35073/1222887990/il_340x270.1222887990_2dts.jpg?version=0', 'Chakra Crystals set', 18, '11 pcs Healing Crystals and Stones Chakra Set / Purple Amethyst Cluster, Rose Quartz, and Clear Quartz Gemstone, 7 tumbled stones pendulum', 'crystals', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/13219579/r/il/730f8c/1011584660/il_570xN.1011584660_1kgt.jpg', 'Hand Cut Crystal Points', 17, '7 Chakra Double Terminated Point - Hand Cut Natural Stone Point for Crystal Healing Grids - 257', 'crystals', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/ea0c40/1589129217/il_570xN.1589129217_p7tp.jpg?version=0', 'Charoite Tumbled Stones', 9, 'Assortment of Charoite Tumbled Stones', 'crystals', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/5611525/r/il/c70fb5/1522274398/il_570xN.1522274398_179o.jpg', 'Assorted Crystals', 2.50, 'Mixed Random Assortment of Tumbled Healing Crytals', 'crystals', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/d9d165/1161129750/il_570xN.1161129750_6gkx.jpg?version=0', 'Poppy Jasper Tumbled Gemstone', 1.50, 'Poppy Jasper Tumbled Stone for Happiness, Mirth & Joy', 'crystals', '1');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/137a0d/1273613217/il_570xN.1273613217_sbj5.jpg?version=0','Dolomite Tumbled Gemstone', 4.50, 'Dolomite - Stone of Happiness, Romance & Inner Quiet', 'crystals', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/6d6a62/1240068208/il_570xN.1240068208_i581.jpg?version=0', 'Rose Quartz', 3.50, 'Rose Quartz Tumbled Gemstone - Stone of Love', 'crystals', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/5611525/r/il/59315e/1161173934/il_570xN.1161173934_3ra7.jpg', 'Strawberry Quartz', 2.25, 'Strawberry Quartz Tumbled Gemstone - Stone for Uncovering Hidden Information', 'crystals', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/5611525/r/il/4a9c72/1247074111/il_570xN.1247074111_ei9d.jpg', 'Blue Aragonite Tumbled Gemstone', 3, 'Blue Aragonite - Stone for Increasing the Power of Magic', 'crystals', '1');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/15096333/r/il/fa7e50/1552000005/il_570xN.1552000005_dkm3.jpg', 'Peacock Ore', 9, 'Chalcopyrite Peacock Ore Blue Purple Pink Silver-Mexico', 'crystals', '1');


--incense
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/10839823/r/il/91570f/1222962936/il_570xN.1222962936_igaq.jpg', 'Assorted Incense Sticks', 10, '100 incense sticks - 5 each of 20 scents plus 5 free bonus sticks', 'incense', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/2829e7/1394162284/il_570xN.1394162284_hpfe.jpg?version=1','Incense Holder', 5,  'Hand Crafted Wooden Ash Catcher Incense Holder Incense Burner','incense', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/16109439/r/il/34cd71/1383273491/il_570xN.1383273491_9z3v.jpg', 'Holy Wood Sticks', 15, 'Palo Santo bulk lot hand logged Holy Wood Sticks', 'incense', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/16109439/r/il/0deb70/1427980473/il_570xN.1427980473_bsb1.jpg', 'Sage Smudge Sticks', 5, 'Pack of 4 Blue Sage Smudge Bundles', 'incense', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/9362431/r/il/c1364c/1192829450/il_570xN.1192829450_iatf.jpg', 'Hamsa Incense Holder', 5, 'Wooden Hamsa Incense Burner',  'incense', '1');



--tarot cards
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/17809349/r/il/8d7d11/1593238405/il_570xN.1593238405_nhku.jpg', 'Golden Universal Tarot Cards', 50, 'Golden Universal Tarot Cards Custom Oracle Deck', 'tarot', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/aa09e4/1531937219/il_570xN.1531937219_r158.jpg?version=0', 'Vintage Rider Waite Tarot Deck', 50, 'Original Rider Wait Tarot Cards Vintage Set', 'tarot', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/9096466/r/il/cffc41/741511621/il_570xN.741511621_lva6.jpg', 'Printable Tarot Cards', 4, 'Print your Own Tarot Cards', 'tarot', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/15386645/r/il/aa9362/1361442594/il_570xN.1361442594_k2ah.jpg', 'Fairest of Them All Tarot Deck', 10, 'Fairest of them all tarot card pack', 'tarot', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/560a02/1542306400/il_570xN.1542306400_t12s.jpg?version=0', 'Amulet - Tarot Card', 15, 'Amulet - Tarot Card the Fool', 'tarot', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/15245990/r/il/c0f9d9/1559289498/il_570xN.1559289498_fgyk.jpg', 'Ouiji Tarot Bag', 12, 'Brown Ouija Tarot Bag, Pagan Supplies', 'tarot', '1');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/6414a0/1060933510/il_570xN.1060933510_4590.jpg?version=0', 'Tarot Cards Box', 16, 'Lovers Tarot Cards Stash Box', 'tarot', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/12314117/r/il/6084e6/1558803731/il_570xN.1558803731_jmgu.jpg', 'Tarot iphone case', 15, 'Moon Tarot card iphone Case', 'tarot', '2'); 



--Jewelry
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/5221723/r/il/f3b44c/1541699678/il_570xN.1541699678_5903.jpg', 'Crescent Moon Necklace', 30, 'Wiccan Jewelry Crescent Moon Necklace', 'jewelry', '1');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/9921355/r/il/62b3ab/1537253091/il_570xN.1537253091_a9tt.jpg', 'Sun & Moon Earrings', 12, 'Sunstone Moonstone Sun & Moon Celestial Earrings', 'jewelry', '3' );

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/842e5b/1051968378/il_570xN.1051968378_c1xx.jpg?version=0', 'Opal Chain Choker', 30, 'Opal Silver Triple Chain Choker', 'jewelry', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/13608417/r/il/9cb66c/1317313790/il_570xN.1317313790_bh4k.jpg', 'Crystal Ring', 10, 'Wire Wrapped Crystal Ring', 'jewelry', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 


INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 



--Other
INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/a0f4da/1405328899/il_570xN.1405328899_362r.jpg?version=1', 'Crystal Grids', 10, 'Sacred Geometry Mini Crystal Grids', 'other', '2');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://img.etsystatic.com/il/a7af51/1583453645/il_570xN.1583453645_h10s.jpg?version=0', 'Himalayan Salt Decor', 28, 'Himalayan Salt & Air Plant Metaphysical Decor', 'other', '3');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES ('https://i.etsystatic.com/10739249/r/il/6463d6/1511642275/il_570xN.1511642275_pabz.jpg', 'Triple Moon Journal', 18, 'Triple Moon Symbol Paper Journal Wicca', 'other', '4');

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

INSERT INTO listings(image,name,price,description,category,user_id)
VALUES 

