$(document).ready(startFunstion);

function startFunstion() {
    wiecej();
    productsReadMore();
}

function wiecej(){

    let czytaj = $(".readMore");

    $(document).scroll();
  
    //plynne przesuniecie strony na gore essasito czy cos es
    czytaj.click(function () {
      $("html, body").animate({
        scrollTop: 980
      }, 1000)
    })
  }
  
  function productsReadMore(){
  
      let productReadMore = $(".productReadMore");
  
      $(document).scroll();
    
      //plynne przesuniecie strony na gore essasito czy cos es
      productReadMore.click(function () {
        $("html, body").animate({
          scrollTop: 900
        }, 1000)
      })
    }
