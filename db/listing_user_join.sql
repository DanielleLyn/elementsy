select * from listings l 
inner join users u 
on l.user_id = u.id
where u.id=$1