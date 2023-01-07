
function convert_fahn(degree){
    farhenheit=((degree*1.8)+32);
    console.log(`The degree in °F ${farhenheit}`);
}


convert_fahn(0)
// *************************************************************************************

function convert_cell(degree){
    celsius=((degree-32)/1.8);
    console.log(`The degree in °C ${celsius}`);
}

convert_cell(40)

// **************************************************************************************
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
degree_table()

module.Exports = { 
  convert_fahn: convert_fahn,
  convert_cell: convert_cell,
  degree_table: degree_table
}