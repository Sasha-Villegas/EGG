var form = document.getElementById("myForm");
var emailInput = document.getElementById("email");
var ageInput = document.getElementById("age");
var employeeTypeSelect = document.getElementById("employeeType");
var vendedorFields = document.getElementById("vendedorFields");
var salesCountInput = document.getElementById("salesCount");
var totalSalesInput = document.getElementById("totalSales");
var encargadoFields = document.getElementById("encargadoFields");
var employeesCountInput = document.getElementById("employeesCount");
var supervisorFields = document.getElementById("supervisorFields");
var locationsCountInput = document.getElementById("locationsCount");
var performanceDescriptionInput = document.getElementById("performanceDescription");
var favoriteColorInput = document.getElementById("favoriteColor");
var submitButton = document.querySelector("input[type='submit']");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

emailInput.addEventListener("input", function() {
  validateEmail();
});

ageInput.addEventListener("input", function() {
  validateAge();
});

employeeTypeSelect.addEventListener("change", function() {
  toggleEmployeeFields();
  validateForm();
});

salesCountInput.addEventListener("input", function() {
  validateSalesCount();
  validateForm();
});

totalSalesInput.addEventListener("input", function() {
  validateTotalSales();
  validateForm();
});

employeesCountInput.addEventListener("input", function() {
  validateEmployeesCount();
  validateForm();
});

locationsCountInput.addEventListener("input", function() {
  validateLocationsCount();
  validateForm();
});

performanceDescriptionInput.addEventListener("input", function() {
  validatePerformanceDescription();
  validateForm();
});

favoriteColorInput.addEventListener("input", function() {
  validateFavoriteColor();
  validateForm();
});

