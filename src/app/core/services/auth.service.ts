import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from'@angular/fire/auth';
import auth from'firebase/app';
import { AuthOptions, AuthProviders, User } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState$: Observable<firebase.User>;

  constructor(
    private AuthFacebook: AngularFireAuth
  ) { }

  /* */
  isAuthenticated(): Observable<Boolean> {
    return this.authState$.pipe(map(user => user != null ))
  }

  /* */
  authenticate({isSignIn,provider,user}:AuthOptions):Promise<auth.auth.UserCredential>{
    let operation: Promise<auth.auth.UserCredential>
    if(provider != AuthProviders.Email){
      operation = this.signInWithPopUp(provider)
    }else{
      operation = isSignIn ? this.signInFacebook(user) : this.signUpFacebook(user);
      return operation;
    }
  }
  /* */
  logout(){
    return this.isAuthenticated;
  }
  /* */
  private signInFacebook({name,email,password}:User):Promise<auth.auth.UserCredential>{
    return this.AuthFacebook.signInWithEmailAndPassword(email,password);
  }
  /* */
  private signUpFacebook({ name, email, password}: User): Promise<auth.auth.UserCredential>{
    return this.AuthFacebook.createUserWithEmailAndPassword(email,password)
    .then(credential => credential.user.updateProfile({displayName:name,photoURL: null})
    .then(()=> credential ));
  }
  /* */

  private signInWithPopUp(provider:AuthProviders): Promise<auth.auth.UserCredential>{
    let sigInProvider = null
    switch(provider){
      case AuthProviders.Facebook:
        sigInProvider = new auth.auth.FacebookAuthProvider();
        break;
    }
    return this.AuthFacebook.signInWithPopup(sigInProvider);
  }
}