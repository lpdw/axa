  var check = document.getElementsByClassName('box-check');

  var checkThis = false;
  var filesis = filesis < 0 ? 0 : 0;
  var click = 0;

  for (var n = 0; n < check.length; n++) {
  var checkSvg = check[n].parentNode.parentNode;
  check[n].addEventListener("change", countFileSize);
  checkSvg.addEventListener("change", hideCheckOrNot);
  check[n].style.opacity = 0;
  //checkSvg.querySelector('.check').style.display = "none";
}

function countFileSize(){

  if (this.checked === true) {
      filesis = filesis + parseFloat(this.dataset.size);
      document.getElementById('countFileSize').innerHTML = filesis.toPrecision(3) + " Mo";
  } else {
      filesis = filesis - parseFloat(this.dataset.size);
      document.getElementById('countFileSize').innerHTML = filesis.toPrecision(3) < 0 ? "..." : filesis.toPrecision(3) + " Mo";
  }
}

function hideCheckOrNot(){
  //.querySelectorAll('.check').style.display = "none";

  if(this.click){
    this.querySelector('.check').style.opacity = 1;
    //this.querySelector('.check').translate(150,150);
    click += 1;
    var testModulo = (click % 2);
  }
  if(testModulo == 1) this.querySelector('.check').style.opacity = 0;
}
