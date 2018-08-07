UPDATE listings
SET name = ${name},
image = ${image},
price = ${price},
description = ${description},
category = ${category}
WHERE id = ${id};

SELECT * FROM listings

