create table contacts(
    id int primary key,
    name varchar(250) not null,
    phone varchar(15) not null,
    email varchar(100) not null,
    dob date 
)