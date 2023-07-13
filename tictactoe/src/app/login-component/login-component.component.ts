import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore,getFirestore, Firestore, firestoreInstance$ } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDatabase, ref, onValue } from "firebase/database";
import {UserService} from "src/app/providers/user.service"

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  formData = {
    username: '',
    password: ''
  }
  constructor(private db: UserService){ 
    
  }
  onSubmit(){

    console.log(this.formData);   
    
    const userOK = this.isUsernameCorrect();
    const passOK = this.isPasswordCorrect();

    if(userOK && passOK){
      console.log("Entró");
    }else{
      console.log("No entró");
    }
  }  
  public async isUsernameCorrect(): Promise<boolean>{
    const username = this.formData.username;

    try {
       const userDoc = await this.firestore.collection('usuarios').doc(username).get();
      if(userDoc != null){
        return true;
      }else{
        return false;
      }

    } catch (error) {
      console.error('Error al verificar el nombre de usuario:', error);
      return false;
    }

    /*const usuariosRef = this.firestore.collection('usuarios');
    return usuariosRef.get().then((b: boolean) => {
      for(let i=0; i<usuariosRef.lenght();i++ ){
        if(usuariosRef[i].username == this.formData.username && usuariosRef[i].activo == true){
          return true;
        }
      }
      return false;
    });*/
  }
  public async isPasswordCorrect(): boolean{
    
    const usuariosRef = this.firestore.collection('usuarios');
    return usuariosRef.get().then((b: boolean) => {
      for(let i=0; i<usuariosRef.lenght();i++ ){
        if(usuariosRef[i].password == this.formData.password){
          return true;
        }
      }
      return false;
    });
  }
}



