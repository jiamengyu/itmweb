import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { AnalyticsService } from '../shared/services/analytics.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  myForm: FormGroup;
  userName:string;

  data: Object;
  loading: boolean;

  constructor(fb: FormBuilder, 
              private userService: UserService, 
              private analyticsService: AnalyticsService, 
              private http: HttpClient ) {

    this.myForm = fb.group({
      'job': ['', Validators.compose([ Validators.required, this.jobValidator ] )]
    });

  //  this.job = this.myForm.controls['job'];
    this.myForm.valueChanges.subscribe(
      (form: any) =>{
        console.log("Form changed to:", form);
      }
    );
  }
 

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value', form);
  }

  jobValidator(control: FormControl): { [s: string]: boolean} {
    if(!control.value.match(/^123/)) {
      return {invalidJob: true};
    }
  }


  signIn(): void{
    this.userService.setUser({name:'Jim Yoo'});

    this.userName = this.userService.getUser().name;
    console.log('Username is :', this.userName);

    this.analyticsService.record({eventName:'signIn', scope: this.userName});
  }

  makeRequest(): void {
    this.loading= true;
    this.http.get('http://jsonplaceholder.typicode.com/posts/1')
             .subscribe( data => {
               this.data = data;
               this.loading = false;
             });
  }
}
