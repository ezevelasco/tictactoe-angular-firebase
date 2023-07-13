import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
items: any[] =[];
database: any;






  constructor(){
   // this.getUsuarios();
    this.database = getDatabase();
    console.log(this.database);
  }

  formData = {
    username: '',
    password: ''
  }
  
 
  
  onSubmit(){
    console.log(this.formData);    
  }
}


