const $hamburger = $(".hamburger")
const $modal = $("#modal")
const $modal_link = $(".modal_link")
const $nome_usuario = $('#nome_usuario')
const $input_nome = $('#input_nome')
const $btn_form = $('#btn_form')

$nome_usuario.text(localStorage.getItem('nomeUsuario') || '')

$hamburger.on("click", () => { 
    $hamburger.toggleClass("is-active")
    $modal.toggleClass("hidden")
})

$modal_link.on("click", () => { 
    $hamburger.toggleClass("is-active")
    $modal.toggleClass("hidden")
})

$btn_form.on('click', () => {
    const nome = $input_nome.val()
    $nome_usuario.text(nome)
    localStorage.setItem('nomeUsuario', nome)
})
