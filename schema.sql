DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments(
 p_id INT,
 c_id SERIAL,
 year INT,
 month INT,
 day INT,
 message TEXT,
 PRIMARY KEY(p_id,c_id)
);
