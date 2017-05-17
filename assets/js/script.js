  var check = document.getElementsByClassName('box-check');
  var checkIcone = document.getElementsByClassName('check');
  var checkThis = false;
  var filesis = filesis < 0 ? 0 : 0;
  var clickss = 0;
  var clicks = 0;
  for (var n = 0; n < check.length; n++) {
  var checkSvg = check[n].parentNode.parentNode;
  check[n].addEventListener("change", countFileSize);
  checkSvg.addEventListener("click", hideCheckOrNot,clickss);
  check[n].style.opacity = 0;
  checkIcone[n].style.opacity = 0;
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

function hideCheckOrNot(clikss){
  if(this.click){
    clickss += 1;
    var testModulo = (clickss % 2);
    //Need modif ... cause selector updated
    if(testModulo == 1){this.querySelector('.check').style.opacity = 1;clickss = 1;testModulo = (clickss % 2);}
    else{this.querySelector('.check').style.opacity = 0;clickss = 0;}
  }
}
