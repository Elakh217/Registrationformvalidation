import { Component } from '@angular/core';
import { User} from './validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  
model=new User("Elakhiya","RK","Female","st.josephs institute","perumbakkam",123,"CSE","elakhiya2001");
submitted=false;
onSubmit()
{
  this.submitted=true;
  console.log('this.model.firstname'+this.model.firstname);
  console.log('this.model.email'+this.model.email);
}

}
