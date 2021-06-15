import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "Nouha";
  imageUrl = "assets/images/form.png";


  constructor() { }

  ngOnInit(): void {
  }

  hello(myname: String) {
    alert('Hello' + myname)
  }

}
