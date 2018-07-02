/* 5. How many films are rated R and have a replacement cost between $5 and $15? */

SELECT COUNT(*) FROM film
WHERE rating = 'R' AND replacement_cost BETWEEN 5 AND 15