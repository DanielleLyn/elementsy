INSERT INTO users(auth0_id, username, email)
VALUES(${auth0_id}, ${username}, ${email})
RETURNING *;


