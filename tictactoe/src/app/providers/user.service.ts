import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { User } from "../models/users";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFireDatabase) { }


  getBD(){
    console.log(this.palabras);
    return this.palabras;
  }

  getConexion(){
    return new Promise( (resolve, reject)=>{
      this.afs.object('palabras/').snapshotChanges().subscribe( (datos: any) => {
      console.log(datos);
      if(datos.payload.exists()){
        resolve(this.palabras = datos.payload.val());
      }else{
        reject(new Error('Ocurrió un problema en BD'));
      }
    });
   });
}
}
