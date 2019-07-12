


etapa = 1
console.log('etapa = ' + etapa)
$('html,body').animate({scrollTop: $(".start").offset().top},'slow'); 

$(".opcoes").click(function() {

    var etapa_opcao = $(this).attr('data-etapa');



    if(etapa == etapa_opcao){

        var data_opcao = $(this).attr('data-opcao');
        var data_selecionados_desktop = document.getElementById('preco-desktop').dataset.selecionados;
        
        switch(etapa_opcao) {

            case "1":            

            $('#preco-desktop').attr('data-selecionados', data_opcao);


            document.getElementById("ambientes").className = "pt2";

            


            document.getElementById("plantaA").classList.add("hidden");
            document.getElementById("plantaB").classList.add("hidden");
            document.getElementById("plantaC").classList.add("hidden");
            document.getElementById("plantaD").classList.add("hidden");
            etapa++;
            


            if(data_opcao == "1"){


                document.getElementById("planta1a").className = "row";
                document.getElementById("planta1b").className = "row";
                document.getElementById("plantaA").classList.remove("hidden");
                document.getElementById("plantaA_img").classList.add("escolhido");


            }else if(data_opcao == "2"){

               document.getElementById("planta2a").className = "row";
               document.getElementById("planta2b").className = "row";
               document.getElementById("plantaB").classList.remove("hidden");
               document.getElementById("plantaB_img").classList.add("escolhido");


           }else if(data_opcao == "3"){

               document.getElementById("planta3a").className = "row";
               document.getElementById("planta3b").className = "row";
               document.getElementById("plantaC").classList.remove("hidden");
               document.getElementById("plantaC_img").classList.add("escolhido");


           }else if(data_opcao == "4"){

               document.getElementById("planta4a").className = "row";
               document.getElementById("planta4b").className = "row";
               document.getElementById("plantaD").classList.remove("hidden");
               document.getElementById("plantaD_img").classList.add("escolhido");


           }



           break;


           case "2": 

           var botao_escolhido = this.dataset.escolha;   

           if(botao_escolhido == "confirmar"){

               $('html,body').animate({scrollTop: $(".pt3").offset().top},'slow');    
               $('#preco-desktop').attr('data-selecionados', data_selecionados_desktop + "," + data_opcao);
               etapa++;

               document.getElementById("fachadas").className = "py-5 pt3 my-5";

               if(data_opcao == "1"){

                document.getElementById("fachadas_planta_1").className = "row";    

            }else if(data_opcao == "2"){
               document.getElementById("fachadas_planta_2").className = "row";



           }else if(data_opcao == "3"){
               document.getElementById("fachadas_planta_3").className = "row";



           }else if(data_opcao == "4"){
               document.getElementById("fachadas_planta_4").className = "row";



           }




       }else{


        $('html,body').animate({scrollTop: $(".start").offset().top},'slow');  
        document.getElementById("ambientes").className = "pt2 hidden";

        document.getElementById("plantaA").classList.remove("hidden");
        document.getElementById("plantaB").classList.remove("hidden");
        document.getElementById("plantaC").classList.remove("hidden");
        document.getElementById("plantaD").classList.remove("hidden");

        document.getElementById("plantaA_img").classList.remove("escolhido");
        document.getElementById("plantaB_img").classList.remove("escolhido");
        document.getElementById("plantaC_img").classList.remove("escolhido");
        document.getElementById("plantaD_img").classList.remove("escolhido");
        document.getElementById("planta1a").className = "row hidden";
        document.getElementById("planta1b").className = "row hidden";
        document.getElementById("planta2a").className = "row hidden";
        document.getElementById("planta2b").className = "row hidden";
        document.getElementById("planta3a").className = "row hidden";
        document.getElementById("planta3b").className = "row hidden";
        document.getElementById("planta4a").className = "row hidden";
        document.getElementById("planta4b").className = "row hidden";
        etapa--;


    }




    break;

    case "3":         

    var botao_escolhido = this.dataset.escolha;  


    if(botao_escolhido == "confirmar"){

        $('html,body').animate({scrollTop: $(".pt4").offset().top},'slow');  
        $('#preco-desktop').attr('data-selecionados', data_selecionados_desktop + "," + data_opcao);
        etapa++; 

    }else{

     $('html,body').animate({scrollTop: $(".start").offset().top},'slow');  
     etapa--;

      document.getElementById("fachadas").className = "py-5 pt3 my-5 hidden";
      document.getElementById("fachadas_planta_1").className = "row hidden";
      document.getElementById("fachadas_planta_2").className = "row hidden";
      document.getElementById("fachadas_planta_3").className = "row hidden";
      document.getElementById("fachadas_planta_4").className = "row hidden";  



 }


 break;

 case "4":            
 $('html,body').animate({scrollTop: $(".pt5").offset().top},'slow'); 
 $('#preco-desktop').attr('data-selecionados', data_selecionados_desktop + "," + data_opcao);
 etapa++; 
 break;

 case "5":            
 $('html,body').animate({scrollTop: $(".pt6").offset().top},'slow');
 $('#preco-desktop').attr('data-selecionados', data_selecionados_desktop + "," + data_opcao);
 etapa++; 
 break;

 case "6":            
 $('html,body').animate({scrollTop: $(".pt7").offset().top},'slow');
 $('#preco-desktop').attr('data-selecionados', data_selecionados_desktop + "," + data_opcao);
 etapa++; 
 break;
}


if(etapa_opcao != 1){


    var preco_desktop_data = document.getElementById('preco-desktop').dataset.value;
    var preco_opcao = $(this).attr('data-value');

    var soma = parseInt(preco_desktop_data) + parseInt(preco_opcao);
    var soma_str = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    $('#preco-desktop').attr('data-value', soma);

    ReplaceContentInContainer('preco-desktop',soma_str);
    ReplaceContentInContainer('preco-mobile',soma_str);

    if(etapa_opcao !=2){

    }



}

console.log('etapa = ' + etapa);


} else {

    window.alert('Erro na etapa.');
}



});






function ReplaceContentInContainer(id,content) {
    var container = document.getElementById(id);
    container.innerHTML = content;
}



