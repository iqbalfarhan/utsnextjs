# Ujian tengah semester framework NextJS

Aplikasi ini adalah aplikasi ujian tengah semester untuk mata kuliah framework nextjs. aplikasi ini dibuat dengan menggunakan NextJS, TailwindCSS, ShadcnUI, Prisma ORM, dan MySQL. aplikasi ini dibuat dengan tujuan untuk memenuhi tugas ujian tengah semester mata kuliah framework nextjs.

Pada ujian tengah semester ini, kalian diminta untuk membuat aplikasi berbasis web dengan fitur CRUD data kelas dan data mahasiswa.

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

sebelum mulai mengerjakan ujian ini, pasikan service mysql sudah dijalankan dan jalankan perintah berikut untuk menjalankan aplikasi

```sh
pnpm dev
```

lakukan push schema database dengan menjalankan perintah berikut

```sh
pnpx prisma db:push
```

## Ketentuan mengerjakan ujian

Berikut ini adalah ketentuan yang harus dipenuhi oleh peserta ujian saat mengerjakan ujian ini.

1. File page.tsx sudah disediakan, silahkan gunakan file yang sudah disediakan untuk membuat aplikasi yang kalian inginkan. peserta diperbolehkan untuk menambah file baru jika diperlukan.
2. Sebagai awalan, silahkan isi data peserta pada file `app/page.tsx` (isi nama, nim, kelas, dan email)
3. Silahakan gunakan SSR atau CSR sesuai dengan kebutuhan kalian
4. Gunakan prisma ORM untuk melakukan query ke database
   - model kelas berisi: id, nama
   - model mahasiswa berisi: id, nama, nim, kelas_id (merupakan relasi dari model kelas)
5. Peserta diperbolehkan untuk menggunakan menambahkan fitur tambahan seperti pencarian dan sorting data
6. Peserta diperbolehkan untuk berkreasi mengubah tampilan halaman web sesuai dengan keinginan

## Contoh tampilan data pada halaman web kelas dan mahasiswa

1.  table data kelas

    | id  | nama kelas | action      |
    | --- | ---------- | ----------- |
    | 1   | ASE 02     | edit delete |
    | 2   | ASE 03     | edit delete |
    | 3   | ASE 04     | edit delete |

2.  table data mahasiswa

    | id  | NIM        | nama mahasiswa       | nama kelas | action      |
    | --- | ---------- | -------------------- | ---------- | ----------- |
    | 1   | 1234567890 | iqbal farhan syuhada | ASE 02     | edit delete |
    | 2   | 1234567891 | muhammad alif        | ASE 02     | edit delete |
    | 3   | 1234567892 | fakhri nur ismayadi  | ASE 02     | edit delete |

## Pengumpulan ujian

- bila sudah selesai mengerjakan ujian, silahan commit dan push ke branch yang sudah kalian buat
- sebelum melakukan commit dan push, pastikan branch aktif adalah branch yang sudah kalian buat. gunakan perintah berikut untuk melihat branch aktif
  ```sh
  git branch
  ```
- jika branch aktif bukan branch yang sudah kalian buat, silahkan gunakan perintah berikut untuk berpindah ke branch yang sudah kalian buat dengan perintah berikut
  ```sh
  git checkout uts/namapersertaujian
  ```
