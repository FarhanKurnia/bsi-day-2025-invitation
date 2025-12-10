// script.js

// 1. Element & Constant Definitions
const body = document.body;
const cover = document.getElementById('cover');
const openButton = document.getElementById('open-button');
const guestNameElement = document.getElementById('guest-name');
const validationMessage = document.getElementById('validation-message');
const backgroundAudio = document.getElementById('background-audio'); // <-- Mengganti nama variabel
const championsAudio = document.getElementById('champions-audio'); // <-- TAMBAHKAN
const gameBeginsAudio = document.getElementById('game-begins-audio'); // <-- TAMBAHKAN

// FUNGSI UNTUK MENGAMBIL PARAMETER DARI URL
const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// ===============================================
// FUNGSI UTAMA: VALIDASI NAMA
// ===============================================
const validateGuest = async () => {
    const urlGuestName = getParameterByName('name');
    
    // 1. Dapatkan daftar tamu dari file JSON
    let registeredGuests = [];
    try {
        const response = await fetch('./assets/js/json/registered_guests.json');
        if (!response.ok) {
            throw new Error(`Gagal memuat file JSON: ${response.statusText}`);
        }
        const data = await response.json();
        registeredGuests = data.guests;
    } catch (error) {
        console.error("Gagal memuat file tamu:", error);
        guestNameElement.innerHTML = `⚠️ Gagal Memuat Data Tamu.`;
        validationMessage.style.display = 'block';
        validationMessage.innerHTML = 'Hubungi panitia untuk tautan yang benar.';
        openButton.style.opacity = 0.5;
        return; 
    }

    // 2. Cek apakah parameter 'name' ada di URL
    if (!urlGuestName) {
        guestNameElement.innerHTML = `Kepada Yth. Tamu Undangan`;
        validationMessage.style.display = 'block'; 
        validationMessage.innerHTML = 'Silakan masukkan nama Anda di URL (Contoh: ?name=farhan kurnia).';
        openButton.style.opacity = 0.5;
        return;
    }
    
    // 3. Format nama untuk validasi (lowercase dan trim spasi)
    const formattedGuestName = urlGuestName.toLowerCase().trim();

    // 4. Cek apakah nama terdaftar
    if (registeredGuests.includes(formattedGuestName)) {
        // NAMA TERDAFTAR
        
        // Konversi format nama yang tampil (Farhan Kurnia)
        const displayGuestName = formattedGuestName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        guestNameElement.innerHTML = `Kepada Yth. ${displayGuestName}`;
        openButton.disabled = false; // Aktifkan tombol
        openButton.style.opacity = 1; // Pastikan tombol terlihat normal
        
    } else {
        // NAMA TIDAK TERDAFTAR
        guestNameElement.innerHTML = `Kepada Yth. ${urlGuestName}`;
        validationMessage.style.display = 'block'; 
        validationMessage.innerHTML = 'Nama tidak terdaftar. Hubungi panitia.';
        openButton.disabled = true; // Nonaktifkan tombol
        openButton.style.opacity = 0.5; // Beri efek disabled
    }
}

// Panggil fungsi validasi segera setelah halaman dimuat
validateGuest();

// === IMPLEMENTASI SUARA 1: Champions are you ready (On Load) ===
if (championsAudio) {
    championsAudio.volume = 1; 
    // PENTING: Browser kemungkinan besar akan memblokir autoplay ini
    championsAudio.play().catch(error => {
        // console.warn("Browser memblokir autoplay 'championsAudio'.");
    });
}

// === JAVASCRIPT UNTUK COVER & AUDIO (Open Button Listener) ===
openButton.addEventListener('click', () => {
  if(openButton.disabled) return; 

  // 1. MAINKAN SUARA 2: Let the game begins (one-shot)
  if (gameBeginsAudio) {
      gameBeginsAudio.volume = 1;
      gameBeginsAudio.play().catch(error => {
          console.error("Gagal memainkan gameBeginsAudio:", error);
      });
  }
  
  // 2. MAINKAN SUARA 3: Background Audio (looping)
  backgroundAudio.play().catch(error => { 
    console.log("Background Audio autoplay failed:", error);
  });

  // 3. Sembunyikan Cover
  cover.classList.add('hidden');
  
  // 4. Panggil fungsi scroll reveal 
  setTimeout(revealOnScroll, 1000); 
});
// ...

