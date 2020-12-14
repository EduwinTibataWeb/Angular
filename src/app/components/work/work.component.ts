import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    "use strict";
    $('.trabajo').css('background-img', 'url(assets/img/foto 7.jpg)');
    $('a[href^="#"]').click(function(event){
      event.preventDefault();
      var elem=$(this).attr("href");
      $("html, body").animate({
        scrollTop: $(elem).offset().top
      },500);
    });
    var item_ejes = $('.item_eje');
    var eje = $('.item_resul_eje');
    eje.hide()
    item_ejes.on('click', function(){
      var getEje = $(this).index();
      eje.hide();
      $('.item_resul_eje:nth-child('+ (getEje + 1) +')').show();
      console.log(getEje);
    });

    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop:'0'
      });
    });
    $(window).scroll(function(){
      if($(this).scrollTop() > 500 ){
        $('.ir-arriba').slideDown(300);
      } else{
        $('.ir-arriba').slideUp(300);
      }
    });
  }
}
