import { Component, OnInit,Input } from '@angular/core';
import { UserInter } from '../models/ObjInterface';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() gatti: any;


  constructor() { }

  ngOnInit(): void {
  }

}
