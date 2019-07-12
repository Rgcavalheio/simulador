
var nome = "";
var telefone = "";
var email = "";
var resetou = 0;


etapa = 0;
etapa_ants = 0;



function resetSession(session){
	var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;

	switch (session){


		case 2:

		document.getElementById("proximo").classList.remove("disabled");


		hide_session("fachadas-planta-"+preco_escolhidos);
		hide_session("fachadas");



		var retorno = preco_escolhidos.split(",");
		preco_escolhidos = retorno[1];
		$('#preco-mostra').attr('data-escolhidos',retorno[1]);
		planta = retorno[0];






		for (var i = 1; i < 4; i++) {


			document.getElementById("opcao-fachadas-p"+planta+"-"+i).className = "opcao";
			document.getElementById("check-fachadas-p"+planta+"-"+i).src = "imagens/no-check.png";	
		}






		var preco_total = document.getElementById("preco-mostra").dataset.total;
		preco_total = parseInt(preco_total);



		var novo_str = preco_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



		ReplaceContentInContainer('preco-mostra',"Valor: "+novo_str);







		break;
		case 3:

		hide_session("padroes");
		
		
		var retorno = preco_escolhidos.split(",");
		preco_escolhidos = retorno[0];
		$('#preco-mostra').attr('data-escolhidos',retorno[0]);
		planta = retorno[0];

		document.getElementById("opcao-padrao-1").className = "col-md-12 px-4 standard opcao";
		document.getElementById("opcao-padrao-2").className = "col-md-12 px-4 luxo opcao";
		document.getElementById("opcao-padraom-1").className = "opcao";
		document.getElementById("opcao-padraom-2").className = "opcao";


		for (var i = 1; i <= 2; i++) {

			document.getElementById("check-padrao-"+i).src = "imagens/no-check.png";				

		}
		for (var i = 1; i <= 2; i++) {

			document.getElementById("check-padraom-"+i).src = "imagens/no-check.png";				

		}






		for (var f = 1; f <= 3; f++) {  				
			document.getElementById("check-fachadas-p"+planta+"-"+f).src = "imagens/no-check.png";
			document.getElementById("opcao-fachadas-p"+planta+"-"+f).className = "opcao";				

		}


		var encontrar_preco = "opcao-fachadas-p"+retorno[0]+"-"+retorno[1];
		var preco_encontrado = document.getElementById(encontrar_preco).dataset.valor;
		var novo_preco = parseInt(preco_total) - parseInt(preco_encontrado);

		$('#preco-mostra').attr('data-total',novo_preco);
		var novo_str = novo_preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



		ReplaceContentInContainer('preco-mostra',"Valor: "+novo_str);





		break;
		case 4:

		hide_session("lazer");
		cssstandard = "col-md-12 px-4 standard ";
		cssluxo = "col-md-12 px-4 luxo ";
		document.getElementById("opcao-padrao-1").className = cssstandard+"opcao";
		document.getElementById("opcao-padrao-2").className = cssluxo+"opcao";

		document.getElementById("proximo").classList.add("disabled");


		for (var i = 1; i <= 2; i++) {

			document.getElementById("check-padrao-"+i).src = "imagens/no-check.png";				

		}
		for (var i = 1; i <= 2; i++) {

			document.getElementById("check-padraom-"+i).src = "imagens/no-check.png";				

		}


		var itens = 4;
		var nick = "lazer";
		
	

		for (var i = 1; i <= itens; i++) {

			document.getElementById("check-"+nick+"-"+i).src = "imagens/no-check.png";
			

		}

		document.getElementById("opcao-lazer-1").className = "opcao px-3 pb-1 lados_lazer_1 opcao";
		document.getElementById("opcao-lazer-2").className = "opcao px-3 pb-1 lados_lazer_2 opcao";
		document.getElementById("opcao-lazer-3").className = "opcao px-3 pb-1 lados_lazer_1 opcao";
		document.getElementById("opcao-lazer-4").className = "opcao px-3 pb-1 lados_lazer_2 opcao";





		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var preco_total = document.getElementById('preco-mostra').dataset.total;

		var retorno = preco_escolhidos.split(",");

		var encontrar_preco = "opcao-padrao-"+retorno[2];
		var preco_encontrado = document.getElementById(encontrar_preco).dataset.valor;
		var novo_preco = parseInt(preco_total) - parseInt(preco_encontrado);

		$('#preco-mostra').attr('data-total',novo_preco);

		var novo_str = novo_preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



		ReplaceContentInContainer('preco-mostra',"Valor: "+novo_str);
		ReplaceContentInContainer('proximo',"próximo");



		var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var novo = escolhidos.substring(0,(escolhidos.length - 2));
		$('#preco-mostra').attr('data-escolhidos',novo);





		break;
		case 5:



		hide_session("terreno");


		for (var i = 1; i <= 4; i++) {


			document.getElementById("opcao-terreno-"+i).className = "btn btn-secondary btn-lg my-2 opcao2 hover";

		}




		var nick = "lazer";
		var itens = "4";
		var opcao_css = "px-3 pb-1 mx-3 opcao ";
		var chave = 3;





		ReplaceContentInContainer('proximo',"PULAR");


		document.getElementById("proximo").className = "btn btn-lg text-uppercase w-75 btn-warning";

		for (var i = 1; i <= itens; i++) {

			document.getElementById("check-"+nick+"-"+i).src = "imagens/no-check.png";
			

		}

		
		document.getElementById("opcao-lazer-1").className = "opcao px-3 pb-1 lados_lazer_1 opcao";
		document.getElementById("opcao-lazer-2").className = "opcao px-3 pb-1 lados_lazer_2 opcao";
		document.getElementById("opcao-lazer-3").className = "opcao px-3 pb-1 lados_lazer_1 opcao";
		document.getElementById("opcao-lazer-4").className = "opcao px-3 pb-1 lados_lazer_2 opcao";




		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var preco_total = document.getElementById('preco-mostra').dataset.total;

		var retorno = preco_escolhidos.split(",");


		if(retorno[chave] != 0){
			var encontrar_preco = "opcao-"+nick+"-"+retorno[chave];
			var preco_encontrado = document.getElementById(encontrar_preco).dataset.valor;
		}else{
			var preco_encontrado = "0";	
		}



		var novo_preco = parseInt(preco_total) - parseInt(preco_encontrado);

		$('#preco-mostra').attr('data-total',novo_preco);
		$('#preco-mostra').attr('data-tempb',novo_preco);
		var novo_str = novo_preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



		ReplaceContentInContainer('preco-mostra',"Valor: "+novo_str);



		var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var novo = escolhidos.substring(0,(escolhidos.length - 2));
		$('#preco-mostra').attr('data-escolhidos',novo);


		break;

		case 6:


		hide_session("resumo");

		for (var i = 1; i <= 4; i++) {


			var opcao = document.getElementById("opcao-terreno-"+i);
			opcao.className = "btn btn-secondary btn-lg my-2 opcao2 hover";


		}



		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var preco_total = document.getElementById('preco-mostra').dataset.total;

		var retorno = preco_escolhidos.split(",");

		var encontrar_preco = "opcao-terreno-"+retorno[4];
		var preco_encontrado = document.getElementById(encontrar_preco).dataset.valor;
		var novo_preco = parseInt(preco_total) - parseInt(preco_encontrado);

		$('#preco-mostra').attr('data-total',novo_preco);


		var novo_str = novo_preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });



		ReplaceContentInContainer('preco-mostra',"Valor: "+novo_str);



		var escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;
		var novo = escolhidos.substring(0,(escolhidos.length - 2));
		$('#preco-mostra').attr('data-escolhidos',novo);


		break;







	}




}







