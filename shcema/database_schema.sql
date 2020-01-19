DROP DATABASE IF EXISTS loungedb;
-- Creates the "blogger" database --
CREATE DATABASE loungedb;

USE loungedb;

CREATE TABLE users (
  id Int( 1000 ) AUTO_INCREMENT NOT NULL,
  username VARCHAR( 255) NOT NULL,
  password VARCHAR( 255 ) NOT NULL,
active boolean,
  PRIMARY KEY ( id ) 
);

CREATE TABLE sessions (
  id Int( 1000 ) AUTO_INCREMENT NOT NULL,
active boolean,
  PRIMARY KEY ( id ) 
);


CREATE TABLE lounge (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  name VARCHAR( 255) NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  PRIMARY KEY ( id ) 
);

CREATE TABLE song (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  title VARCHAR( 255) NOT NULL,
  source VARCHAR(255) NOT NULL,
  votes INT(1000) NOT NULL,
user_id  int(1000),
  PRIMARY KEY ( id ) 
);

CREATE TABLE playlist (
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
active boolean,
  PRIMARY KEY ( id ) 
);