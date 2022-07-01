# Monadic Objects

> Collection of functions to modify objects

[![Test](https://github.com/kerelape/monadic-objects/actions/workflows/test.yml/badge.svg?branch=main&event=push)](https://github.com/kerelape/monadic-objects/actions/workflows/test.yml)

## What is this libary about?

This library lets you operate javascript objects in a more convenient way than `Object.keys(...)`. 
For example you can do `({ a: 1, b: 2, c: 3 }).map((key, value) => [key, value * value])` to get `{ a: 2, b: 4, c: 9 }`

## How to use it

### Installation

#### Npm

`npm i monadic-objects`

#### Yarn

`yarn add monadic-objects`

### Usage

#### `forEach`

##### Signature

```javascript
object.forEach(block: (key: string, value: any) => void) => object
```

##### Returns

> Shallow copy of the original object

#### `map`

##### Signature

```javascript
object.map(block: (key: string, value: any) => [key: string, value: any]) => object
```

##### Returns

> Modified copy of the original object

#### `filter`

##### Signature

```javascript
object.filter(block: (key: string, value: any) => boolean) => object
```

##### Returns

> Filtered copy of the original object

#### `every`

##### Signature

```javascript
object.every(block: (key: string, value: any) => boolean) => boolean
```

##### Returns

> `true` if every block call returned `true`, otherwise - `false`

#### `some`

##### Signature

```javascript
object.some(block: (key: string, value: any) => boolean) => boolean
```

##### Returns

> `true` if at least one block call returned `true`, otherwise - `false`

## Contribution

To contribute to this project - fork it, make a change (on a new branch, otherwise I reject), and open a pull request to develop.
