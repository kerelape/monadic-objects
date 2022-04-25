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

`yarn add monadic-object`

### Usage

> Every function of this library does not modify the original object - it creates a new one (shallow copying), thus they can be chained
> like the functions of an Array.

### `forEach`

#### Signature

```javascript
(block: (key: string, value: any) => void) => object
```

#### Usage

```javascript
({ a: 1, b: "two" }).forEach(console.log)
  
// > "a", 1
// > "b", "two"
```

### `Map`

#### Signature

```javascript
(block: (key: string, value: any) => [string, any]) => object
```

#### Usage

```javascript
({ a: 1, b: "two" }).map((key, value) => [key, value + value])

// result > { a: 2, b: "twotwo" }
```

### `Filter`

#### Signature 

```javascript
(block: (key: string, value: any) => boolean) => object
```

#### Usage

```javascript
({ a: 1, b: "two", c: false, d: true }).filter((key, value) => Boolean(value))
  
// result > { a: 1, b: "two", d: true }
```
## Contribution

To contribute to this project - fork it, make a change (on a new branch, otherwise I reject), and open a pull request to develop.
