// ==============================================
// PROGRAM KASIR BATAK TOBA
// Dibuat dohot JavaScript
// ==============================================

// Data barang di toko - Daftar produk
const daftarBarang = [
    { nama: "Beras", harga: 12000 },
    { nama: "Minyak", harga: 15000 },
    { nama: "Gula", harga: 10000 },
    { nama: "Garam", harga: 5000 },
    { nama: "Teh", harga: 8000 }
];

// Variabel global
let keranjang = [];    // Tempat simpan barang na dibeli
let totalHarga = 0;    // Jumlah harga samuena

// Fungsi manampilkon daftar barang - Ula menampilkan produk
function tampilDaftarBarang() {
    console.log("\n=== DAFTAR BARANG DI TOKO ===");
    daftarBarang.forEach((barang, index) => {
        console.log(`${index + 1}. ${barang.nama} - Rp${barang.harga}`);
    });
}

// Fungsi manambah barang ke keranjang - Ula masukkan produk
function tambahKeKeranjang(nomorBarang, jumlah) {
    if (nomorBarang < 1 || nomorBarang > daftarBarang.length) {
        console.log("Nomor barang salah!");
        return;
    }

    const barangDipilih = daftarBarang[nomorBarang - 1];
    const subTotal = barangDipilih.harga * jumlah;

    keranjang.push({
        nama: barangDipilih.nama,
        harga: barangDipilih.harga,
        jumlah: jumlah,
        subTotal: subTotal
    });

    totalHarga += subTotal;
    console.log(`${jumlah} ${barangDipilih.nama} nunga ditambah ke keranjang!`);
}

// Fungsi manampilkon keranjang belanja - Ula lihat belanjaan
function tampilKeranjang() {
    console.log("\n=== KERANJANG BELANJA ===");
    if (keranjang.length === 0) {
        console.log("Keranjang kosong!");
        return;
    }

    keranjang.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nama} - Rp${item.harga} x ${item.jumlah} = Rp${item.subTotal}`);
    });

    console.log("\nTOTAL HARGA: Rp" + totalHarga);
}

// Fungsi bayar - Ula transaksi
function bayar(uangDibayar) {
    if (uangDibayar < totalHarga) {
        console.log("Uang ndang cukup! Kurang Rp" + (totalHarga - uangDibayar));
        return;
    }

    const kembalian = uangDibayar - totalHarga;
    console.log("\n=== STRUK PEMBAYARAN ===");
    console.log("Total Harga: Rp" + totalHarga);
    console.log("Uang Dibayar: Rp" + uangDibayar);
    console.log("Kembalian: Rp" + kembalian);
    console.log("\n=== TERIMA KASIH, HORAS! ===");

    // Reset keranjang
    keranjang = [];
    totalHarga = 0;
}

// ==============================================
// CONTOH PENGGUNAAN PROGRAM
// ==============================================

// 1. Manampilkon daftar barang
tampilDaftarBarang();

// 2. Manambah barang ke keranjang
tambahKeKeranjang(1, 2);   // Beli 2 Beras
tambahKeKeranjang(3, 1);   // Beli 1 Gula
tambahKeKeranjang(5, 3);   // Beli 3 Teh

// 3. Manampilkon keranjang
tampilKeranjang();

// 4. Bayar
bayar(100000);  // Bayar pakai Rp100.000