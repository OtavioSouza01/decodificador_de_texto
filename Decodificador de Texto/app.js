
document.getElementById("conteudo_resultado2").style.display = "none";

function criptografarTexto() {
    let texto = document.querySelector('textarea').value;
    let result = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("conteudo_resultado").style.display = "none";
    document.getElementById("conteudo_resultado2").style.display = "initial";
    document.getElementById("conteudo_resultado2_texto").innerHTML = result;
    texto = '';
}

function descriptografarTexto() {
    let texto = document.querySelector('textarea').value;
    let result = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("conteudo_resultado").style.display = "none";
    document.getElementById("conteudo_resultado2").style.display = "initial";
    document.getElementById("conteudo_resultado2_texto").innerHTML = result;
    texto = '';
}


async function copiar() {
  let text = document.getElementById("conteudo_resultado2_texto").value;
  await navigator.clipboard.writeText(text);
}