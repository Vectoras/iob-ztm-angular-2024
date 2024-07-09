import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('[app-post] constructor()', this.postImg);
  }

  ngOnInit() {
    console.log('[app-post] ngonInit()', this.postImg);
  }

  ngOnChanges() {
    console.log('[app-post] ngonChagngOnChanges()', this.postImg);
  }

  ngDoCheck() {
    console.log('[app-post] ngonChagngDoCheck()', this.postImg);
  }

  ngAfterContentInit() {
    console.log('[app-post] ngonChagngAfterContentInit()', this.postImg);
  }

  ngAfterContentChecked() {
    console.log('[app-post] ngonChagngAfterContentChecked()', this.postImg);
  }

  ngAfterViewInit() {
    console.log('[app-post] ngonChagngAfterViewInit()', this.postImg);
  }

  ngAfterViewChecked() {
    console.log('[app-post] ngonChagngAfterViewChecked()', this.postImg);
  }

  ngOnDestroy() {
    console.log('[app-post] ngonChagngOnDestroy()', this.postImg);
  }
}
