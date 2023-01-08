# degree_convertor

## Introduction:
degree_convertor is a cellcius & farhenheit convertor, helps in converting degrees between countries and also displays a conversion table with comments.

###### Example of use:
- If you are a US resident and want to convert Fahrenheit to Celsius because you are coming to visit Israel.
- You are working with an American system that shows you the data in Fahrenheit can be used in this NPM for conversion
- Is the number even or odd?
The goal is to prevent the user from performing various mathematical operations to reach the results that the package functions can bring in seconds.

## Features:
- Displays a conversion table.
- Performs a calculation using a conversion formula between the degrees.
- Only accepts integer.
- Simple to use

#### Dependencies:
- cli-table

## Example 1:
##### "°C convert to °F ":
```bash
function convert_fahn(degree){
    farhenheit=((degree*1.8)+32);
    console.log(`The degree in °F ${farhenheit}`);
}
```
##### Result: 
```bash
convert_fahn(0); The degree in °F 32
```
## Example 2:
##### "°F convert to °C ":
```bash
function convert_cell(degree){
    celsius=((degree-32)/1.8);
    console.log(`The degree in °C ${celsius}`);
}
```
##### Result: 
```bash
convert_cell(40); The degree in °C 4.444444444444445
```

## Example 3:
##### "°Degree table convertor ":
```bash
function degree_table(){
    var Table = require('cli-table');
    var table = new Table({
        head: ['Celsius', 'Farhenheit','Notes']
      , colWidths: [15, 15, 30]
    });
    
    table.push(
        ['0 °C', '32 °F','']
      , ['4.44 °C', '40 °F','']
      , ['10.00 °C', '50 °F','']
      , ['15.56 °C', '60 °F','']
      , ['21.11 °C', '70 °F','Room temperature']
      , ['26.67 °C', '80 °F','']
      , ['32.22 °C', '90 °F','']
      , ['37 °C', '98.6 °F','Average body temperature']
      , ['48.89 °C', '120 °F','']
      , ['54.44 °C', '130 °F','']
      , ['60.00 °C', '140 °F','']
      , ['65.56 °C', '150 °F','']
      , ['71.11 °C', '160 °F','']
      , ['76.67 °C', '170 °F','']
      , ['82.22 °C', '180 °F','']
      , ['87.78 °C', '190 °F','']
      , ['100 °C', '212 °F','Boiling point of water']
    );
    
    console.log(table.toString());}
```
##### Result: 
```bash
┌───────────────┬───────────────┬──────────────────────────────┐
│ Celsius       │ Farhenheit    │ Notes                        │
├───────────────┼───────────────┼──────────────────────────────┤
│ 0 °C          │ 32 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 4.44 °C       │ 40 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 10.00 °C      │ 50 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 15.56 °C      │ 60 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 21.11 °C      │ 70 °F         │ Room temperature             │
├───────────────┼───────────────┼──────────────────────────────┤
│ 26.67 °C      │ 80 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 32.22 °C      │ 90 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 37 °C         │ 98.6 °F       │ Average body temperature     │
├───────────────┼───────────────┼──────────────────────────────┤
│ 48.89 °C      │ 120 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 54.44 °C      │ 130 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 60.00 °C      │ 140 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 65.56 °C      │ 150 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 71.11 °C      │ 160 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 76.67 °C      │ 170 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 82.22 °C      │ 180 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 87.78 °C      │ 190 °F        │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 100 °C        │ 212 °F        │ Boiling point of water       │
└───────────────┴───────────────┴──────────────────────────────┘
```

## Exports:
```bash
module.Exports = { 
  convert_fahn: convert_fahn,
  convert_cell: convert_cell,
  degree_table: degree_table
}
```
## Installing:

```bash
npm install degree_convertor
npm install cli-table
```

## Using:
 Write down the code and use the function
 you need in the following way:
##### 1.°F  convert to °C
```bash
you write the name of the func(your °F degree ) --- You get your °F  degree in °C

Example:

convert_cell(40) ---- The degree in °C 4.444444444444445
```
##### 2.°C  convert to °F
```bash
you write the name of the func(your °C degree ) --- You get your °C  degree in °F

Example:
convert_fahn(0) ---- The degree in °F 32
```

##### 3. Get degree table convertor:
```bash
you write the name of the func() --- You get the table

Example:

input:

degree_table()

output:

┌───────────────┬───────────────┬──────────────────────────────┐
│ Celsius       │ Farhenheit    │ Notes                        │
├───────────────┼───────────────┼──────────────────────────────┤
│ 0 °C          │ 32 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤
│ 4.44 °C       │ 40 °F         │                              │
├───────────────┼───────────────┼──────────────────────────────┤

....

```


