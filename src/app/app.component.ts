import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  ngOnInit() {
    $("body").ready(function(){
      // alert("Hello world");
      $(".nav > ul > li").click(function(){
        $(".nav > ul > li").removeClass("selected");
        $(this).addClass("selected");
      });
    });
  }

}
