import {Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Javascript';
  selectedPanel = '#home';

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {
  }

  toggleClass($event: MouseEvent, panel: string): void {
    this.selectedPanel = panel;
    const arrNav = this.elRef.nativeElement.querySelectorAll('.nav-link');
    arrNav.forEach( (x) => {
      x.classList.remove('active');
    });
    this.renderer.addClass(event.target, 'active' );

    this.selectPanel(panel);
  }

  selectPanel(panel: string): void{
    const panels = this.elRef.nativeElement.querySelectorAll('.tab-pane');
    panels.forEach( (x) => {
      if ( x ){
        x.classList.remove('active');
      }
    });
    const panelObj = this.elRef.nativeElement.querySelector(panel);
    if ( panelObj ){
      this.renderer.addClass(panelObj, 'active' );
    }
  }
}
