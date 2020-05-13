DROP DATABASE IF EXISTS ShoppingComments;
DROP USER IF EXISTS ShoppingComments_user@localhost;

CREATE DATABASE ShoppingComments CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER ShoppingComments_user@localhost IDENTIFIED BY '@HOPE9les2LEE5slim$CHANCE';
GRANT ALL PRIVILEGES ON ShoppingComments.* TO ShoppingComments_user@localhost;
