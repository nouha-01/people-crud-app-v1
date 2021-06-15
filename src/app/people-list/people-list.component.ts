import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList = [
    {
      id: 1,
      name: "Nouha",
      username: "Ayari",
      phone: "00 216 54 755 448"
    },
    {
      id: 2,
      name: "Me7me7",
      username: "Boudhir",
      phone: "00 216 92 377 561"
    },
    {
      id: 3,
      name: "Wiem",
      username: "HajAli",
      phone: "00 216 53 130 581"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  delete(person: any) {
    let index = this.peopleList.indexOf(person);
    this.peopleList.splice(index, 1);
  }

}
