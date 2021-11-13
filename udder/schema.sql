DROP DATABASE IF EXISTS 'udder';
CREATE DATABASE 'udder';

CREATE TABLE 'udders' (
    'id' Int( 15 ) AUTO_INCREMENT NOT NULL,
    'author' VARCHAR( 255 ) NOT NULL, 
    'body' VARCHAR( 255 ) NOT NULL,
    'created_at' DATETIME NOT NULL,

    PRIMARY KEY ( 'id' )
);