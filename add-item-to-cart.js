define(
  [
    "jquery"
  ], 
  function (jQuery) {
    return function (variant_id, quantity, shipping_interval_frequency, shipping_interval_unit_type, subscription_id) {
      var data = {
        "quantity": quantity,
        "id": variant_id,
        "properties[shipping_interval_frequency]": shipping_interval_frequency, 
        "properties[shipping_interval_unit_type]": shipping_interval_unit_type,            
        "properties[subscription_id]": subscription_id
      }
      jQuery.ajax({
        // type: 'POST',
        url: 'https://biohmhealth.com/cart/add.js',
        data: data,
        contentType: 'application/javascript',
        jsonp: "callback",
        dataType: 'jsonp',
        success: function(resp) { 
          console.log(resp);
        },
        error: function(resp) {
          console.log(resp);
        }
      });
    }
  }
);