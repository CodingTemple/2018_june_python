/* 1. Find how many payment transactions were greater than $5.00 */

SELECT count(*) FROM payment
WHERE amount > 5.00
