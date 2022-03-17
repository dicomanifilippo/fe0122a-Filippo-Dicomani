var arr8=[]
fetch('Abbigliamento.json')
.then(res => res.json())
    .then(data => {
        data.forEach((item:any) => {
            
            let abb =new Abb(item.id,item.codprod,item.collezione,item.capo,item.modello,item.quantita,item.colore,item.prezzoivaesclusa,item.prezzoivainclusa,item.disponibile,item.saldo)
            arr8.push(abb)
            console.log(abb.getacquistocapo())
            console.log(abb.getsaldocapo())
        })
        console.log(arr8)
    })


class Abb{
    id:number;
    codprodotto:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;
    constructor(id:number=0,codprodotto:number=0,collezione:string="",capo:string="",modello:number=0,quantita:number=0,colore:string="",prezzoivaesclusa:number=0,prezzoivainclusa:number=0,disponibile:string="",saldo:number=0){
        this.id=id;
        this.codprodotto=codprodotto,
        this.collezione=collezione;
        this.capo=capo;
        this.modello=modello;
        this.quantita=quantita;
        this.prezzoivaesclusa=prezzoivaesclusa;
        this.prezzoivainclusa=prezzoivainclusa;
        this.disponibile=disponibile;
        this.saldo=saldo;
    }
    getsaldocapo():number{
        return (this.prezzoivainclusa * this.saldo)/100;
   
        
        }
        getacquistocapo():number{
            return this.prezzoivainclusa - this.getsaldocapo();
            console.log(this.getacquistocapo())
        }

}
let a = new Abb(10,1010,"estate","felpa",101010,20,"verde",100,120,"magazzino",80);
let b = new Abb(11,1111,"estate","felpa",111111,20,"verde",110,130,"magazzino",70);
let c = new Abb(12,1212,"estate","felpa",111111,20,"verde",120,140,"magazzino",60);
console.log(a.getsaldocapo)
console.log(b.getsaldocapo)
console.log(c.getsaldocapo)
