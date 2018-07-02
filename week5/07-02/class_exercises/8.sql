/* 8. How many actors start with the letter D and have at least 3 characters in their name? */

SELECT * FROM actor
WHERE first_name LIKE 'D__%'