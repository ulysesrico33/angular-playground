import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }

  private tarea= new BehaviorSubject('null');
  private contadorTarea= new BehaviorSubject(0);
  obsTarea= this.tarea.asObservable();
  obsContador=this.contadorTarea.asObservable();
  private conTareas=0;
  

  enviarTarea(strTarea:string){

    this.tarea.next(strTarea);
    this.conTareas++;
    
    


  }

  obtenerNoTareas(){

    return this.contadorTarea.next(this.conTareas);

  }



}
