var tela_a1 = document.getElementById('div_input_dados_a1');
var tela_a3 = document.getElementById('div_input_dados_a3');
var dado_nome_a1 = document.getElementById('txt_nome_a1');
var dado_cpf_a1 = document.getElementById('txt_cpf_a1');
var dado_data_a1 = document.getElementById('txt_data_a1');
var dado_ref_a1 = document.getElementById('txt_ref_a1');
var dado_nome_a3 = document.getElementById('txt_cliente_a3');
var dado_cpf_a3 = document.getElementById('txt_cpf_a3');
var dado_data_a3 = document.getElementById('txt_data_a3');
var dado_ref_a3 = document.getElementById('txt_ref_a3');
var dado_pin_a3 = document.getElementById('dado_senha_pin');
var dado_puk_a3 = document.getElementById('dado_senha_puk');
var input_nome_a1 = document.getElementById('txt_input_nome_a1');
var input_nome_a3 = document.getElementById('txt_input_nome_a3');
var input_cpf_a1 = document.getElementById('txt_input_cpf_a1');
var input_cpf_a3 = document.getElementById('txt_input_cpf_a3');
var input_ref_a1 = document.getElementById('txt_numero_referencia_a1');
var input_ref_a3 = document.getElementById('txt_numero_referencia_a3');
var input_data_a1 = document.getElementById('input_data_nasc_a1');
var input_data_a3 = document.getElementById('input_data_nasc_a3');
var input_pin_a3 = document.getElementById('txt_cod_pin_a3');
var input_puk_a3 = document.getElementById('txt_cod_puk_a3');
var input_email_a1 = document.getElementById('txt_email_a1');
var input_email_a3 = document.getElementById('txt_email_a3');
var dado_email_a1 = document.getElementById('dado_email_a1');
var dado_email_a3 = document.getElementById('dado_email_a3');
var tela_a1 = document.getElementById("div_input_dados_a1");
var tela_a3 = document.getElementById("div_input_dados_a3");
var btn_modelo_a1 = document.getElementById("btn_a1_a1")
var btn_modelo_a3 = document.getElementById("btn_a3_a3")
var body = document.getElementById("body");
var txt_rodape = document.getElementById("txt_rodape_form");
var logo_light = document.getElementById("logo_form");
var logo_dark = document.getElementById("logo_form_dark");
var tela_desc = document.getElementById("descricao_tela");
var txt_desc = document.getElementById("div_span_desc");

var tela_edicao = document.getElementById('form_envio_dados');
var formulario_a1 = document.getElementById('folha_form_a1');
var formulario_a3 = document.getElementById('folha_form_a3')
var btn_light = document.getElementById("btn_light");
var btn_dark = document.getElementById("btn_dark");


function dark_mode(){
    txt_rodape.style.color = "white";
    body.style.backgroundColor = "black";
    tela_a1.style.backgroundColor = "#386062";
    tela_a3.style.backgroundColor = "#386062";
    btn_modelo_a1.style.border = "5px solid white";
    btn_modelo_a3.style.border = "5px solid white";
    logo_dark.style.display = "block";
    logo_light.style.display = "none";
    tela_desc.style.backgroundColor = "black";
    txt_desc.style.color = "white";
    btn_light.style.cursor = "pointer";
    btn_dark.style.cursor = "default";

}

function light_mode(){
    logo_dark.style.display = "none";
    logo_light.style.display = "block";
    txt_rodape.style.color = "black";
    body.style.backgroundColor = "white";
    tela_a1.style.backgroundColor = 'rgb(1, 139, 210)';
    tela_a3.style.backgroundColor = 'rgb(1, 139, 210)';
    btn_modelo_a1.style.border = "5px solid black";
    btn_modelo_a3.style.border = "5px solid black";
    tela_desc.style.backgroundColor = "rgb(233, 238, 235)";
    txt_desc.style.color = "black";
    btn_dark.style.backgroundColor = "black";
    btn_dark.style.color = "white";
    btn_light.style.cursor = "default"
    btn_dark.style.cursor = "pointer"
}

// input_data_a1.addEventListener("blur",function(){
//     if(input_data_a1.value) input_data_a1.value = input_data_a1.value.match(/.{2}/g).join("/").replace(/\.(?=[^.]*$)/,"/");
// });

function imprimir_a1(){
    carregar_dados_a1();
tela_edicao.style.display = "none";
formulario_a1.style.display = "block";
window.print();
voltar_tela();
}

function imprimir_a3(){
    carregar_dados_a3();
tela_edicao.style.display = "none";
formulario_a3.style.display = "block";
window.print();
voltar_tela();
}

function voltar_tela(){
    tela_edicao.style.display = "block";
    formulario_a3.style.display = "none";
    formulario_a1.style.display = "none";
}

function mostra_tela_a1(){
    tela_a1.style.display = "block";
    tela_a3.style.display = "none";   
}

function mostra_tela_a3(){
    tela_a3.style.display = "block";
    tela_a1.style.display = "none";   
}



function carregar_dados_a1(){
    dado_nome_a1.value = input_nome_a1.value;
    dado_cpf_a1.value = input_cpf_a1.value;
    dado_data_a1.value = input_data_a1.value;
    dado_ref_a1.value = input_ref_a1.value;
    dado_email_a1.value = input_email_a1.value;
}

function carregar_dados_a3(){
    dado_nome_a3.value = input_nome_a3.value;
    dado_cpf_a3.value = input_cpf_a3.value;
    dado_data_a3.value = input_data_a3.value;
    dado_ref_a3.value = input_ref_a3.value;
    dado_pin_a3.value = input_pin_a3.value;
    dado_puk_a3.value = input_puk_a3.value;
    dado_email_a3.value = input_email_a3.value;
}

function apagar_campos_a1(){
    input_nome_a1.value = "";
    input_cpf_a1.value = "";
    input_data_a1.value = "";
    input_ref_a1.value = "";
}

function apagar_campos_a3(){
    input_nome_a3.value = "";
    input_cpf_a3.value = "";
    input_data_a3.value = "";
    input_ref_a3.value = "";
    input_pin_a3.value = "";
    input_puk_a3.value = "";
}