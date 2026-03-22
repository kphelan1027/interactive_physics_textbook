---
track: technical
session: 1
title: "What is SQL?"
date: 2026-03-21
tags: [sql, databases, data, cipher, technical]
visual: true
reuse: public
open_question_answered: false
---

# Technical — Session 1: What is SQL?

> *The language Cipher speaks, from first principles.*

---

## The simplest true statement

SQL is a language for asking questions of a table.

That's it. Everything else — joins, aggregations, subqueries — is just elaboration on that one idea.

---

## Why this matters

Cipher talks to Kevin in results. Knowing SQL means Kevin can say "show me that same number broken down by country" instead of asking Cipher to run it again. It means reading Cipher's queries and spotting if something looks off.

---

## What a table actually is

A database table is a spreadsheet with one strict rule: every column has exactly one type of thing. No mixed types, no merged cells, no colour coding. Just rows and columns of typed data.

Memrise has hundreds of them. Example:

```
user_id  |  plan_type  |  started_at  |  price_usd
---------|-------------|--------------|------------
1001     |  annual     |  2025-09-14  |  89.99
1002     |  monthly    |  2026-01-03  |  9.99
1003     |  annual     |  2025-11-22  |  89.99
```

---

## Your first SQL query

```sql
SELECT *
FROM subscriptions
```

- `SELECT` = "give me these columns" (`*` = all of them)
- `FROM` = "from this table"

---

## Filtering: the WHERE clause

```sql
SELECT *
FROM subscriptions
WHERE plan_type = 'annual'
```

Returns only rows where plan_type is annual.

---

## Counting: your first aggregation

```sql
SELECT COUNT(*)
FROM subscriptions
WHERE plan_type = 'annual'
```

Returns: `2`

---

## Three concepts to remember

1. A database is a collection of typed tables
2. `SELECT` + `FROM` + `WHERE` covers 80% of what you'll ever need to read
3. `COUNT`, `SUM`, `AVG` are aggregations — they collapse many rows into one number

---

## Visual Aid

![[../assets/2026-03-21-sql-session-1.png]]

---

## Open Question

> Memrise's subscription table has 50,000+ active rows. Write a query to find the total revenue from annual subscribers in January 2026. You already have all the pieces — what would you add?

**Kevin's answer:** _(not yet provided)_

---

## Next session builds on

- `SUM` vs `COUNT`
- `GROUP BY` (breaking results down by a dimension)
- Joining two tables together (e.g. subscriptions + users)
