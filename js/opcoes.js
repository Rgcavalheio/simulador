



$(".opcao, .opcao2").click(function() {


	var same = 0;


	switch(etapa){


		case 1:

		var clicado =   $(this).attr('data-opcao');


		for (var i = 1; i <= 4; i++) {
			document.getElementById("check-planta-"+i).src = "imagens/no-check.png";
			document.getElementById("opcao-planta-"+i).className = "opcao";

		}


		var checkbox = document.getElementById("check-planta-"+clicado);
		checkbox.src = "imagens/check.png";
		var opcao = document.getElementById("opcao-planta-"+clicado);
		opcao.className = "opcao-escolhida";


		var preco_mostra = 0;
		$('#preco-mostra').attr('data-escolhidos', "");

		var preco_opcao =   $(this).attr('data-valor');
		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;

		var soma = parseInt(preco_mostra) + parseInt(preco_opcao);
		var soma_str = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		
		$('#preco-mostra').attr('data-total', soma);
		
		soma_str = "Valor: "+soma_str
		ReplaceContentInContainer('preco-mostra',soma_str);

		$('#preco-mostra').attr('data-escolhidos',clicado);


		document.getElementById("proximo").classList.remove("disabled");


		break;

		case 3:

		var clicado =   $(this).attr('data-opcao');
		var planta = document.getElementById('preco-mostra').dataset.escolhidos;


		for (var f = 1; f <= 3; f++) {  
			// console.log("check-fachadas-p"+planta+"-"+f);
			document.getElementById("check-fachadas-p"+planta+"-"+f).src = "imagens/no-check.png";
			document.getElementById("opcao-fachadas-p"+planta+"-"+f).className = "opcao";
		}
		document.getElementById("check-fachadas-p"+planta+"-"+clicado).src = "imagens/check.png";	
		document.getElementById("opcao-fachadas-p"+planta+"-"+clicado).className = "opcao-escolhida";


		var preco_opcao =   $(this).attr('data-valor');

		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;

		var preco_mostra_data = document.getElementById('preco-mostra').dataset.total;




		var soma = parseInt(preco_mostra_data) + parseInt(preco_opcao);



		var soma_str = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		soma_str = "Valor: "+soma_str
		$('#preco-mostra').attr('data-tempb', soma);

		ReplaceContentInContainer('preco-mostra',soma_str);

		$('#preco-mostra').attr('data-temp',clicado);


		document.getElementById("proximo").classList.remove("disabled");

		break;

		case 4:

		same = 1;

		var nick = "padrao";
		var itens = "2";


		var clicado =   $(this).attr('data-opcao');

		



	
		document.getElementById("opcao-"+nick+"-1").className = "col-md-12 px-4 standard opcao";
		document.getElementById("opcao-"+nick+"-2").className = "col-md-12 px-4 luxo opcao";
		document.getElementById("opcao-padraom-1").className = "opcao";
		document.getElementById("opcao-padraom-2").className = "opcao";


		for (var i = 1; i <= itens; i++) {

			document.getElementById("check-"+nick+"-"+i).src = "imagens/no-check.png";				

		}
		for (var i = 1; i <= itens; i++) {

			document.getElementById("check-padraom-"+i).src = "imagens/no-check.png";				

		}

		if(clicado== 1){
			opcao_css = "standard";
		}else{
			opcao_css = "luxo";
		}





		document.getElementById("opcao-"+nick+"-"+clicado).className = "col-md-12 px-4 "+opcao_css+" opcao-escolhida";
		document.getElementById("check-"+nick+"-"+clicado).src = "imagens/check.png";	
		document.getElementById("opcao-padraom-"+clicado).className = "opcao-escolhida";
		document.getElementById("check-padraom-"+clicado).src = "imagens/check.png";	

		

		var preco_opcao =   $(this).attr('data-valor');

		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;

		var preco_mostra_data = document.getElementById('preco-mostra').dataset.total;

		var soma = parseInt(preco_mostra_data) + parseInt(preco_opcao);

		var soma_str = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		soma_str = "Valor: "+soma_str
		$('#preco-mostra').attr('data-tempb', soma);

		ReplaceContentInContainer('preco-mostra',soma_str);

		$('#preco-mostra').attr('data-temp',clicado);

		document.getElementById("proximo").classList.remove("disabled");


		same = 0;































		break;


		case 5:

		same = 1;

		var nick = "lazer";
		var itens = "4";
		var opcao_css = "px-3 pb-1 mx-3 ";

		var clicado =   $(this).attr('data-opcao');
		ReplaceContentInContainer('proximo',"próximo");



		break;

		case 6:
		var clicado =   $(this).attr('data-opcao');

		for (var i = 1; i <= 4; i++) {


			var opcao = document.getElementById("opcao-terreno-"+i);
			opcao.className = "btn btn-secondary btn-lg my-2 opcao2 hover";


		}



		var opcao = document.getElementById("opcao-terreno-"+clicado);
		opcao.className = "btn btn-secondary btn-lg my-2 opcao2-escolhida";


		if(clicado == 4){


			document.getElementById("mapa").src = "imagens/6 - terreno/mapa3.jpg";

		}else{

			document.getElementById("mapa").src = "imagens/6 - terreno/mapa-op-"+clicado+".jpg";

		}
		
		


		var preco_opcao =   $(this).attr('data-valor');

		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;

		var preco_mostra_data = document.getElementById('preco-mostra').dataset.total;

		var soma = parseInt(preco_mostra_data) + parseInt(preco_opcao);

		var soma_str = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		soma_str = "Valor: "+soma_str
		$('#preco-mostra').attr('data-tempb', soma);

		ReplaceContentInContainer('preco-mostra',soma_str);

		$('#preco-mostra').attr('data-temp',clicado);

		document.getElementById("proximo").classList.remove("disabled");



		break;


	}


	if(same == 1){



		

		if(opcao_css == 4){
			cssstandard = "col-md-12 px-4 standard ";
			cssluxo = "col-md-12 px-4 luxo ";
			document.getElementById("opcao-"+nick+"-1").className = cssstandard+"opcao";
			document.getElementById("opcao-"+nick+"-2").className = cssluxo+"opcao";


			for (var i = 1; i <= itens; i++) {

				document.getElementById("check-"+nick+"-"+i).src = "imagens/no-check.png";				

			}

			if(clicado== 1){
				opcao_css = cssstandard;
			}else{
				opcao_css = cssluxo;
			}
			document.getElementById("opcao-"+nick+"-"+clicado).className = opcao_css+"opcao-escolhida";


		}else{

			for (var i = 1; i <= itens; i++) {
				if(i==1 || i==3){
					opcao_css = "px-3 pb-1 lados_lazer_1 ";
				}else{
					opcao_css = "px-3 pb-1 lados_lazer_2 ";
				}


				document.getElementById("check-"+nick+"-"+i).src = "imagens/no-check.png";
				document.getElementById("opcao-"+nick+"-"+i).className = opcao_css+"opcao";

			}

			if(clicado==1 || clicado==3){
					opcao_css = "px-3 pb-1 lados_lazer_1 ";
				}else{
					opcao_css = "px-3 pb-1 lados_lazer_2 ";
				}
			document.getElementById("opcao-"+nick+"-"+clicado).className = opcao_css+"opcao-escolhida";


		}





		document.getElementById("check-"+nick+"-"+clicado).src = "imagens/check.png";	

		

		var preco_opcao =   $(this).attr('data-valor');

		var preco_escolhidos = document.getElementById('preco-mostra').dataset.escolhidos;

		var preco_mostra_data = document.getElementById('preco-mostra').dataset.total;

		var soma = parseInt(preco_mostra_data) + parseInt(preco_opcao);

		var soma_str = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
		soma_str = "Valor: "+soma_str
		$('#preco-mostra').attr('data-tempb', soma);

		ReplaceContentInContainer('preco-mostra',soma_str);

		$('#preco-mostra').attr('data-temp',clicado);

		document.getElementById("proximo").classList.remove("disabled");


		same = 0;


	}









});












