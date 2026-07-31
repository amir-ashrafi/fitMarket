import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SelectButtonModule } from 'primeng/selectbutton'; 
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-auth-form',
  imports: [CommonModule,
    FormsModule, SelectButtonModule, ButtonModule, ReactiveFormsModule, PasswordModule, FloatLabelModule],
  templateUrl: './auth-form.html',
  encapsulation:ViewEncapsulation.None,
  styleUrl: './auth-form.css',
})
export class AuthForm implements OnInit{
googleLogin = false;
value: 'login' | 'register' = 'login';
stateOptions = [
  { label: 'ورود', value: 'login' },
  { label: 'ثبت‌نام', value: 'register' }
];
  loginForm;
  registerForm;
    loading = false;
  route = inject(ActivatedRoute);
ngOnInit() {
    this.route.url.subscribe(() => {
      const path = this.router.url; 
      if (path.includes('register')) {
        this.value = 'register';
      } else {
        this.value = 'login';
      }
    });
  }

onStateChange(event: any) {
  const target = event.value as 'login' | 'register';
  this.router.navigate(['/auth', target]);
}
  constructor(private fb: FormBuilder,private router:Router,private auth:AuthService) {
    this.loginForm = this.fb.nonNullable.group({
    email:['',[Validators.required , Validators.email]],
    password:['',[Validators.required]]
  });
  this.registerForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  })
  }

get activeForm(){
  return this.value === 'login'?this.loginForm:this.registerForm
}

  submit():void{
    const form = this.activeForm;
    if(form.invalid){
      form.markAllAsTouched();
      return
    }
    const { email, password } = form.getRawValue();
    let confirmPassword:string;
    if(this.value === 'login'){
      this.loading = true;
      this.auth.login(email,password).subscribe({
        next: () => {
    this.loading = false;
    this.auth.currentUser$.pipe(take(1)).subscribe(user => {
      if (user?.role === 'admin') {
        this.router.navigate(['/admin-panel']);
      } else {
        this.router.navigate(['/']);
      }
    });
  },
        error:(err)=>{
          this.loading = false;
          alert('login faild');
          console.error(err)
        }
      });
      return
    }
    if(this.value === 'register'){
      const confirmPassword = this.registerForm.get('confirmPassword')!.value as string;
if (password !== confirmPassword) {
      alert('رمزها یکسان نیستند!');
      return;
    }
    this.loading =true;
    this.auth.register(email,password).subscribe({
      next:() =>{
        this.loading = false;
        this.router.navigate(['/'])
      },
      error:(err) =>{
        this.loading = false;
        alert('Register failded');
        console.error(err)
      }
    })
    return
    }
  }
  
}
