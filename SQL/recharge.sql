CREATE TABLE telefones (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    carrier VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

