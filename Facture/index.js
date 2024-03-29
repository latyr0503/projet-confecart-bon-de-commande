document
  .getElementById("submitBtn3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Obtenir les données du formulaire

    let valMatricule = document.getElementById("floatingInputMatricule").value;
    let valPrenom = document.getElementById("floatingInputPrenom").value;
    let valNom = document.getElementById("floatingInputNom").value;
    let ValCotisation = document.getElementById(
      "floatingInputCotisation"
    ).value;
    let valNdm = document.getElementById("floatingInputNdm").value;
    let ValMontant = document.getElementById("floatingInputMontant").value;

    // Créer une nouvelle ligne

    let table = document
      .getElementById("myTable")
      .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.rows.length);

    // Insérer des cellules dans la nouvelle ligne

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    // Ajout des données

    cell1.innerHTML = valMatricule;
    cell2.innerHTML = valPrenom;
    cell3.innerHTML = valNom;
    cell4.innerHTML = ValCotisation + " francs CFA";
    cell5.innerHTML = valNdm;
    cell6.innerHTML = ValMontant + " francs CFA";

    // suppresion des données des inputs

    document.getElementById("floatingInputMatricule").value = "";
    document.getElementById("floatingInputPrenom").value = "";
    document.getElementById("floatingInputNom").value = "";
    document.getElementById("floatingInputCotisation").value = "";
    document.getElementById("floatingInputNdm").value = "";
    document.getElementById("floatingInputMontant").value = "";
  });
