/* 9. How many category_ids do we have - give both the name of the category and the category_id? */

SELECT DISTINCT category_id, name from category
GROUP BY category_id
ORDER BY category_id ASC
