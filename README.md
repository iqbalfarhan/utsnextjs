# Ujian tengah semester framework NextJS

1. clone aplikasi ini dengan menjalankan perintah berikut:

```sh
git clone https://github.com/iqbalfarhan/utsnextjs.git
```

2. lalu jalankan perintah berikut untuk menginstall dependencies

```sh
pnpm install
```

3. kemudian buat sebuah branch baru dengan nama branch sesuai dengan nama kalian dengan menjalankan perintah berikut:

```sh
git checkout -b uts/namapersertaujian
```

4. lalu jalankan perintah berikut untuk menjalankan aplikasi

```sh
pnpm dev
```

5. aplikasi ini sudah diinstall prisma orm sehinggga tidak perlu menginstall prisma secara manual. bila file .env tidak ada, silahkan buat file .env dan isi dengan data berikut:

```
DATABASE_URL="mysql://root:@localhost:3306/utsnextjs"
```
