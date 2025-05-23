import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  isShow = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000)
  }
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  toggleDisplay() {
    this.isShow = !this.isShow; 
  }
  

}
