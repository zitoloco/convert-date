# Convert Date

Um projeto para facilitar a conversão de data para o formato timestamp e vice-versa diretamente no terminal.

## Como funciona

A idéia é utilizar o terminal para rapidamente fazer a conversão.
No momento temos as seguintes opções:

- Human date to timestamp
- Timestamp to human date

### Human date to timestamp

Converte uma data que esteja no formato `2022-04-21 12:13:14` em timestamp `1650553994000` (com miliseguindos)

### Timestamp to human date

Converte um timestampo `1650553994000` em um formato de data `2022-04-21 12:13:14`.

## Setup

### Clonar o repositório

```
git clone git@github.com:zitoloco/convert-date.git
````

### Instalar pacotes

```
cd convert-date
npm install
````

### Habilitar link com o terminal

```
npm link
````

## Forma de utilizar

Para utilizar, basta digitar no seu terminal:

```
convert-date
````

O terminal exibirá as opções para que você escolha:

```
$ convert-date
? Select the convertion type: (Use arrow keys)
❯ Human date to timestamp
  Timestamp to human date
```
Entre com os dados para serem convertidos e... pronto!

### Veja a utilização

![convert-date](https://user-images.githubusercontent.com/140430/164497412-90842a7f-9573-466f-b4bb-8a3e93f0db70.gif)
