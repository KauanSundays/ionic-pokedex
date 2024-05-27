# Pokedex BSN

Este é um aplicativo simples de Pokedex construído com Ionic e Angular. Ele consome a API pública do Pokémon para exibir uma lista de Pokémons e permite ao usuário favoritar seus Pokémons favoritos.

## Funcionalidades

- Visualização de lista de Pokémons
- Pesquisa de Pokémons por nome
- Adicionar ou remover Pokémons como favoritos
- Visualização da lista de Pokémons favoritos

# ABORDAGEM
## 1. Foco na Modularidade
Dividi o projeto em módulos distintos para facilitar a manutenção e escalabilidade.

## 2. Padrões de Design Limpos
Utilizei padrões de design como Injeção de Dependência e Serviços para promover uma arquitetura limpa e organizada.

## 3. Reatividade com Observables
Aproveitei o poder dos Observables do RxJS para lidar com operações assíncronas de forma eficiente.

## 4. Gerenciamento de Estado Simples
Optei por um gerenciamento de estado simples usando Local Storage para armazenar informações de favoritos.

## 5. Testes Unitários Implementados
Garanti a qualidade do código com teste unitário (bem simples) para uma funcionalidade principal, como alternar o status favorito de um Pokémon:

```typescript
it('deve alternar o status favorito de um Pokémon', () => {
  const pokemon = { id: 1, name: 'Pikachu', favorite: false };
  spyOn(window.localStorage, 'getItem').and.returnValue(JSON.stringify([]));
  spyOn(window.localStorage, 'setItem'); 
  component.pokemons = [pokemon];

  component.toggleFavorite(pokemon, new MouseEvent('click'));

  expect(pokemon.favorite).toBe(true);
  expect(localStorage.setItem).toHaveBeenCalled(); 
});

```
## 6. Tradução de Tipos de Pokémons
Incluí um serviço para traduzir os tipos de Pokémon, facilitando a compreensão no idioma do usuário.

## 7. UI Responsiva e Intuitiva
Desenvolvi uma interface de usuário responsiva e intuitiva usando o framework Ionic e componentes Angular.

## 8. Roteamento Eficiente
Utilizei o sistema de roteamento do Angular para navegação entre páginas de forma eficiente.

## 9. Commit e Documentação Clara
Realizei commits com padrões e organização amplamente utilizados pela comunidade, para melhor entendimento de quem está revisando o código.

## 10.Aderência a Padrões de Codificação
Segui padrões de codificação consistentes e legíveis para facilitar a colaboração e manutenção futura do projeto.

  

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/KauanSundays/ionic-pokedex.git
cd ionic-pokedex
```

2. Instale as dependências:

```sh
npm install
```

3. Execute o aplicativo:

```sh
ionic serve
```

## ou faça com o DOCKER 

1. Clone o projeto
```sh
git clone https://github.com/KauanSundays/ionic-pokedex.git
cd ionic-pokedex
```

2. Construa a imagem do projeto
```sh
docker build -t pokedex-kauan .
```

3. Execute o contêiner
```sh
docker run -d -p 8080:80 pokedex-kauan
```

4. Finalmente, acesse:
```sh
http://127.0.0.1:8080/
```

Para rodar o projeto, as seguintes versões são necessárias:

- npm: 10.0.0
- Node.js: v21.7.1
- Ionic CLI: 7.2.0
