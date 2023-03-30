import { Component } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[StatusService]
})
export class AppComponent  {
  name = 'Angular';
 public status:any;
 constructor(private service:StatusService){
   this.status = service.getOrderStatus();
 }
  
  // loadData(){
  //   this.service.getOrderStatus().subscribe((data:any)=>{
  //     console.log(data)
  //     this.status=data
  //     console.log(this.status)
  //   })
  // }
}
