import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  posts$: Observable<ScullyRoute[]> = of([]);
  constructor(
    private scullyService: ScullyRoutesService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.scullyService.available$.pipe(
      map(posts => {
        return posts.filter(post => post.title);
      }
    ));




  }

}
