import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
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
      $('.cont__botones li').on('click', function(){
        var numeroBoton = $(this).index();
        $('.nosotros__captions li').hide('fast');
        $('.nosotros__captions li:nth-child('+ (numeroBoton + 2) +')').show('fast');
        $('.cont__botones li').removeClass('item__active');
        $(this).addClass('item__active');
        $('.cont__botones').css('background','inherit')
      });
      $('a[href^="#"]').click(function(event){
        event.preventDefault();
        var elem=$(this).attr("href");
        $("html, body").animate({
          scrollTop: $(elem).offset().top
        },500);
      });
      var equipo = [
        {
          nombre: 'Natali Aristizábal Lancheros',
          cargo: 'Directora y Fundadora',
          texto: 'Ecóloga de la Pontificia Universidad Javeriana (Colombia) con Maestría en Ambiente y Sociedad de la Universidad Estadual de Goiás (Brasil); con experiencia en trabajo con comunidades en áreas rurales a nivel nacional e internacional en la implementación de proyectos, alternativas económicas sostenibles, investigación y en la academia; desde organizaciones no gubernamentales, organizaciones de base y centros de investigación, entre otros. Acompaña los procesos fortaleciendo desde el enfoque diferencial, de género y de acción sin daño, y desde la interdisciplinaridad.',
          foto: 'user_uno.png',
        },
        {
          nombre: 'Deissy Catalina Aristizábal Lancheros',
          cargo: 'Subdirectora y Cofundadora',
          texto: 'Psicóloga-Pontificia universidad Javeriana (Colombia). Magister en abuso de mujeres, niñas, niños y adolescentes - London Metropolitan University (Inglaterra). Especialista en psicología jurídica y forense- Universidad Santo Tomas. Terapeuta Gestalt integrativa- Transformación Humana. Tiene experiencia en atención e intervención terapéutica a personas víctimas del conflicto armado, adolescentes vinculados al sistema de responsabilidad penal para adolescentes, violencia de género y abuso sexual. Experta en procesos de asesoría en derechos sexuales y reproductivos y salud sexual y reproductiva.',
          foto: 'user_dos.png',
        },
        {
          nombre: 'Johana Rincón Lozano',
          cargo: 'Coordinadora de programas y proyectos',
          texto: 'Ecóloga - Pontificia Universidad Javeriana (Colombia) con Maestría en Ecology and Microbial Biodiversity – Universidad de Kaiserslautern (Alemania). Tiene experiencia en manejo y análisis de muestras biológicas para la determinación de la biodiversidad filogenética y como los patrones de cambio de los ecosistemas que influyen la distribución de las especies. Conocimientos sobre conservación y uso del paisaje a través de herramientas de información geográfica.',
          foto: 'user_tres.png',
        }
      ];
      var personaEquipo = $('.equipo__card_content figure');
      var closedModal = $('#modal__boton');
      personaEquipo.on('click', function(){
        var numeroPersona = $(this).index();
        var getModalNombre = document.getElementById("modal_nombre");
        var getModalCargo = document.getElementById("modal_cargo");
        var getModalTexto = document.getElementById("modal_texto");
        var getModalImg = $("#modal_img img");
        getModalNombre.innerHTML = equipo[numeroPersona].nombre;
        getModalCargo.innerHTML = equipo[numeroPersona].cargo;
        getModalTexto.innerHTML = equipo[numeroPersona].texto;
        getModalImg.attr('src', 'assets/img/'+ equipo[numeroPersona].foto)
        $('.modal').css('display', 'flex');
      });
      closedModal.on('click', function(){
        $('.modal').css('display', 'none');
      });
      $('.abrir_persona').on('click', function(){
        $('.modal img').attr('src','assets/img/foto 7.jpg')
      });
      $('.active_equipo').on( 'click', function(){
        $('.equipo__cara_a').css('margin-left', '-100%');
      });
    });
  }//fin__del__script
}
