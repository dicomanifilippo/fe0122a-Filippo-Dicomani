var arr8 = [];
fetch('Abbigliamento.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    data.forEach(function (item) {
        var abb = new Abb(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        arr8.push(abb);
        console.log(abb.getacquistocapo());
        console.log(abb.getsaldocapo());
    });
    console.log(arr8);
});
var Abb = /** @class */ (function () {
    function Abb(id, codprodotto, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        if (id === void 0) { id = 0; }
        if (codprodotto === void 0) { codprodotto = 0; }
        if (collezione === void 0) { collezione = ""; }
        if (capo === void 0) { capo = ""; }
        if (modello === void 0) { modello = 0; }
        if (quantita === void 0) { quantita = 0; }
        if (colore === void 0) { colore = ""; }
        if (prezzoivaesclusa === void 0) { prezzoivaesclusa = 0; }
        if (prezzoivainclusa === void 0) { prezzoivainclusa = 0; }
        if (disponibile === void 0) { disponibile = ""; }
        if (saldo === void 0) { saldo = 0; }
        this.id = id;
        this.codprodotto = codprodotto,
            this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abb.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    Abb.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
        console.log(this.getacquistocapo());
    };
    return Abb;
}());
var a = new Abb(10, 1010, "estate", "felpa", 101010, 20, "verde", 100, 120, "magazzino", 80);
var b = new Abb(11, 1111, "estate", "felpa", 111111, 20, "verde", 110, 130, "magazzino", 70);
var c = new Abb(12, 1212, "estate", "felpa", 111111, 20, "verde", 120, 140, "magazzino", 60);
console.log(a.getsaldocapo);
console.log(b.getsaldocapo);
console.log(c.getsaldocapo);
