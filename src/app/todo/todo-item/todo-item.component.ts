import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/service/tarea.service';
import { Tarea } from 'src/app/Tarea';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})




export class TodoItemComponent implements OnInit {

  constructor(private service:TareaService) { }
   
  private item:Array<Tarea>=[];
  
  

  ngOnInit() {

    this.service.obsTarea.subscribe((tarea)=>
    {
        
        if(tarea!='null'){

          var objTarea= new Tarea();
          objTarea.descripcion=tarea;
          objTarea.estado='Pendiente';


         this.item.push(objTarea);
        

        }
      
    }
    
    );

    
  }

}
