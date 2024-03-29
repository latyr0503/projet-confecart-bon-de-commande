document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    // Get form data
    let valPharmacie = document.getElementById("floatingInputPharmacie").value;
    let valOrdonnance = document.getElementById(
      "floatingInputOrdonnance"
    ).value;
    let valPrenom = document.getElementById("floatingInputPrenom").value;
    let valNom = document.getElementById("floatingInputNom").value;
    let valMatricule = document.getElementById("floatingInputMatricule").value;

    // Update list items with form values
    let listItems = document
      .getElementById("ListeOne")
      .getElementsByTagName("span");
    listItems[0].textContent = valPharmacie;
    listItems[1].textContent = valOrdonnance;
    listItems[2].textContent = valPrenom;
    listItems[3].textContent = valNom;
    listItems[4].textContent = valMatricule;

    document.getElementById("floatingInputPharmacie").value = "";
    document.getElementById("floatingInputOrdonnance").value = "";
    document.getElementById("floatingInputPrenom").value = "";
    document.getElementById("floatingInputNom").value = "";
    document.getElementById("floatingInputMatricule").value = "";
  });

document
  .getElementById("submitBtn2")
  .addEventListener("click", function (event) {
    // Get form data
    let valPrenom = document.getElementById("floatingInputPrenom2").value;
    let valNom = document.getElementById("floatingInputNom2").value;
    let valMatricule = document.getElementById("floatingInputMatricule2").value;
    let valServices = document.getElementById("floatingInputService").value;
    let valPhone = document.getElementById("floatingInputPhone").value;

    // Update list items with form values
    let listItems = document
      .getElementById("ListeTwo")
      .getElementsByTagName("span");
    listItems[0].textContent = valPrenom;
    listItems[1].textContent = valNom;
    listItems[2].textContent = valMatricule;
    listItems[3].textContent = valServices;
    listItems[4].textContent = valPhone;

    document.getElementById("floatingInputNom2").value = "";
    document.getElementById("floatingInputNom2").value = "";
    document.getElementById("floatingInputMatricule2").value = "";
    document.getElementById("floatingInputService").value = "";
    document.getElementById("floatingInputPhone").value = "";
  });


document.getElementById("submitBtn3").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  let valQuantite = document.getElementById("floatingInputQuantite").value;
  let valDesignation = document.getElementById("floatingInputDesignation").value;
  let valPrixUnitaire = document.getElementById("floatingInputPrixUnitaire").value;
  let ValPrixTotal = document.getElementById("floatingInputPrixTotal").value;

  // Create a new row
  let table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.rows.length);

  // Insert cells into the new row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

  // Add data to the cells
  cell1.innerHTML = valQuantite ;
  cell2.innerHTML = valDesignation;
  cell3.innerHTML = valPrixUnitaire + " francs CFA";
  cell4.innerHTML = ValPrixTotal + " francs CFA";

  // Clear form field
  document.getElementById("floatingInputQuantite").value = "";
  document.getElementById("floatingInputDesignation").value = "";
  document.getElementById("floatingInputPrixUnitaire").value = "";
  document.getElementById("floatingInputPrixTotal").value = "";
});
