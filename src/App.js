import logo from './logo.svg';
import './App.css';

const MJ_APIKEY_PUBLIC = "415618f33c5a0e19c80f139bdd43cfbe";
const MJ_APIKEY_PRIVATE = "ccf54f2a4661a313019ef3e695f55213";
var SENDER_EMAIL = "elmanu911@gmail.com";
var RECIPIENT_EMAIL = "manugc911@gmail.com";

function App() {
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

  fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(MJ_APIKEY_PUBLIC+':'+MJ_APIKEY_PRIVATE)
    },
    // body: '{\n\t\t"Messages":[\n\t\t\t\t{\n\t\t\t\t\t\t"From": {\n\t\t\t\t\t\t\t\t"Email": "$SENDER_EMAIL",\n\t\t\t\t\t\t\t\t"Name": "Me"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"To": [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\t"Email": "$RECIPIENT_EMAIL",\n\t\t\t\t\t\t\t\t\t\t"Name": "You"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t],\n\t\t\t\t\t\t"Subject": "My first Mailjet Email!",\n\t\t\t\t\t\t"TextPart": "Greetings from Mailjet!",\n\t\t\t\t\t\t"HTMLPart": "Dear passenger 1, welcome to Mailjet!May the delivery force be with you!"\n\t\t\t\t}\n\t\t]\n\t}',
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


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         PATRI Y EDU
        </p>
        <button
          className="App-link"
          onclick="sendEmail()"
          >
          Send Email
        </button>
      </header>
    </div>
  );
}

export default App;
