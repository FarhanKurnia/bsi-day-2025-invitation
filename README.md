# Undangan Digital BSI Day 2025: Clash of Mind

Undangan digital interaktif untuk acara tahunan Badan Sistem Informasi (BSI) Day 2025 dengan tema **"Clash of Mind: Together We Think, Together We Win"**.

## Fitur Utama

* **Personalisasi:** Otomatis menampilkan nama tamu undangan berdasarkan parameter URL.
* **Validasi Tamu:** Memeriksa nama tamu terdaftar melalui file `registered_guests.json`.
* **Countdown:** Hitung mundur menuju tanggal dan waktu acara.
* **Scroll Reveal:** Animasi halus saat menggulir ke setiap bagian.

## 🔗 Cara Mengakses

Akses undangan melalui tautan utama dengan menambahkan parameter nama tamu:

```

[GANTI DENGAN URL GITHUB PAGES ANDA]/index.html?name=nama tamu anda

````

> **Contoh:** `https://username.github.io/bsi-day-invite/index.html?name=farhan kurnia`

**PENTING:** Nama tamu di URL harus sama persis dengan yang terdaftar di `registered_guests.json` (hanya memperhatikan huruf kecil/spasi).

## 🛠️ Struktur Proyek

Proyek ini murni HTML, CSS, dan JavaScript (*Vanilla JS*).

| File/Folder | Deskripsi |
| :--- | :--- |
| `index.html` | Struktur konten undangan utama. |
| `style.css` | Semua gaya visual dan responsif (disarankan untuk dipisah). |
| `script.js` | Logika hitung mundur, validasi tamu, dan *scroll reveal* (disarankan untuk dipisah). |
| `registered_guests.json` | Database nama tamu yang diizinkan (Wajib huruf kecil). |
| `assets/img/` | Folder untuk semua aset gambar (cover.png, background.jpg, dll.). |

---

## 📤 Langkah GitHub

Setelah Anda membuat kedua *file* tersebut di *root folder* proyek Anda, jalankan perintah Git berikut untuk mengirimkannya ke GitHub:

1.  **Tambahkan file baru:**
    ```bash
    git add .
    ```
2.  **Buat *commit* baru:**
    ```bash
    git commit -m "feat: Add gitignore and README files"
    ```
3.  **Kirim ke GitHub:**
    ```bash
    git push origin main
    ```