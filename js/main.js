
var nome = "";
var telefone = "";
var email = "";



etapa = 0;
etapa_ants = 0;

// console.log('etapa = ' + etapa);





function reset(){


	hide_session("resumo");
	hide_session("nav_resumo");




	for (var i = 6; i >= 2; i--) {
		resetSession(i);
	}

	

	etapa_ants = 2;
	etapa = 1;
	resetou = 1;
	engineControler(etapa);


	
}






function  removeAlerta(arg){


	if(arg == 1){
		if(document.formulario.nome.value != ""){
			document.getElementById("nomehint").classList.remove("visivel");
		}
	}
	if(arg == 2){
		if(document.formulario.nome.value != ""){
			document.getElementById("telefonehint").classList.remove("visivel");
		}
	}
	if(arg == 3){
		if(document.formulario.nome.value != ""){
			document.getElementById("emailhint").classList.remove("visivel");
		}
	}



}


$("#start").click(function() {





	
	if(document.formulario.nome.value == ""){
		document.getElementById("nomehint").classList.add("visivel");
		document.getElementById("nome").focus();
	}else{
		if(document.formulario.telefone.value == ""){
			document.getElementById("telefonehint").classList.add("visivel");
			document.getElementById("telefone").focus();
		}else{
			if(validacaoEmail(document.formulario.email)){
				etapa++;
				engineControler(etapa);
			}else{
				document.getElementById("emailhint").classList.add("visivel");
				document.getElementById("email").focus();
			}
		}
	}











});


function mudarAction()
  {

//    document.formulario.action = "pagina2.php";
var nome;
nome = document.formulario.nome.value;
telefone = document.formulario.telefone.value;
email = document.formulario.email.value;
// console.log("Dados salvos:");
// console.log("nome="+nome);
// console.log("telefone="+telefone);
// console.log("email="+email);

   
  }








$("#voltar").click(function() {


	etapa_ants = etapa;
	etapa--;
	engineControler(etapa);

});





$("#proximo").click(function() {



	etapa++;
	engineControler(etapa);
	if(etapa!=2 && etapa!=5){
		document.getElementById("proximo").classList.add("disabled");
	}




});


function recebaPorEmail()
  {




	nome = document.formulario.nome.value;
	telefone = document.formulario.telefone.value;
	email = document.formulario.email.value;
	assunto = "Sua Casa - Simulação";
	var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
	var itens_escolhidos = escolhidos.split(",");
	var plantas = ['','82 m²', '93 m²', '96 m²', '122 m²'];
	var fachadas = ['','Clássica', 'Contemporânea','Moderna'];
	var padrao = ['','Standard','Luxo'];
	var area = ['Sem área de lazer','completa','com piscina','com quiosque', 'com muros e grama'];
	var terreno = ['','H','D','E'];
	planta = "Área: "+plantas[itens_escolhidos[0]];			
	fachada = "Fachada: "+fachadas[itens_escolhidos[1]];
	padrao = "Padrão: "+padrao[itens_escolhidos[2]];
	lazer = "Área de lazer: "+area[itens_escolhidos[3]];			
	if(itens_escolhidos[4] != 4){
		terreno = "Terreno: área "+terreno[itens_escolhidos[4]];
	}else{
		terreno = "Terreno: já possui ";
	}
	var preco_mostra_data = document.getElementById('preco-mostra').dataset.total;
	var soma_str = parseInt(preco_mostra_data).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
	valortotal = "Valor Total: "+soma_str;
	switch(itens_escolhidos[0]){
		case "1":
		arg2 = "/a.jpg";
		break;
		case "2":
		arg2 = "/b.jpg";
		break;
		case "3":
		arg2 = "/c.jpg";
		break;
		case "4":
		arg2 = "/d.jpg";
		break;
	}

	switch(itens_escolhidos[1]){
		case "1":
		arg1="classica";
		break;
		case "2":
		arg1="contemporanea";
		break;
		case "3":
		arg1="moderna";
		break;
	}

	img_final = "imagens/2 - fachadas/"+arg1+arg2;

	fachada_str = '<img width="515px" src="'+img_final+'"/>';


	mensagem = "<h2>Viva todos os sonhos com toda a liberdade do seu estilo na sua casa!</h2> <br>"+ fachada_str +"<br> <h3>Dados da sua simulação</h3><h4><br>"+planta+"<br>"+fachada+"<br>"+padrao+"<br>"+lazer+"<br>"+terreno+"<br>"+valortotal+"</h4><br><br><br>Este email foi gerado através da sua simulação no site suacasaseuestilo.com.br e é um resumo das opções selecionadas em nosso simulador. Através do sistema nossos corretores farão contato para sanar suas dúvidas e apresentar o projeto de forma mais completa. Caso não queira receber essas informações e nem contatos via telefone por favor retorne esse email com o assunto excluir cadastro. Suas informações são sigilosas, logo não serão repassadas a terceiros e são exclusivamente para agilizar o atendimento para a compra de sua casa.<br><br><br><br><br><br><br> <h5>Sistema desenvolvido por We Love Ideas</h5>";

	$.ajax({
		type: 'POST',
		url: 'mail_service.php',
		data: {"tipo":"3","email":email,
		"nome":nome,
		"assunto":assunto,        				
		"mensagem":mensagem},
		success: function(data) {
			$('body').append(data);
			alert("Email enviado com sucesso! \n *Não esqueça de conferir também na sua caixa de spam.");
		}
	});




	   
  }



