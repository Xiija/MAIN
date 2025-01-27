var url  = "https://discord.com/api/webhooks/1149704323857657976/7jUG3nOop-1zIIs7GxKiQ_BxVyBPsrIzqX9CeUjYA29TaQYeTL_5rt78H7CMECt5UzXx";
let mess = "sum crap sunday";
async function doit() {  

   await fetch( url, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
       username: "sum fool" ,     
       content:   ".\n"  + mess
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // or response.text() if the response is not JSON
    })
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', JSON.stringify(error) );
    });
  
};
//doit();
