// Jalankan setelah halaman load
document.addEventListener('DOMContentLoaded', function() {
    const elemenHasil = document.getElementById("hasil");  // Ambil elemen sekali saja
    if (!elemenHasil) {
        console.error("Elemen id='hasil' tidak ditemukan!");  // Debug: Cek jika ul hilang
        return;
    }
    
    for (let a = 1; a <= 20; a++) {
        if (a % 3 === 0) {  // Gunakan === untuk strict equality (lebih aman)
            console.log("Bold untuk " + a + " (habis dibagi 3)");  // Debug: Lihat di console
            elemenHasil.innerHTML += "<li><b>Daftar ke " + a + "</b></li>";  // Bold seluruh frasa
        } else {
            console.log("Normal untuk " + a);  // Debug: Konfirmasi else jalan
            elemenHasil.innerHTML += "<li>Daftar ke " + a + "</li>";  // Normal tanpa bold
        }
    }
    console.log("Loop selesai! Total item: 20");  // Debug akhir
});