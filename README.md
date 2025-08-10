# NovaAbsen

NovaAbsen adalah sistem absensi berbasis RFID yang dirancang untuk memudahkan pencatatan kehadiran secara real-time dengan keamanan tinggi dan antarmuka yang modern serta responsif. Aplikasi ini cocok digunakan di sekolah, kampus, dan instansi yang ingin mengoptimalkan manajemen absensi secara digital.

---

## Fitur Utama

- **Login Modern dan Aman**  
  Halaman login dengan desain minimalis dan responsif, terintegrasi dengan Firebase Authentication untuk keamanan maksimal.

- **Absensi Realtime dengan RFID**  
  Sistem absensi otomatis menggunakan teknologi RFID, meminimalisir antrean dan kesalahan pencatatan.

- **Dashboard Interaktif**  
  Memudahkan admin dan pengguna untuk melihat data absensi secara real-time dan mengelola data dengan mudah.

- **Desain Responsif dan User Friendly**  
  UI/UX modern dengan palet warna yang nyaman di mata, cocok untuk berbagai perangkat.

---

## Teknologi yang Digunakan

- Next.js (React) dengan fitur **app router** dan **server components**  
- Firebase Authentication dan Realtime Database / Firestore  
- Tailwind CSS untuk styling modern dan responsif  
- Teknologi RFID untuk absensi fisik

---

## Instalasi

1. Clone repo ini  
```bash
git clone https://github.com/hosigakitama/NovaAbsen.git
```

2. Install dependencies  
```bash
npm install
# atau
yarn install
```

3. Setup environment variables untuk Firebase di `.env.local`  
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Jalankan development server  
```bash
npm run dev
# atau
yarn dev
```

---

## Cara Penggunaan

- Buka halaman login di `/login`  
- Masukkan email dan password yang sudah didaftarkan  
- Setelah login berhasil, kamu akan diarahkan ke dashboard untuk mengelola data absensi

---

## Kontribusi

Kontribusi sangat diterima! Silakan buat issue atau pull request jika ingin menambahkan fitur atau memperbaiki bug.

---

## Lisensi

MIT License © 2025 NovaAbsen
