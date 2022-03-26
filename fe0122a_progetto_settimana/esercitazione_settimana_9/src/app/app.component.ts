import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esercitazione_settimana_9';
list:any[]=[];
    addTask(item:string){
      console.warn(item);
this.list.push({id:this.list.length,name:item})
console.warn(this.list)
    }
    removeTask(id:number){
      console.warn(id)
      this.list=this.list.filter(item=>item.id!==id);
    }
}
