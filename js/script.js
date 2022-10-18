var productName = document.getElementById("name");
var productPrice = document.getElementById("price");
var productType = document.getElementById("type");
var productDecription = document.getElementById("des");
var tbodyRow = document.getElementById("tbodyy");
var btnn = document.getElementById("btnn");
var btnnUp = document.getElementById("btnnUp");
var cha;
var productArray;
if (localStorage.getItem("Products") == null) {
  productArray = [];
} else {
  productArray = JSON.parse(localStorage.getItem("Products"));
}

displayRowData();
var check1;
var check2;

function validattions() {
  var regx = /^[A-Z][a-z]/;
  if (regx.test(productName.value) == true) {
    productName.classList.add("is-valid");
    productName.classList.remove("is-invalid");
    check1 = true;
  } else {
    check1 = false;
    productName.classList.add("is-invalid");
    productName.classList.remove("is-valid");
  }
}

function validattions2() {
  var regx2 = /^[A-Z][a-z]{0,15}$/;
  if (regx2.test(productType.value) == true) {
    check2 = true;
    productType.classList.add("is-valid");
    productType.classList.remove("is-invalid");
  } else {
    check2 = false;
    productType.classList.add("is-invalid");
    productType.classList.remove("is-valid");
  }
}

productName.addEventListener("blur", validattions);
productType.addEventListener("blur", validattions2);

function displayRowData() {
  var cartoona = "";
  for (let i = 0; i < productArray.length; i++) {
    tbodyRow.innerHTML = "";
  }
  for (let i = 0; i < productArray.length; i++) {
    cartoona += `<tr>
    <!-- <th scope="row">1</th> -->
    <td>${productArray[i].name.toUpperCase()}</td>
    <td>${productArray[i].type.toUpperCase()}</td>
    <td>${productArray[i].price}</td>
    <td>${productArray[i].description.toUpperCase()}</td>
    <td>
      <button onclick="update(${i})" type="button" class="btn btn-warning">Uplaod</button>
    </td>
    <td>
      <button onclick="deleteItem(${i})" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>`;
  }
  tbodyRow.innerHTML += cartoona;
}

function add() {
  if (check1 == true && check2 == true) {
    console.log(cha);
    var productObject = {
      name: productName.value,
      type: productType.value,
      price: productPrice.value,
      description: productDecription.value,
    };

    productArray.push(productObject);
    console.log(productArray);
    console.log(cha);

    localStorage.setItem("Products", JSON.stringify(productArray));
    clear();
    displayRowData();
  }
}

function clear() {
  productName.value = "";
  productPrice.value = "";
  productType.value = "";
  productDecription.value = "";
  check1 = false;
}

function deleteItem(index) {
  productArray.splice(index, 1);
  localStorage.setItem("Products", JSON.stringify(productArray));
  displayRowData();
}

function searchProduct(str) {
  var cartoona = "";
  for (let i = 0; i < productArray.length; i++) {
    if (productArray[i].name.toLowerCase().includes(str.toLowerCase())) {
      cartoona += `<tr>
    <!-- <th scope="row">1</th> -->
    <td>${productArray[i].name.toUpperCase()}</td>
    <td>${productArray[i].type.toUpperCase()}</td>
    <td>${productArray[i].price}</td>
    <td>${productArray[i].description.toUpperCase()}</td>
    <td>
      <button onclick="update(${i})" type="button" class="btn btn-warning">Uplaod</button>
    </td>
    <td>
      <button onclick="deleteItem(${i})" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>`;
    }
  }
  tbodyRow.innerHTML = cartoona;
}

function update(index) {
  btnn.style.display = "none";
  btnnUp.style.display = "block";
  cha = index;
  productName.value = productArray[index].name;
  productPrice.value = productArray[index].price;
  productType.value = productArray[index].type;
  productDecription.value = productArray[index].description;
}

function upd() {
  validattions();
  validattions2();
  if (check1 == true && check2 == true) {
    var productObject = {
      name: productName.value,
      type: productType.value,
      price: productPrice.value,
      description: productDecription.value,
    };
    productArray[cha] = productObject;
  }
  localStorage.setItem("Products", JSON.stringify(productArray));
  clear();
  displayRowData();

  btnnUp.style.display = "none";
  btnn.style.display = "block";
}

var s = "ds";
s.includes;
