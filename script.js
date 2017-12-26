require(
  [
    "jquery",
    "./add-item-to-cart"
  ],
  function(jQuery, addItemToCart) {
    jQuery('#clickButton').click(function(){
       addItemToCart(43109271061 , 1, "1", "Months", "45304")
    });
  }
);
