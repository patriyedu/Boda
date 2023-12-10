import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

const MJ_APIKEY_PUBLIC = "415618f33c5a0e19c80f139bdd43cfbe";
const MJ_APIKEY_PRIVATE = "ccf54f2a4661a313019ef3e695f55213";
var SENDER_EMAIL = "elmanu911@gmail.com";
var RECIPIENT_EMAIL = "manugc911@gmail.com";
function sendEmail(){

  /**
    curl -s \
	-X POST \
	--user "$MJ_APIKEY_PUBLIC:$MJ_APIKEY_PRIVATE" \
	https://api.mailjet.com/v3.1/send \
	-H 'Content-Type: application/json' \
	-d '{
		"Messages":[
				{
						"From": {
								"Email": "$SENDER_EMAIL",
								"Name": "Me"
						},
						"To": [
								{
										"Email": "$RECIPIENT_EMAIL",
										"Name": "You"
								}
						],
						"Subject": "My first Mailjet Email!",
						"TextPart": "Greetings from Mailjet!",
						"HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
				}
		]
	}'
   */

  var response = fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    mode: "no-cors", 
    
    headers: {
        'Origin': 'https://manugc911.github.io/patriyedu/',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(MJ_APIKEY_PUBLIC+':'+MJ_APIKEY_PRIVATE)
    },
     body: JSON.stringify({
        'Messages': [
            {
                'From': {
                    'Email': SENDER_EMAIL,
                    'Name': 'Me'
                },
                'To': [
                    {
                        'Email': RECIPIENT_EMAIL,
                        'Name': 'You'
                    }
                ],
                'Subject': 'My first Mailjet Email!',
                'TextPart': 'Greetings from Mailjet!',
                'HTMLPart': 'Dear passenger 1, welcome to Mailjet!May the delivery force be with you!'
            }
        ]
    })
});

}

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         PATRI Y EDU
        </p>
        
      </header>
      <button
          onClick={sendEmail}
          >
          Send Email cors
        </button>
    </div>
  );
}

export default App;
