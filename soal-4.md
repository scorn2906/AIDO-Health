## 4. SQL : Cari Pengguna Aktif Terbanyak

`Tabel users(id, name) dan logins(id, user_id, login_at)`

Tugas:
Tulis query untuk menampilkan 3 pengguna dengan login terbanyak 30 hari terakhir

Jawaban:

```sql
select u.id, u.name, count(l.login_at::date) as count
from users u
join logins l
on u.id = l.user_id
where l.login_at >= now() - interval '30 day'
group by u.id order
by count desc

```
