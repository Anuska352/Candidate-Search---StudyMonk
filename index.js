
// Get the input element and table
var filterInput = document.getElementById("filterInput");
var table = document.getElementById("myTable");

// Add an event listener to the input element
filterInput.addEventListener("keyup", filterTable);

// Function to filter the table
function filterTable() {
  // Get the filter value and convert it to lowercase
  var filterValue = filterInput.value.toLowerCase();

  // Get all rows in the table body
  var rows = table.getElementsByTagName("tr");

  // Loop through all rows and hide those that don't match the filter value
  for (var i = 0; i < rows.length; i++) {
    var rowData = rows[i].getElementsByTagName("td");
    var matchFound = false;

    // Loop through each cell in the row data
    for (var j = 0; j < rowData.length; j++) {
      var cellData = rowData[j].textContent || rowData[j].innerText;

      // Check if the cell data contains the filter value
      if (cellData.toLowerCase().indexOf(filterValue) > -1) {
        matchFound = true;
        break;
      }
    }

    // Show/hide the row based on the match
    if (matchFound) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
