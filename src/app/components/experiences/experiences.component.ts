import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var imgItems = $('.slider2 li').length;
      var imgPos = 1;
      //var i
      for(var i = 1; i <= imgItems; i++){
        $('.pagination2 ').append('<li class:"circulo"></li>');
      }
      $('.pagination2  li').css({'width': '15px'})
                         .css({'height': '15px'})
                         .css({'border-radius': '50%'})
                         .css({'margin-left': '15px'})
                         .css({'cursor': 'pointer'})
                         .css({'background-color': '#fff'})
      $('.slider2 li').hide();
      $('.slider2 li:first').show();
      $('.pagination2  li:first').css({'background-color': '#6D9EB3'});
      $('.pagination2  li').click(pagination);
      $('.right').click(nextslider2 );
      $('.left').click(prevSlider);
      $('.item_experiencia:nth-child(2)').hide();
      function experiencias(cont){
        var item_experiencia = $('.item_experiencia');
        var nuemeroslider2 = 1;
        if(cont >= 5){
          nuemeroslider2 = 2;
        }else{
          nuemeroslider2 = 1;
        }
        item_experiencia.hide();
        $('.item_experiencia:nth-child('+ nuemeroslider2 +')').show();
        console.log(cont);
      }
      function pagination(){
        var numeroPagina = $(this).index() + 1;
        $('.slider2 li').hide();
        $('.slider2 li:nth-child('+ numeroPagina +')').fadeIn();
        $('.pagination2  li').css({'background-color': '#fff'});
        $(this).css({'background-color': '#6D9EB3'});
        imgPos = numeroPagina;
        experiencias(imgPos);
      }
      function nextslider2 (){
        if(imgPos >= imgItems ){
          imgPos = 1;
        }else{
          imgPos++;
        }
        $('.pagination2  li').css({'background-color': '#fff'});
        $('.pagination2  li:nth-child('+ imgPos +')').css({'background-color': '#6D9EB3'});
        $('.slider2 li').hide();
        $('.slider2 li:nth-child('+ imgPos +')').fadeIn();
        experiencias(imgPos);
      }
      function prevSlider(){
        if(imgPos <= 1){imgPos = imgItems;}
        else{imgPos--;}
        $('.pagination2  li').css({'background-color': '#fff'});
        $('.pagination2  li:nth-child('+ imgPos +')').css({'background-color': '#6D9EB3'});
        $('.slider2 li').hide();
        $('.slider2 li:nth-child('+ imgPos +')').fadeIn();
        experiencias(imgPos);
      }
  }

}
