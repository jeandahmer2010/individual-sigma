async function cafe() {
    const destino = document.getElementById('destino');

    try {
        const response = await fetch('dados.json');

        if (!response.ok) throw new Error('falha ao carregar dados');

        const cafes = await response.json();

        destino.innerHTML = '';

        cafes.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
            <img src="imagem/${item.imagem}" alt="foto de ${item.name}">
            <h3><h3>
            <p><p>
            <a ref="${item.endereco}">
                <button type="button">saiba mais</button>
            </a>
            `;

            card.querySelector('h3').textcontent = item.nome;
            card.querySelector('p').textContent = item.descricao;

            destino.appendChild(card);
        });
    } catch (error) {
        console.error('erro na requesição', error);
        destino.innerHTML = `<p>Desculpe, não foi possivel carregar as informações no momento.</p>`;

    }
}
