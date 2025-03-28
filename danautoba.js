// Fungsi utama - Tungkot ni program
function main() {
    // Mambuat variabel - Mangarancang angka dohot huruf
    let angka = 10;
    let huruf = "Batak";
    let bohong = true;
    
    // Mencetak ke konsol - Mambuat di layar
    console.log("Horas! Program on mulai dohot angka " + angka);
    
    // Kondisi - Mangarancang songon dia
    if (angka > 5) {
        console.log("Angka i lobi besar sian lima");
    } else {
        console.log("Angka i lobi godang sian lima");
    }
    
    // Perulangan - Mangulangi
    for (let i = 0; i < 5; i++) {
        console.log("Ulangan ke-" + (i + 1));
    }
    
    // Memanggil fungsi lain - Mangihut fungsi
    hitungLuas(5, 10);
    sapa("Budi");
}

// Fungsi menghitung luas - Tungkot ni panghitungon luas
function hitungLuas(panjang, lebar) {
    let luas = panjang * lebar;
    console.log("Luas i ma " + luas);
    return luas;
}

// Fungsi menyapa - Tungkot ni horas
function sapa(nama) {
    console.log("Horas " + nama + "!");
    console.log("Selamat datang di program Batak Toba!");
}

// Memanggil fungsi utama - Mangihut tungkot ni program
main();