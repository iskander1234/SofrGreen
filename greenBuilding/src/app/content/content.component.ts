import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  fullName : string = 'Iskander Dosgali';
  createData : Date = new Date();
  @Input() contentItem!: {title: string, description: string};
}
