var easyHTML = {
  /* Makes a button with a value (text, an image, or any HTML element), tells it what to do when it's clicked,
  gives it an id, and, optionally, tells it which id the button should be appended to. If left blank, button will
  be appended to the body. The appendToId parameter currently doesn't work.*/
  button: function(value, event, id, appendToId) {
    var btn = document.createElement("button");
    btn.innerHTML = value;
    btn.addEventListener("click", event);
    btn.id = id;
    if (appendToId !== "undefined") {
      var appendId = document.getElementById(appendToId);
      appendId.appendChild(btn);
    } else {
      document.body.appendChild(btn);
    }  
  },
  /* Makes a table. The first argument, topLabels, takes an array of values (any HTML elements, but usually just
  text) that will make up the labels at the top of the table. The second argument, rowData, takes an array of
  arrays, each array containing the data that will make up one row of the table. The last argument is optional,
  and is the id to give the table.*/
  table: function(topLabels, rowData, id) {
    var tbl = "<table id=" + id + "><thead><tr>";
    for (var i = 0; i < topLabels.length; i++) {
      tbl += "<th>" + topLabels[i] + "</th>";
    }
    tbl += "</tr></thead><tbody>"
    for (var i = 0; i < rowData.length; i++) {
      tbl += "<tr>";
      for (var j = 0; j < rowData[i].length; j++) {
        tbl += "<td>" + rowData[i][j] + "</td>";
      }
      tbl += "</tr>"
    }
    tbl += "</tbody></table>";
    document.body.innerHTML += tbl;
  }
};
