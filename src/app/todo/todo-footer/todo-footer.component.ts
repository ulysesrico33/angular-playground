import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/service/tarea.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  constructor(private service:TareaService) { }
  private contadorTarea=0;

  ngOnInit() {


    this.service.obsContador.subscribe(
 
      (noTareas)=>{

           
            this.contadorTarea=noTareas;
            

      }

    );
  }

}
