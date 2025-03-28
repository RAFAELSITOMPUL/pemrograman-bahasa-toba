// Fungsi utama - Tungkot ni program
function main() {
    console.log("=== PROGRAM ARITMATIKA BATAK TOBA ===");
    
    // Mangarancang angka - angka na dihitung
    let angka1 = 20;
    let angka2 = 5;
    
    console.log("Angka na dipakke: " + angka1 + " dohot " + angka2);
    
    // Panghitungon dasar
    let panambahan = angka1 + angka2;       // Panambahan
    let pangurangan = angka1 - angka2;      // Pangurangan
    let pagaraban = angka1 * angka2;        // Pagaraban
    let pembagian = angka1 / angka2;        // Pembagian
    let sisaPambagian = angka1 % angka2;    // Modulus (sisa pambagian)
    
    // Mencetak hasil
    console.log("Hasil panambahan: " + angka1 + " + " + angka2 + " = " + panambahan);
    console.log("Hasil pangurangan: " + angka1 + " - " + angka2 + " = " + pangurangan);
    console.log("Hasil pagaraban: " + angka1 + " * " + angka2 + " = " + pagaraban);
    console.log("Hasil pembagian: " + angka1 + " / " + angka2 + " = " + pembagian);
    console.log("Sisa pambagian: " + angka1 + " % " + angka2 + " = " + sisaPambagian);
    
    // Panghitungon tambahan
    console.log("\n=== PANGHITUNGON TAMBAHAN ===");
    
    // Increment (naik 1)
    angka1++;
    console.log("Angka1 naik 1 (increment): " + angka1);
    
    // Decrement (turun 1)
    angka2--;
    console.log("Angka2 turun 1 (decrement): " + angka2);
    
    // Pangkat
    let pangkat = Math.pow(angka1, 3);
    console.log("Pangkat tolu sian " + angka1 + " = " + pangkat);
    
    // Akar kuadrat
    let akar = Math.sqrt(angka1);
    console.log("Akar kuadrat sian " + angka1 + " = " + akar);
    
    // Mangihut fungsi contoh
    contohAritmatika();
}

// Fungsi contoh tambahan - Tungkot ni contoh
function contohAritmatika() {
    console.log("\n=== CONTOH LAIN ===");
    
    let a = 15;
    let b = 4;
    
    // Operasi gabungan
    a += 5;  // Sama dengan a = a + 5
    console.log("a += 5: " + a);
    
    b *= 2;  // Sama dengan b = b * 2
    console.log("b *= 2: " + b);
    
    // Prioritas operasi
    let hasil = (a + b) * 2;
    console.log("(a + b) * 2 = " + hasil);
}

// Mangihut fungsi utama
main();