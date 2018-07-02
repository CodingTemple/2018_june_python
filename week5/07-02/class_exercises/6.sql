/* 6. How many films have the word ‘Truman’ somewhere in the title? */

SELECT count(*) FROM film
WHERE title LIKE '%Truman%'