// Count Down Logic
const countDownDate = new Date("Dec 18, 2025 08:00:00").getTime();
const countdown = document.getElementById("countdown");

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = "🎉 Acara sedang berlangsung! 🎉";
  }
}, 1000);

// Scroll Reveal Animation 
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  sections.forEach(sec => {
    const revealPoint = 150; 
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - revealPoint) {
      sec.classList.add('visible');
    } else {
      sec.classList.remove('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);

// script.js (Pastikan fungsi ini dipanggil di dalam event listener DOMContentLoaded)

const setupDressCodeCarousel = () => {
    // Dapatkan elemen dengan ID spesifik
    const slidesContainer = document.getElementById('dresscodeCarouselSlides');
    const dotsContainer = document.getElementById('dresscodeCarouselDots');
    // Targeting kontrol dengan ID parent untuk menghindari konflik dengan carousel lain
    const prevButton = document.querySelector('#dresscode .carousel-control.prev'); 
    const nextButton = document.querySelector('#dresscode .carousel-control.next'); 
    
    if (!slidesContainer) return; // Keluar jika elemen tidak ditemukan

    const slides = slidesContainer.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    const updateCarousel = () => {
        // Menghitung offset horizontal
        const offset = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
        updateDots();
    };

    const updateDots = () => {
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === currentSlide) {
                dot.classList.add('active-dot');
            }
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    };
    
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    if (totalSlides > 0) {
        updateDots(); 
        updateCarousel(); 
    }
};


document.addEventListener('DOMContentLoaded', () => {
    // --- FUNGSI DINAMIS PANITIA ---
    const loadCommitteeMembers = async () => {
        const committeeGrid = document.getElementById('committeeGrid');

        try {
            // Ambil data dari file JSON
            const response = await fetch('./assets/js/json/committee_members.json'); 
            const members = await response.json();

            let committeeHTML = '';
            
            // Loop melalui setiap anggota
            members.forEach(member => {
                committeeHTML += `
                    <div class="committee-member member-card">
                        <img src="assets/img/committee/${member.img}" alt="${member.name}" class="avatar">
                        <div class="info-box">
                            <h3>${member.name}</h3>
                            <p>${member.role}</p>
                        </div>
                    </div>
                `;
            });

            // Masukkan HTML yang sudah dibuat ke dalam container
            committeeGrid.innerHTML = committeeHTML;

        } catch (error) {
            console.error('Gagal memuat data panitia:', error);
            committeeGrid.innerHTML = '<p>Gagal memuat daftar panitia. Silakan coba lagi nanti.</p>';
        }
    };

    // --- FUNGSI DINAMIS RUNDOWN ---
    const loadRundown = async () => {
        const timelineContainer = document.getElementById('rundownTimeline');

        try {
            // JALUR FILE JSON RUNDOWN
            const response = await fetch('./assets/js/json/rundown.json'); 
            
            if (!response.ok) {
                throw new Error(`Gagal memuat file JSON Rundown. Status: ${response.status}`);
            }

            const events = await response.json();

            let rundownHTML = '';
            
            // Loop melalui setiap item acara
            events.forEach(event => {
                // Tentukan kelas CSS tambahan jika ini adalah item istirahat (break-item)
                const itemClass = event.is_break ? 'timeline-item break-item' : 'timeline-item';
                rundownHTML += `
                    <div class="${itemClass}">
                        <div class="timeline-time">${event.time}</div>
                        <div class="timeline-content">
                            <h3>${event.title}</h3>
                            <p>${event.description}</p>
                        </div>
                    </div>
                `;
            });

            // Masukkan HTML yang sudah dibuat ke dalam container
            timelineContainer.innerHTML = rundownHTML;

        } catch (error) {
            console.error('Gagal memuat data rundown:', error);
            timelineContainer.innerHTML = `<p style="color: #ff1744; text-align: center;">[ERROR] Gagal memuat rundown: ${error.message}.</p>`;
        }
    };

    // Panggil fungsi untuk memuat panitia
    loadCommitteeMembers();
    // Panggil fungsi untuk memuat rundown (di bawah pemanggilan loadCommitteeMembers)
    loadRundown();

    setupDressCodeCarousel(); // Panggil fungsi setup carousel Dress Code

});
