# Ujian tengah semester framework NextJS

Aplikasi ini adalah aplikasi ujian tengah semester untuk mata kuliah framework nextjs. aplikasi ini dibuat dengan menggunakan NextJS, TailwindCSS, Prisma ORM, dan PostgreSQL. aplikasi ini dibuat dengan tujuan untuk memenuhi tugas ujian tengah semester mata kuliah framework nextjs.

Pada ujian tengah semester ini, kalian diminta untuk membuat aplikasi berbasis web dengan fitur CRUD data kelas dan data mahasiswa menggunakan NextJS, TailwindCSS, Prisma ORM, dan PostgreSQL.

## Instalasi dan konfigurasi

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

4. aplikasi ini sudah diinstall prisma orm sehinggga tidak perlu menginstall prisma secara manual. bila file `.env` tidak ada, silahkan buat file `.env` dan isi dengan data berikut. kemudian sesuaikan dengan konfigurasi database yang kalian gunakan

   ```
   DATABASE_URL="mysql://root:@localhost:3306/utsnextjs"
   ```

## Cara menjalankan aplikasi

Jalankan perintah berikut untuk menjalankan aplikasi

```sh
pnpm dev
```

## Ketentuan mengerjakan ujian

Berikut ini adalah ketentuan yang harus dipenuhi oleh peserta ujian saat mengerjakan ujian ini.

1. file page.tsx sudah disediakan, silahkan gunakan file yang sudah disediakan untuk membuat aplikasi yang kalian inginkan
2. peserta diperbolehkan untuk menambah file baru jika diperlukan
3. silahkan isi data peserta pada file page.ts (isi nama, nim, kelas, dan email)
4. silahakan gunakan SSR atau CSR sesuai dengan kebutuhan kalian
5. Gunakan prisma ORM untuk melakukan query ke database
6. model kelas berisi:
   1. id: string
   2. nama: string
7. model mahasiswa berisi:
   1. id: string
   2. nama: string
   3. nim: string
   4. kelas: string
8. bila sudah selesai mengerjakan ujian, silahan commit dan push ke branch yang sudah kalian buat
9. sebelum melakukan commit dan push, pastikan branch aktif adalah branch yang sudah kalian buat
