import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-b',
  imports: [],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.scss',
})
export class ChildBComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params);
  }
}