function validateForm() {
  var isEmailValid = validateEmail();
  var isAgeValid = validateAge();
  var isEmployeeFieldsValid = validateEmployeeFields();
  var isFavoriteColorValid = validateFavoriteColor();

  if (isEmailValid && isAgeValid && isEmployeeFieldsValid && isFavoriteColorValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function validateEmail() {
  var email = emailInput.value;
  var emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
  var emailError = document.getElementById("emailError");

  if (emailRegex.test(email)) {
    emailError.textContent = "";
    return true;
  } else {
    emailError.textContent = "Ingrese un correo válido.";
    return false;
  }
}

function validateAge() {
  var age = parseInt(ageInput.value);
  var ageError = document.getElementById("ageError");

  if (age > 0) {
    ageError.textContent = "";
    return true;
  } else {
    ageError.textContent = "Ingrese una edad válida.";
    return false;
  }
}

function toggleEmployeeFields() {
  var selectedOption = employeeTypeSelect.value;

  vendedorFields.style.display = "none";
  encargadoFields.style.display = "none";
  supervisorFields.style.display = "none";

  if (selectedOption === "vendedor") {
    vendedorFields.style.display = "block";
  } else if (selectedOption === "encargado") {
    encargadoFields.style.display = "block";
  } else if (selectedOption === "supervisor") {
    supervisorFields.style.display = "block";
  }
}

function validateEmployeeFields() {
  var selectedOption = employeeTypeSelect.value;

  if (selectedOption === "vendedor") {
    return validateSalesCount() && validateTotalSales();
  } else if (selectedOption === "encargado") {
    return validateEmployeesCount();
  } else if (selectedOption === "supervisor") {
    return validateLocationsCount() && validatePerformanceDescription();
  }

  return true;
}

function validateSalesCount() {
  var salesCount = parseInt(salesCountInput.value);
  var salesCountError = document.getElementById("salesCountError");

  if (salesCount > 0) {
    salesCountError.textContent = "";
    return true;
  } else {
    salesCountError.textContent = "Ingrese una cantidad de ventas válida.";
    return false;
  }
}

function validateTotalSales() {
  var totalSales = parseFloat(totalSalesInput.value);
  var totalSalesError = document.getElementById("totalSalesError");

  if (totalSales > 0 && /^(\d+\.\d{1,2}|\d+)$/.test(totalSales)) {
    totalSalesError.textContent = "";
    return true;
  } else {
    totalSalesError.textContent = "Ingrese un monto total vendido válido.";
    return false;
  }
}

function validateEmployeesCount() {
  var employeesCount = parseInt(employeesCountInput.value);
  var employeesCountError = document.getElementById("employeesCountError");

  if (employeesCount >= 5) {
    employeesCountError.textContent = "";
    return true;
  } else {
    employeesCountError.textContent = "Ingrese una cantidad de empleados a cargo mayor o igual a 5.";
    return false;
  }
}

function validateLocationsCount() {
  var locationsCount = parseInt(locationsCountInput.value);
  var locationsCountError = document.getElementById("locationsCountError");

  if (locationsCount >= 2) {
    locationsCountError.textContent = "";
    return true;
  } else {
    locationsCountError.textContent = "Ingrese una cantidad de locales administrados mayor o igual a 2.";
    return false;
  }
}

function validatePerformanceDescription() {
  var performanceDescription = performanceDescriptionInput.value;
  var performanceDescriptionError = document.getElementById("performanceDescriptionError");
  var wordCount = performanceDescription.split(" ").filter(function(word) {
    return word !== "";
  }).length;

  if (wordCount >= 5) {
    performanceDescriptionError.textContent = "";
    return true;
  } else {
    performanceDescriptionError.textContent = "Ingrese una descripción del desempeño general con al menos 5 palabras.";
    return false;
  }
}

function validateFavoriteColor() {
  var favoriteColor = favoriteColorInput.value;
  var favoriteColorError = document.getElementById("favoriteColorError");

  if (favoriteColor !== "") {
    favoriteColorError.textContent = "";
    return true;
  } else {
    favoriteColorError.textContent = "Seleccione un color favorito válido.";
    return false;
  }
}

function resetForm() {
  form.reset();
  vendedorFields.style.display = "none";
  encargadoFields.style.display = "none";
  supervisorFields.style.display = "none";
  submitButton.disabled = true;
}

function createTableRow(data) {
  var table = document.querySelector(".form-container table");
  var newRow = document.createElement("tr");

  for (var key in data) {
    var newCell = document.createElement("td");

    if (key === "email") {
      newCell.setAttribute("contenteditable", "true");
      newCell.addEventListener("input", function(event) {
        updateRow(event.target);
      });
    }

    newCell.textContent = data[key];
    newRow.appendChild(newCell);
  }

  table.appendChild(newRow);
}

function updateRow(cell) {
  var row = cell.parentNode;
  var data = {};

  Array.from(row.children).forEach(function(cell, index) {
    if (index === 0) {
      data["email"] = cell.textContent;
    } else {
      var label = form.querySelector("label[for='" + cell.getAttribute("id") + "']");
      data[label.textContent] = cell.textContent;
    }
  });

  row.remove();
  createTableRow(data);
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var email = emailInput.value;
  var age = ageInput.value;
  var employeeType = employeeTypeSelect.options[employeeTypeSelect.selectedIndex].text;
  var salesCount = salesCountInput.value || "-";
  var totalSales = totalSalesInput.value || "-";
  var employeesCount = employeesCountInput.value || "-";
  var locationsCount = locationsCountInput.value || "-";
  var performanceDescription = performanceDescriptionInput.value || "-";
  var turno = form.querySelector("input[name='turno']:checked");
  var favoriteColor = favoriteColorInput.value || "-";

  var data = {
    "Correo electrónico": email,
    "Edad": age,
    "Tipo de empleado": employeeType,
    "Cantidad de ventas": salesCount,
    "Monto total vendido": totalSales,
    "Cantidad de empleados a cargo": employeesCount,
    "Cantidad de locales administrados": locationsCount,
    "Descripción del desempeño general": performanceDescription,
    "Turno": turno ? turno.value : "-",
    "Color favorito": favoriteColor
  };

  createTableRow(data);
  resetForm();
});