function cekJawaban() {
    // Kunci jawaban yang benar untuk 10 soal
    const jawabanBenar = {
        q1: 'pusat',
        q2: 'rokok',
        q3: 'djp',
        q4: 'kabupaten_kota',
        q5: 'apbn',
        q6: 'pkb',
        q7: 'pusat',
        q8: 'pusat',
        q9: 'reklame',
        q10: 'apbd'
    };

    let skor = 0;
    const form = document.getElementById('quiz-form');
    const hasilDiv = document.getElementById('hasil-kuis');
    const totalPertanyaan = Object.keys(jawabanBenar).length;
    let semuaDijawab = true;

    const jawabanPengguna = {};

    // Loop untuk mendapatkan semua jawaban dan memeriksa apakah semua sudah diisi
    for (let i = 1; i <= totalPertanyaan; i++) {
        const namaRadio = 'q' + i;
        const radios = form.elements[namaRadio];
        if (radios.value) {
            jawabanPengguna[namaRadio] = radios.value;
        } else {
            semuaDijawab = false;
            break; // Hentikan loop jika ada satu yang belum dijawab
        }
    }

    // Cek jika ada pertanyaan yang belum dijawab
    if (!semuaDijawab) {
        hasilDiv.innerHTML = "Harap jawab semua pertanyaan terlebih dahulu!";
        hasilDiv.style.backgroundColor = '#ffc107'; // Warna kuning peringatan
        hasilDiv.style.color = '#856404';
        return;
    }

    // Bandingkan jawaban pengguna dengan kunci jawaban
    for (let i = 1; i <= totalPertanyaan; i++) {
        const namaRadio = 'q' + i;
        if (jawabanPengguna[namaRadio] === jawabanBenar[namaRadio]) {
            skor++;
        }
    }

    // Tampilkan hasil
    hasilDiv.innerHTML = `Skor Anda: ${skor} dari ${totalPertanyaan} Jawaban Benar!`;
    
    if (skor === totalPertanyaan) {
        hasilDiv.innerHTML += "<br>Luar biasa! Pemahaman Anda tentang perpajakan di Indonesia sangat baik.";
        hasilDiv.style.backgroundColor = '#d4edda'; // Warna hijau untuk sempurna
        hasilDiv.style.color = '#155724';
    } else if (skor >= totalPertanyaan / 2) {
        hasilDiv.innerHTML += "<br>Bagus! Anda sudah memahami sebagian besar perpajakan di Indonesia.";
        hasilDiv.style.backgroundColor = '#d1ecf1'; // Warna biru muda untuk hasil baik
        hasilDiv.style.color = '#0c5460';
    } else {
        hasilDiv.innerHTML += "<br>Ayo coba lagi! Baca kembali materi untuk meningkatkan pemahamanmu tentang perpajakan di Indonesia.";
        hasilDiv.style.backgroundColor = '#f8d7da'; // Warna merah untuk ada yang salah
        hasilDiv.style.color = '#721c24';
    }
}