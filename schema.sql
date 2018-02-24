DROP DATABASE IF EXISTS `aarc_db`;
CREATE DATABASE `aarc_db`;

USE aarc_db

CREATE TABLE business_category (
    id int NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    business_name VARCHAR(50) NOT NULL,
    business_category VARCHAR(50) NOT NULL,
    city_dept VARCHAR(50) NOT NULL,
    sub_category1 VARCHAR(50) NOT NULL,
    --sub_category2 VARCHAR(50),
    --sub_category3 VARCHAR(50),
    --sub_category4 VARCHAR(50),
    ethnicity VARCHAR(50) NOT NULL,
    ethnicity2 VARCHAR(50),
    --ethnicity3 VARCHAR(50),
    street_address VARCHAR(100) NOT NULL,
    business_city VARCHAR(50) NOT NULL,
    business_state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    business_email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    business_name VARCHAR(50) NOT NULL,
    main_contact VARCHAR(50) NOT NULL,
    contact_title VARCHAR(50) NOT NULL,
    contact_phone VARCHAR(50) NOT NULL,
    contact_email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
 )