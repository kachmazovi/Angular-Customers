import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-a',
  imports: [],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.scss',
})
export class ChildAComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params);
  }
}
