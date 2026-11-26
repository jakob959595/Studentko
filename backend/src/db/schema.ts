import db from './database.js';
db.exec(`
        CREATE TABLE IF NOT EXISTS class(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        class_id INT,
        FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS subjects(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        short TEXT,
        class_id INT,
        FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS tasks(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT NOT NULL, 
        deadline TEXT NOT NULL,
        class_id INT,
        user_id INT,
        subject_id INT,
        FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE

        );
    `);