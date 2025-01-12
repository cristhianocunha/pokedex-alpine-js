document.addEventListener('alpine:init', () => {
    Alpine.store('dex', {
        idpoke: 0,
        nomepoke: '',
        Imagepoke: '',
        descricao: '',
        pesquisar(inputValue) {
            this.idpoke = inputValue
            const url = 'https://pokeapi.co/api/v2/pokemon/';
        fetch(url +  inputValue)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro na requisição: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Dados recebidos:', data);
                    this.nomepoke = data.species.name
                    this.Imagepoke = data.sprites.front_default
                    console.log(this.Imagepoke)
                })
                .catch(error => {
                    console.error('Erro:', error.message);
                });
        }
    });
});



