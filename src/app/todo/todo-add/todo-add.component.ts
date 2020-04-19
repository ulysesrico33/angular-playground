import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/service/tarea.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  constructor(private service:TareaService) { }

  ngOnInit() {

    
  }


  onKeyUp(event:any){

     if(event.target.value.length!=''){

         this.service.enviarTarea(event.target.value);
         this.service.obtenerNoTareas();

       }

  }

}
