# 🚀 Undangan Digital BSI Day 2025: Clash of Mind

Undangan digital interaktif untuk acara tahunan Badan Sistem Informasi (BSI) Day 2025 dengan tema **"Clash of Mind: Smart Battle"**.

## Fitur Utama

* **Personalisasi:** Otomatis menampilkan nama tamu undangan berdasarkan parameter URL.
* **Validasi Tamu:** Memeriksa nama tamu terdaftar melalui file `registered_guests.json`.
* **Countdown:** Hitung mundur menuju tanggal dan waktu acara.
* **Scroll Reveal:** Animasi halus saat menggulir ke setiap bagian.

## 🔗 Cara Mengakses

Akses undangan melalui tautan utama dengan menambahkan parameter nama tamu:
Tentu\! Menambahkan *file* **`.gitignore`** dan **`README.md`** adalah langkah penting untuk menjaga kebersihan *repository* GitHub Anda dan memberikan panduan bagi pengguna.

-----

## 📄 Membuat `.gitignore`

*File* `.gitignore` memberi tahu Git *file* mana yang harus **diabaikan** dan tidak perlu di-*upload* ke *repository* (contoh: *file* konfigurasi lokal atau *cache*).

Untuk proyek undangan berbasis HTML/CSS/JS, *file* yang sering diabaikan adalah *file* yang dibuat oleh *code editor* lokal (seperti VS Code) atau file konfigurasi proyek.

Buat *file* baru bernama **`.gitignore`** di *root folder* proyek Anda dan isi dengan konten berikut:

```gitignore
# File Konfigurasi Editor (Contoh: VS Code)
.vscode/

# File Konfigurasi IDE/System
.DS_Store
Thumbs.db

# Dependency (Jika di masa depan menggunakan Node.js/npm)
# node_modules

# Temporary Files
*.log
*.tmp
```

**Catatan:** Jika Anda menggunakan *live server* di VS Code (seperti yang ditunjukkan oleh URL `http://127.0.0.1:5500/`), tidak ada *file* yang wajib diabaikan. `.gitignore` di atas adalah standar yang baik untuk memulai.

-----

## 📝 Membuat `README.md`

*File* `README.md` adalah halaman depan *repository* Anda di GitHub. Ini harus memberikan informasi ringkas tentang proyek dan cara menggunakannya.

Buat *file* baru bernama **`README.md`** di *root folder* proyek Anda dan isi dengan konten berikut (Anda dapat menyesuaikan isinya):

```markdown
# 🚀 Undangan Digital BSI Day 2025: Clash of Mind

Undangan digital interaktif untuk acara tahunan Badan Sistem Informasi (BSI) Day 2025 dengan tema **"Clash of Mind: Smart Battle"**.

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

Apakah Anda ingin memastikan bahwa semua *file* CSS, JS, dan gambar Anda dipisahkan ke dalam *folder* terpisah sebelum Anda *upload* ke GitHub?
````