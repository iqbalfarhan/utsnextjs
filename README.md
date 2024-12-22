# Ujian tengah semester framework NextJS

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

1. Jalankan perintah berikut untuk menjalankan aplikasi

   ```sh
   pnpm dev
   ```

## Ketentuan mengerjakan ujian

1. file page.tsx sudah disediakan, silahkan gunakan file yang sudah disediakan untuk membuat aplikasi yang kalian inginkan
2. silahkan isi data peserta pada file page.ts (isi nama, nim, kelas, dan email)
3. silahakan gunakan SSR atau CSR sesuai dengan kebutuhan kalian
4. Gunakan prisma ORM untuk melakukan query ke database
5. bila sudah selesai mengerjakan ujian, silahan commit dan push ke branch yang sudah kalian buat
6. sebelum melakukan commit dan push, pastikan branch aktif adalah branch yang sudah kalian buat
