function getCookie(name){ return( document.cookie.match('(^|; )'+name+'=([^;]*)')||0 )[2] }

function getCheckoutURL() {
  var token = null;
  do{
        token=getCookie('cart');
  }
  while(token == undefined);
  
  var myshopify_domain='biohm.myshopify.com'
  try { var ga_linker = ga.getAll()[0].get('linkerParam') } catch(err) { var ga_linker ='' }
  var customer_param = '';
  return "https://checkout.rechargeapps.com/r/checkout?myshopify_domain="+myshopify_domain+"&cart_token="+token+"&"+ga_linker+"&"+customer_param+"&discount=NEWYEAR";
}

function redirectToPage() {
  window.location.href = getCheckoutURL();
}

function addItemToCart(variant_id, quantity, shipping_interval_frequency, shipping_interval_unit_type, subscription_id) {
  var data = {
    "quantity": quantity,
    "id": variant_id,
    "properties[shipping_interval_frequency]": shipping_interval_frequency, 
    "properties[shipping_interval_unit_type]": shipping_interval_unit_type,            
    "properties[subscription_id]": subscription_id
  };
  
  jQuery.ajax({
    type: 'POST',
    url: 'https://biohmhealth.com/cart/add.js',
    data: data,
    dataType: 'json',
    success: function(resp) { 
      redirectToPage();
    }
  });
}

jQuery(document).ready(function() {
  addItemToCart(43109271061 , 1, "1", "Months", "45304");
});
