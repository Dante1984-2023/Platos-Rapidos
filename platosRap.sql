create database platosRap;
use platosRap;


create table productos(
idProducto int unsigned not null auto_increment,
Posicion int not null,
nombre varchar(150) not null,
descripcion varchar(200) not null,
precio int not null,
primary key (idProducto)
);

create table pedido(
idPedido int unsigned not null auto_increment,
Posicion int not null,
direccion varchar(200) not null,
primary key (idPedido)
);

create table contactos(
idContacto int unsigned not null auto_increment,
nombre varchar(150) not null,
Email varchar(150) not null,
primary key (idContacto)
);