function ReplaceContentInContainer(id,content) {
	var container = document.getElementById(id);
	container.innerHTML = content;
}



function validacaoEmail(field) {
	usuario = field.value.substring(0, field.value.indexOf("@"));
	dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

	if ((usuario.length >=1) &&
		(dominio.length >=3) && 
		(usuario.search("@")==-1) && 
		(dominio.search("@")==-1) &&
		(usuario.search(" ")==-1) && 
		(dominio.search(" ")==-1) &&
		(dominio.search(".")!=-1) &&      
		(dominio.indexOf(".") >=1)&& 
		(dominio.lastIndexOf(".") < dominio.length - 1)) {
		// console.log("E-mail válido");
	return true;
}
else{
	// console.log("email invalido");
	return false;
}
}










function engineControler(param) {

	document.body.scrollTop = document.documentElement.scrollTop = 0;

	update_nav_superior();



	var igual = 0;

	switch(param){


		case 1:





		hide_session("inicio");
		show_session("plantas");
		show_session("nav_inferior");


		email = document.formulario.email.value;
		nome = document.formulario.nome.value;
		assunto = "Sua Casa - "+nome;
		telefone = document.formulario.telefone.value;
		mensagem = "Novo Lead no sistema Sua Casa!<br>Nome: "+nome+"<br>Email: "+email+"<br>Telefone: "+telefone;










		// console.log("nome "+nome+ " assunto " +assunto+ "  mensagem " + mensagem);

		

		$.ajax({
			type: 'POST',
			url: 'mail_service.php',
			data: {"tipo":"1",
			"email":"contato@suacasaseuestilo.com.br", // EMAIL DO CONSULTOR
			"nome":nome,
			"assunto":assunto,        				
			"mensagem":mensagem},
			success: function(data) {
				$('body').append(data);
				console.log("lead_service_sucess!");
			}
		});
        // });









        if(etapa_ants == 2){


        	
        	var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
        	if(preco_escolhidos == 2){
        		preco_escolhidos = 1;
        	}

        	hide_session("ambientes-"+preco_escolhidos);
        	hide_session("ambientes");

        	
        	hide_session("voltar");

				// var video = $("#video-"+preco_escolhidos)[0]; // id or class of your <video> tag	
				// var intervalRewind;


				// intervalRewind = setInterval(function() {
				// 	video.playbackRate = 1.0;
				// 	if (video.currentTime == 0) {
				// 		clearInterval(intervalRewind);
				// 		video.pause();
				// 	} else {
				// 		video.currentTime += -.1;
				// 	}
				// }, 30);


				for (var i = 1; i < 5; i++) {

					document.getElementById("opcao-planta-"+i).className = "opcao";
					document.getElementById("check-planta-"+i).src = "imagens/no-check.png";

				}
				$('#preco-mostra').attr('data-total',0);
				

				document.getElementById("proximo").classList.add("disabled");
				ReplaceContentInContainer("proximo","PRÓXIMO");

				ReplaceContentInContainer('preco-mostra'," Valor: R$ 0.000,00");




			}

			resetou = 0;

			break;


			case 2:


			hide_session("plantas");
			show_session("ambientes");
			var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
			var preco_escolhidos_vid = document.getElementById('preco-mostra').dataset.escolhidos;
			if(preco_escolhidos_vid == 2){
				preco_escolhidos_vid = 1;
			}


		// var video = $("#video-"+preco_escolhidos_vid)[0]; // id or class of your <video> tag	
		// video.playbackRate = 1.0;
		// clearInterval(intervalRewind);	
		// video.play();
		
		// console.log("ambientes-"+preco_escolhidos_vid);

		show_session("ambientes-"+preco_escolhidos_vid);




		txts = ["","R$ 16.400,00","R$ 18.600,00","R$ 19.000,00","R$ 24.400,00"];
		precos = ["","16400","18600","19000","24400"];


		ReplaceContentInContainer("preco-padrao-luxo",txts[preco_escolhidos]);
		ReplaceContentInContainer("preco-padraom-luxo",txts[preco_escolhidos]);
		$('#opcao-padrao-2').attr('data-valor', precos[preco_escolhidos]);
		$('#opcao-padraom-2').attr('data-valor', precos[preco_escolhidos]);





		if(preco_escolhidos == 4){


			
			document.getElementById("lazer-1").src = "imagens/lazer/122/completo.jpg";
			document.getElementById("lazer-2").src = "imagens/lazer/122/piscina.jpg";
			document.getElementById("lazer-3").src = "imagens/lazer/122/quiosque.jpg";	
			document.getElementById("lazer-4").src = "imagens/lazer/122/nada.jpg";
			document.getElementById("lazer-link-1").href = "imagens/lazer/122/completo_.jpg";
			document.getElementById("lazer-link-2").href = "imagens/lazer/122/piscina_.jpg";
			document.getElementById("lazer-link-3").href = "imagens/lazer/122/quiosque_.jpg";
			document.getElementById("lazer-link-4").href = "imagens/lazer/122/nada_.jpg";
			
		}





		





		ReplaceContentInContainer("proximo","CONFIRMAR");
		show_session("voltar");


		if(etapa_ants == 3){

			resetSession(2);

		}



		break;


		case 3:

		show_session("fachadas");	

		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var preco_total = document.getElementById('preco-mostra').dataset.total;

		if(etapa_ants != 4){
			hide_session("ambientes");				
			ReplaceContentInContainer("proximo","PRÓXIMO");

		}else{
			resetSession(3);



		}



		show_session("fachadas-planta-"+preco_escolhidos);


		break;

		case 4:

		show_session("padroes");


		if(etapa_ants != 5){

			hide_session("fachadas");
			var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
			var escolhido_temp = document.getElementById('preco-mostra').dataset.temp;
			$('#preco-mostra').attr('data-escolhidos',escolhidos+","+escolhido_temp);
			var preco_temporario = document.getElementById('preco-mostra').dataset.tempb;
			$('#preco-mostra').attr('data-total',preco_temporario);

		}else{

			resetSession(4);




		}

		






		break;

		case 5:

		if(etapa_ants != 6){


			hide_session("padroes");



			ReplaceContentInContainer('proximo',"PULAR");


			document.getElementById("proximo").className = "btn btn-lg text-uppercase w-75 btn-warning";



			var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
			var escolhido_temp = document.getElementById('preco-mostra').dataset.temp;





			$('#preco-mostra').attr('data-escolhidos',escolhidos+","+escolhido_temp);
			var preco_temporario = document.getElementById('preco-mostra').dataset.tempb;
			$('#preco-mostra').attr('data-total',preco_temporario);


		}else{
			resetSession(5)











		}
		$('#preco-mostra').attr('data-temp',"0");
		show_session("lazer");





		break;




		case 6:

		if(etapa_ants != 7){

			hide_session("lazer");

			ReplaceContentInContainer('proximo',"próximo");

			document.getElementById("proximo").classList.add("disabled");
			var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
			var escolhido_temp = document.getElementById('preco-mostra').dataset.temp;
			$('#preco-mostra').attr('data-escolhidos',escolhidos+","+escolhido_temp);
			var preco_temporario = document.getElementById('preco-mostra').dataset.tempb;
			$('#preco-mostra').attr('data-total',preco_temporario);


		}else{
			resetSession(6);





		}
		show_session("terreno");




		break;

		case 7:
		var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;



		hide_session("terreno");
		show_session("resumo");
		show_session("nav_resumo");







		var escolhido_temp = document.getElementById('preco-mostra').dataset.temp;
		$('#preco-mostra').attr('data-escolhidos',escolhidos+","+escolhido_temp);
		var preco_temporario = document.getElementById('preco-mostra').dataset.tempb;
		$('#preco-mostra').attr('data-total',preco_temporario);
		var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;


		var itens_escolhidos = escolhidos.split(",");


		switch(itens_escolhidos[0]){

			case "1":
			arg2 = "/a.jpg";
			break;
			case "2":
			arg2 = "/b.jpg";
			break;
			case "3":
			arg2 = "/c.jpg";
			break;
			case "4":
			arg2 = "/d.jpg";
			break;

		}

		switch(itens_escolhidos[1]){


			case "1":
			arg1="classica";
			break;
			case "2":
			arg1="contemporanea";
			break;
			case "3":
			arg1="moderna";
			break;


		}

		img_final = "imagens/2 - fachadas/"+arg1+arg2;







		document.getElementById("imgfinal").src = img_final;




		var plantas = ['','82 m²', '93 m²', '96 m²', '122 m²'];
		var fachadas = ['','Clássica', 'Contemporânea','Moderna'];
		var padrao = ['','Standard','Luxo'];
		var area = ['Sem área de lazer','completa','com piscina','com quiosque', 'com muros e grama'];
		var terreno = ['','H','D','E'];



		ReplaceContentInContainer('item1',"Fachada "+fachadas[itens_escolhidos[1]]);
		ReplaceContentInContainer('item2',"Área "+plantas[itens_escolhidos[0]]);
		ReplaceContentInContainer('item3',"Padrão "+padrao[itens_escolhidos[2]]);

		if(itens_escolhidos[3] != 0){
			ReplaceContentInContainer('item4',"Área de lazer "+area[itens_escolhidos[3]]);

		}else{
			document.getElementById("item4").className = "hidden";
		}




		if(itens_escolhidos[4] != 4){
			ReplaceContentInContainer('item5',"Terreno parte "+terreno[itens_escolhidos[4]]);
		}else{
			document.getElementById("item5").className = "hidden";
		}

		var preco_mostra_data = document.getElementById('preco-mostra').dataset.total;



		var soma_str = parseInt(preco_mostra_data).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

		ReplaceContentInContainer('total',"Valor Total: "+soma_str);
		hide_session("nav_inferior");

		planta = "Área: "+plantas[itens_escolhidos[0]];			
		fachada = "Fachada: "+fachadas[itens_escolhidos[1]];
		padrao = "Padrão: "+padrao[itens_escolhidos[2]];
		lazer = "Área de lazer: "+area[itens_escolhidos[3]];			
		if(itens_escolhidos[4] != 4){
			terreno1 = "Terreno: área "+terreno[itens_escolhidos[4]];
		}else{
			terreno1 = "Terreno: já possui ";
		}
		valortotal = "Valor Total: "+soma_str;
		email = document.formulario.email.value;
		nome = document.formulario.nome.value;
		assunto = "Sua Casa - Simulador Finalizado! - "+nome;
		telefone = document.formulario.telefone.value;




		mensagem = "Simulador finalizado! <br> Nome: "+nome+" <br>Telefone: "+telefone+" <br>Email: "+email+"<br><br>Dados da simulação:<br>"+planta+"<br>"+fachada+"<br>"+padrao+"<br>"+lazer+"<br>"+terreno1+"<br>"+valortotal+"<br><br><br><br><br><br><br> Sistema desenvolvido por We Love Ideas";







		$.ajax({
			type: 'POST',
			url: 'mail_service.php',
				data: {"tipo":"2","email":"contato@suacasaseuestilo.com.br", // EMAIL DO CONSULTOR
				"nome":nome,
				"assunto":assunto,        				
				"mensagem":mensagem},
				success: function(data) {
					$('body').append(data);
                // alert(data);
            }
        });
		var padrao = ['','Standard','Luxo'];
		planta2 = plantas[itens_escolhidos[0]].toLowerCase();
		fachada2 = fachadas[itens_escolhidos[1]];
		padrao2 = padrao[itens_escolhidos[2]];

		if(itens_escolhidos[4] != 4){
			var terreno_preco = ['','a partir de R$125.200,00','a partir de R$123.200,00','a partir de R$155.200,00'];
			terreno_valor = terreno_preco[itens_escolhidos[4]];
			terreno2 = terreno[itens_escolhidos[4]];
			txt_terreno = " Também gostaria de saber mais sobre os terrenos do Alto da Boa Vista e pré selecionei a área "+terreno2+" com valores "+terreno_valor+".";
			arg5 = " (casa e terreno)";

		}else{
			txt_terreno = " Já possuo terreno."
			arg5 = " (somente casa)";
		}


		if(itens_escolhidos[3] == 0){
			lazer2 = "sem área de lazer";

		}else{
			lazer2 = "área de lazer "+area[itens_escolhidos[3]].toLowerCase();
		}

		link_whats = "https://wa.me/5554999013231?text=";

		msg_whats = "Meu nome é "+nome+" e gostaria de marcar uma reunião para saber mais detalhes de como será a minha casa! No site através do simulador escolhi a planta com área de "+planta2+", com a fachada "+fachada2+", padrões  de acabamento "+padrao2+", "+lazer2+"."+txt_terreno+" Com valor total de "+soma_str+""+arg5+".";

		completa = link_whats+msg_whats.replace(" ", "%20");
		document.getElementById("whats").href=completa;



		break;


	}

	if(igual == 1){



		for (var i = 1; i <= itens; i++) {

			document.getElementById("check-"+nick+"-"+i).src = "imagens/no-check.png";
			document.getElementById("opcao-"+nick+"-"+i).className = opcao_css+"opcao";

		}
		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var preco_total = document.getElementById('preco-mostra').dataset.total;

		var retorno = preco_escolhidos.split(",");

		var encontrar_preco = "opcao-"+nick+"-"+retorno[chave];
		var preco_encontrado = document.getElementById(encontrar_preco).dataset.valor;
		var novo_preco = parseInt(preco_total) - parseInt(preco_encontrado);

		$('#preco-mostra').attr('data-total',novo_preco);
		var novo_str = novo_preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



		ReplaceContentInContainer('preco-mostra',novo_str);



		var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var novo = escolhidos.substring(0,(escolhidos.length - 2));
		$('#preco-mostra').attr('data-escolhidos',novo);

		igual = 0;


	}











		// console.log('enginecontroler:: etapa = ' + etapa)
	}





	function update_nav_superior(){


		for (var i = 0; i <= 7; i++) {

			document.getElementById("nav-"+i).classList.remove("active");

		}



		document.getElementById("nav-"+etapa).classList.add("active");




	}


	function hide_session(param) {

		document.getElementById(param).classList.add("hidden");

	}


	function show_session(param) {

		document.getElementById(param).classList.remove("hidden");

	}




	$(function(){
		var $gallery = $('.gallery a').simpleLightbox();

		$gallery.on('show.simplelightbox', function(){
      // console.log('Requested for showing');
  })
		.on('shown.simplelightbox', function(){
      // console.log('Shown');
  })
		.on('close.simplelightbox', function(){
      // console.log('Requested for closing');
  })
		.on('closed.simplelightbox', function(){
      // console.log('Closed');
  })
		.on('change.simplelightbox', function(){
      // console.log('Requested for change');
  })
		.on('next.simplelightbox', function(){
      // console.log('Requested for next');
  })
		.on('prev.simplelightbox', function(){
      // console.log('Requested for prev');
  })
		.on('nextImageLoaded.simplelightbox', function(){
      // console.log('Next image loaded');
  })
		.on('prevImageLoaded.simplelightbox', function(){
      // console.log('Prev image loaded');
  })
		.on('changed.simplelightbox', function(){
      // console.log('Image changed');
  })
		.on('nextDone.simplelightbox', function(){
      // console.log('Image changed to next');
  })
		.on('prevDone.simplelightbox', function(){
      // console.log('Image changed to prev');
  })
		.on('error.simplelightbox', function(e){
      // console.log('No image found, go to the next/prev');
      // console.log(e);
  });
	});









