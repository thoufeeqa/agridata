var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });



nightmare
  .goto('http://agmarknet.gov.in/')
  .select('select#ddlArrivalPrice', '1')
  .select('select#ddlCommodity', 'Paddy(Dhan)')
  .select('select#ddlMarket', "Amritsar")
  .type('input#txtDate', '')
  .type('input#txtDate', '16-Apr-2017')
  .type('input#txtDateTo', '')
  .type('input#txtDateTo', '19-Apr-2017')
  .click('input#btnGo')
  .wait('input#cphBody_ButtonExcel')
  .html('~/Projects/test.html', 'HTMLOnly')

  .end()
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
