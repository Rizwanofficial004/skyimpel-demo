CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_no VARCHAR(255),
    address VARCHAR(255),
    country VARCHAR(255),
    bank_no VARCHAR(255),
    current_step INTEGER DEFAULT 1
);