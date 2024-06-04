$(document).ready(function(){
  $("#input").on("input", function() {
    var value = $(this).val().trim(); 
    var pattern = /^[a-zA-Z0-9\s]*$/;
    
    if (!pattern.test(value)) {
      $("#error-message").show();
      $("#tablebody").hide();
    } else {
      $("#error-message").hide();
      $("#tablebody").show();
      $("#tablebody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value.toLowerCase()) > -1)
      });
    }
  });
});

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
  table = document.getElementById("table1");
  switching = true;
  direction = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (direction == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++; 
    } else {
      if (switchcount == 0 && direction == "asc") {
        direction = "desc";
        switching = true;
      }
    }
  }
}
