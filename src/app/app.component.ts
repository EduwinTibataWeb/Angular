import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebEcupaz';
  ngOnInit(): void {
    var menuIcon = $('.menu__icon');
    var menuItems = $('.menu__items');
    var menuItemsLi = $('.menu__items li');
    menuIcon.on('click', function(){
      if(menuItems.hasClass('active__menu')){
        menuItems.removeClass('active__menu');
        $('.menu__icon_content').removeClass('active__icon');
      }else{
        menuItems.addClass('active__menu');
        $('.menu__icon_content').addClass('active__icon');
      }
    });
    menuItemsLi.on('click', function(){
      if(menuItems.hasClass('active__menu')){
        menuItems.removeClass('active__menu');
        $('.menu__icon_content').removeClass('active__icon');
      }
    });
  }
}
