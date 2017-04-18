// variáveis globais
var dados;

// constrói o header da tabela
function buildTableHeader (columns) {
  columnNames = columns;
  var table = d3.select("body").select("table");
  table.append("thead").append("tr").selectAll("th").data(columns).enter().append("th").text(function(d){
    return d;
  });
}

// constrói o corpo da tabela
function buildTableBody (data, columns) {
  dados = data;
  var table = d3.select('body').select('table');
  var tbody = table.append('tbody');

  var rows = tbody.selectAll("tr").data(data).enter().append("tr");

  var cells = rows.selectAll("td").data(function(row){
    return columns.map(function(column) {
      return {column: column, value: row[column]}
    })
  }).enter().append("td").text(function(d) {
  	return d.value;
  });

}

var columnNames;

// buildTableHeader (columnNames);

//carrega os dados do csv
d3.csv('data/dados-tp1.csv',function (data) {
  buildTableHeader(d3.keys(data[0]));
  buildTableBody(data, columnNames);
})

