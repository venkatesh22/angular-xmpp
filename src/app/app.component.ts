import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  constructor(
        private renderer2: Renderer2, 
        @Inject(DOCUMENT) private _document: Document
  ) { }

ngOnInit() {
//    const s = this.renderer2.createElement('script');
//    s.onload = this.loadNextScript.bind(this);
//    s.type = 'text/javascript';
//    s.src = 'https://cdn.conversejs.org/5.0.5/dist/converse.min.js'; // Defines someGlobalObject
//    s.text = ``;
//    this.renderer2.appendChild(this._document.body, s);
}
 
loadNextScript() {
    (window as any).converse.initialize({
        authentication: 'login',
        auto_away: 300,
        auto_reconnect: true,
        bosh_service_url: 'https://conversejs.org/http-bind/', // Please use this connection manager only for testing purposes
        message_archiving: 'always',
        view_mode: 'fullscreen'
    });
}

}
