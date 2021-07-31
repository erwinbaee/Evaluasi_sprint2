var nilaiSantri = [52,95,55,67,79,44,30,97,84];
var rataRata = nilaiSantri.reduce(nilai);
document.write(rataRata);

function nilai(total, value, index, array) {
    return total / 2;
}
