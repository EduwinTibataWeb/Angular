import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      $('.right').click(nextSlider2);
      $('.left').click(prevSlider);
      $('.item_experiencia:nth-child(2)').hide();
      function experiencias(cont){
        var item_experiencia = $('.item_experiencia');
        var nuemeroSlider = 1;
        if(cont >= 5){
          nuemeroSlider = 2;
        }else{
          nuemeroSlider = 1;
        }
        item_experiencia.hide();
        $('.item_experiencia:nth-child('+ nuemeroSlider +')').show();
        console.log(cont);
      }
      function pagination(){
        var numeroPagina = $(this).index() + 1;
        $('.slider li').hide();
        $('.slider li:nth-child('+ numeroPagina +')').fadeIn();
        $('.pagination li').css({'background-color': '#fff'});
        $(this).css({'background-color': '#6D9EB3'});
        imgPos = numeroPagina;
        experiencias(imgPos);
      }
      function nextSlider2(){
        if(imgPos >= imgItems ){
          imgPos = 1;
        }else{
          imgPos++;
        }
        $('.pagination li').css({'background-color': '#fff'});
        $('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#6D9EB3'});
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
        experiencias(imgPos);
      }
      function prevSlider(){
        if(imgPos <= 1){imgPos = imgItems;}
        else{imgPos--;}
        $('.pagination li').css({'background-color': '#fff'});
        $('.pagination li:nth-child('+ imgPos +')').css({'background-color': '#6D9EB3'});
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
        experiencias(imgPos);
      }
  }

}
