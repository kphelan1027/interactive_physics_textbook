---
track: technical
session: 2
title: "GROUP BY — counting by dimension"
date: 2026-03-23
tags: [sql, group-by, aggregation, having, cipher, technical]
visual: /assets/2026-03-23-sql-group-by-session-2.png
visual_caption: "GROUP BY sorts rows into piles by a column's unique values, then applies an aggregation to each pile."
reuse: public
open_question_answered: false
---

# Technical — Session 2: GROUP BY — counting by dimension

> *The single most useful SQL technique for anyone reading business data.*

---

## Where we left off

Session 1: SELECT, FROM, WHERE, COUNT. You can ask "how many annual subscribers do we have?" with `COUNT(*)`.

Now the question is: what if you want that count *broken down by type*? Separate numbers for annual, monthly, and free?

---

## The simplest true statement

`GROUP BY` splits your rows into piles — one pile per unique value in a column — then applies an aggregation to each pile.

---

## Without GROUP BY vs with GROUP BY

**Without (one number):**
```sql
SELECT COUNT(*)
FROM subscriptions
```
Returns: `50,000`

**With GROUP BY (one number per plan type):**
```sql
SELECT plan_type, COUNT(*)
FROM subscriptions
GROUP BY plan_type
```
Returns:

| plan_type | COUNT(*) |
|-----------|----------|
| annual    | 18,432   |
| monthly   | 24,109   |
| free      | 7,459    |

---

## The mental model

Imagine physically sorting 50,000 index cards (one per subscriber) into three piles on a table — annual, monthly, free. Then counting each pile. That's all GROUP BY does.

---

## Adding SUM — the revenue version

```sql
SELECT plan_type, COUNT(*), SUM(price_usd)
FROM subscriptions
GROUP BY plan_type
```

| plan_type | COUNT(*) | SUM(price_usd) |
|-----------|----------|----------------|
| annual    | 18,432   | $1,657,884     |
| monthly   | 24,109   | $240,507       |
| free      | 7,459    | $0             |

One query. Three dimensions of truth. This is 90% of what Cipher runs for Gina's revenue reports.

---

## HAVING — filtering on the result

`WHERE` filters rows *before* grouping. `HAVING` filters *after*.

Example: "Show me only plan types with more than 10,000 subscribers":

```sql
SELECT plan_type, COUNT(*)
FROM subscriptions
GROUP BY plan_type
HAVING COUNT(*) > 10000
```

Rule of thumb:
- `WHERE` = filters rows → use before the GROUP
- `HAVING` = filters groups → use after the GROUP

---

## A real Memrise use case

"Show me monthly revenue by country, but only for countries with more than £5,000 in revenue":

```sql
SELECT country, SUM(price_gbp) AS monthly_revenue
FROM subscriptions
WHERE started_at >= '2026-03-01'
GROUP BY country
HAVING SUM(price_gbp) > 5000
ORDER BY monthly_revenue DESC
```

This is the kind of query behind every pivot table in Cipher's reports.

---

## Three concepts to remember

1. `GROUP BY` sorts rows into piles — one per unique value — then aggregates each pile
2. `SUM`, `COUNT`, `AVG` are the things you do to each pile
3. `WHERE` filters before grouping; `HAVING` filters after

---

## Open Question

> Here's a Memrise scenario. You have a `subscriptions` table with columns: `user_id`, `country`, `plan_type`, `price_gbp`, `started_at`.
>
> Write a query that answers: **"How much total revenue did we generate per country in March 2026, ranked highest to lowest?"**
>
> You have all the building blocks. What does the query look like?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- `JOIN` — connecting two tables together (subscriptions + users)
- Why JOINs matter: most interesting questions require data from more than one table
- The primary key / foreign key relationship
