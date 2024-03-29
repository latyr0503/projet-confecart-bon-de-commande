document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {

    // Obtenir les données du formulaire

    let valPharmacie = document.getElementById("floatingInputPharmacie").value;
    let valOrdonnance = document.getElementById(
      "floatingInputOrdonnance"
    ).value;
    let valPrenom = document.getElementById("floatingInputPrenom").value;
    let valNom = document.getElementById("floatingInputNom").value;
    let valMatricule = document.getElementById("floatingInputMatricule").value;

    // Mettre à jour les éléments de la liste avec les valeurs du formulaire

    let listItems = document
      .getElementById("ListeOne")
      .getElementsByTagName("span");
    listItems[0].textContent = valPharmacie;
    listItems[1].textContent = valOrdonnance;
    listItems[2].textContent = valPrenom;
    listItems[3].textContent = valNom;
    listItems[4].textContent = valMatricule;

    // suppresion des données des inputs

    document.getElementById("floatingInputPharmacie").value = "";
    document.getElementById("floatingInputOrdonnance").value = "";
    document.getElementById("floatingInputPrenom").value = "";
    document.getElementById("floatingInputNom").value = "";
    document.getElementById("floatingInputMatricule").value = "";
  });

document
  .getElementById("submitBtn2")
  .addEventListener("click", function (event) {
   
    // Obtenir les données du formulaire

    let valPrenom = document.getElementById("floatingInputPrenom2").value;
    let valNom = document.getElementById("floatingInputNom2").value;
    let valMatricule = document.getElementById("floatingInputMatricule2").value;
    let valServices = document.getElementById("floatingInputService").value;
    let valPhone = document.getElementById("floatingInputPhone").value;

    // Mettre à jour les éléments de la liste avec les valeurs du formulaire

    let listItems = document
      .getElementById("ListeTwo")
      .getElementsByTagName("span");
    listItems[0].textContent = valPrenom;
    listItems[1].textContent = valNom;
    listItems[2].textContent = valMatricule;
    listItems[3].textContent = valServices;
    listItems[4].textContent = valPhone;

    // suppresion des données des inputs

    document.getElementById("floatingInputNom2").value = "";
    document.getElementById("floatingInputNom2").value = "";
    document.getElementById("floatingInputMatricule2").value = "";
    document.getElementById("floatingInputService").value = "";
    document.getElementById("floatingInputPhone").value = "";
  });

document
  .getElementById("submitBtn3")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Obtenir les données du formulaire

    let valQuantite = document.getElementById("floatingInputQuantite").value;
    let valDesignation = document.getElementById(
      "floatingInputDesignation"
    ).value;
    let valPrixUnitaire = document.getElementById(
      "floatingInputPrixUnitaire"
    ).value;
    let ValPrixTotal = document.getElementById("floatingInputPrixTotal").value;

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

    // Ajout des données

    cell1.innerHTML = valQuantite;
    cell2.innerHTML = valDesignation;
    cell3.innerHTML = valPrixUnitaire + " francs CFA";
    cell4.innerHTML = ValPrixTotal + " francs CFA";

    // suppresion des données des inputs

    document.getElementById("floatingInputQuantite").value = "";
    document.getElementById("floatingInputDesignation").value = "";
    document.getElementById("floatingInputPrixUnitaire").value = "";
    document.getElementById("floatingInputPrixTotal").value = "";
  });
