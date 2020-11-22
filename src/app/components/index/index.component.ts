import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    "use strict";
    var imgItems = $('.slider li').length;
    var imgPos = 1;
    //var i
    for(var i = 1; i <= imgItems; i++){
      $('.pagination').append('<li class:"circulo"></li>');
    }
    $('.pagination li').css({'width': '15px'})
                       .css({'height': '15px'})
                       .css({'border-radius': '50%'})
                       .css({'margin-left': '15px'})
                       .css({'cursor': 'pointer'})
                       .css({'background-color': '#fff'})
    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'background-color': '#6D9EB3'});
    $('.pagination li').click(pagination);
    $('.right').click(nextSlider);
    $('.left').click(prevSlider);
    setInterval(function(){
      nextSlider();
    }, 10000);
    function pagination(){
      var numeroPagina = $(this).index() + 1;
      $('.slider li').hide();
      $('.slider li:nth-child('+ numeroPagina +')').fadeIn();
      $('.pagination li').css({'background-color': '#fff'});
      $(this).css({'background-color': '#6D9EB3'});
      imgPos = numeroPagina;
    }
    function nextSlider(){
      if(imgPos >= imgItems){
        imgPos = 1;
      }else{
        imgPos++;
      }
      $('.pagination li').css({'background-color': '#fff'});
      $('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#6D9EB3'});
      $('.slider li').hide();
      $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
    function prevSlider(){
      if(imgPos <= 1){imgPos = imgItems;}
      else{imgPos--;}
      $('.pagination li').css({'background-color': '#fff'});
      $('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#6D9EB3'});
      $('.slider li').hide();
      $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }
    //slider Nosostros
    $('.nosotros__captions li').hide();
    $('.nosotros__captions li:first-child').show();
    $('.cont__botones li:first-child').addClass('item__active')
    $('.cont__botones li').on('click', function(){
      var numeroBoton = $(this).index();
      $('.nosotros__captions li').hide();
      $('.nosotros__captions li:nth-child('+ (numeroBoton + 1) +')').show();
      $('.cont__botones li').removeClass('item__active');
      $(this).addClass('item__active');
    });

  }//fin__del__script
}
