function storeRecords() {
  const Cars = {
    brand: brand.value,
    price: price.value,
    key: key.value,
  };
  if (brand.value == "" || price.value == "" || key.value == "") {
    alert("Please fill all the Data");
  } else {
    if (key.value in localStorage) {
      alert("This Car already Exists");
    } else {
      localStorage.setItem(Cars.key, JSON.stringify(Cars));
      alert("Car Details Was Added Successfully");
      document.getElementById("add-form").reset();
    }
  }
}
function retrieveRecords() {
  if ((search_key.value == "")) {
    alert("Please Enter a Key");
  } else {
    if (search_key.value in localStorage) {
      let Cars = JSON.parse(localStorage.getItem(search_key.value));
      retrieve.innerHTML = `
         <div class="border shadow bg-white rounded mt-3">
              <h5 class="text-center text-danger mt-2">Car Details</h5>
            <ul class="">
              <li class="list-group-item text-success fw-bolder mt-2">Car Brand : <span class="text-info">${Cars.brand}</span></li>
              <li class="list-group-item text-success fw-bolder mt-2">Car Price : <span class="text-info">${Cars.price}</span></li>
              <li class="list-group-item text-success fw-bolder my-2 ">Key : <span class="text-info">${Cars.key}</span></li>
            </ul>
          </div>`;
    } else {
      alert("No Key Found");
      document.getElementById("retrieve-form").reset();
    }
  }
}
function deleteRecords() {
  if ((delete_key.value == "")) {
    alert("Please Enter a Key");
  }else{
  if (delete_key.value in localStorage) {
    msg = confirm("Are You Sure To Delete This");
    if (msg) {
      localStorage.removeItem(delete_key.value);
      alert("Item Deleted");
      window.location = `./index.html`;
    }
  } else {
    alert("Key doesnt exist");
    document.getElementById("delete-form").reset();
  }
}
}
function deleteAll() {
  msg = confirm("Are You Sure To Delete All Records");
  if (msg) {
    localStorage.clear();
    alert("Successfully Deleted All Records");
  }
}
