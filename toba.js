// Contoh fungsi sederhana dalam JavaScript dengan nama yang terinspirasi bahasa Batak Toba
function salamBatakToba(nama) {
    return `Horas, ${nama}! Asa di halak Batak!`;
}

// Contoh objek dengan properti yang menggunakan kata dalam bahasa Batak
const orangBatak = {
    marga: "Sirait",
    asal: "Toba Samosir",
    sapa: function() {
        return `Nama margaku ${this.marga}, asal au di ${this.asal}`;
    }
};

// Contoh manipulasi array dengan nama-nama marga Batak
const margaBatak = ["Sirait", "Situmorang", "Simbolon", "Nababan", "Hutapea"];
const margaPanjang = margaBatak.filter(marga => marga.length > 6);

console.log(salamBatakToba("Edi")); // Output: Horas, Edi! Asa di halak Batak!
console.log(orangBatak.sapa()); // Output: Nama margaku Sirait, asal au di Toba Samosir
console.log(margaPanjang); // Output: ["Situmorang", "Simbolon"]