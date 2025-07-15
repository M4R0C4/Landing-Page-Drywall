const btnModal = document.querySelectorAll('.btn__cta');
console.log('entrou no js');

function alternarModal(modalID, abrir) {
    const modal = document.querySelector(modalID);
    if (!modal) return;

    modal.style.display = abrir ? 'flex' : 'none';

    // Boa prática: trava ou destrava o scroll
    document.body.style.overflow = abrir ? 'hidden' : 'auto';
}

const btnEnviar = document.querySelector('.modal-enviar');

const formulario = document.querySelector('.solicitar-orcamento');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    alternarModal('.modal--container', false); // Fecha o modal de formulário
    alternarModal('.modal--sucesso', true);           // Abre o modal de sucesso
})

const fechar = document.querySelector('.fechar');

fechar.addEventListener('click', () => {
    alternarModal('.modal--sucesso', false); // Fecha o modal de sucesso
})

const fecharOrcamento = document.querySelector('.fechar-orcamento');

fecharOrcamento.addEventListener('click', () => {
    alternarModal('.modal--container', false); // Fecha o modal de formulário
})

btnModal.forEach(botao => {
    botao.onclick = () => {
        alternarModal('.modal--container', true); // Corrigido também o seletor do modal
    };
});