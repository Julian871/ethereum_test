
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">Сервис для получения данных о Блоке и Транзакции, используя Node.js и фреймворк NestJS.</p>
<p align="center">

</p>

## Описание

Этот сервис предоставляет API для получения данных Блока по его номеру и Транзакции по её хешу.

## Cтек
* NestJS
* Typescript
* @ethers


## Установка

```bash
$ npm install
```

## Запуск приложения

```bash
$ npm run start
```

Запускается на 3003 порту - http://localhost:3003

## Описание API

### GET /block/:height

Возвращает JSON объект с данными о Блоке:
- `height`
- `hash`
- `parentHash`
- `gasLimit`
- `gasUsed`
- `size`

### GET /transactions/:hash

Возвращает JSON объект с данными о Транзакции:
- `hash`
- `to`
- `from`
- `value`
- `input`
- `maxFeePerGas`
- `maxPriotityFeePerGas`
- `gasPrice`
