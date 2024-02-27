const express = require('express');
//const axios = require('axios');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const request = require("request");


const nodemailer = require('nodemailer');
//const mysql = require('mysql');
const bodyParser = require('body-parser');
const notifier = require('node-notifier');
const svgCaptcha = require('svg-captcha');
//const alert = require('alert');
const fetch = require('node-fetch');

const path = require('path');


const fs = require('fs');
const { Console } = require('console');
const crypto = require('crypto');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//-----------------------------------link js file and css file ---------------------------
app.use('/assets',express.static('assets'));
app.use('/server',express.static('server'));
app.use('/images',express.static('images'));
app.use('/UI',express.static('UI'));
app.use('/blockchain',express.static('blockchain'));
const PubSub = require("./blockchain/publishsubscribe");
const blocke = require('./blockchain');
const Blockchain = require('./blockchain/Blockchain');
const Block = require('./blockchain/block'); 

app.get("/index.html",function(req, res){
  res.sendFile(__dirname+'/index.html');

});
app.get("/front.html",function(req, res){
  res.sendFile(__dirname+'/front.html');

});
app.get("/UI/history.html",function(req, res){
  res.sendFile(__dirname+'/UI/history.html');

});
app.get("/forgotPassword.html",function(req, res){
  res.sendFile(__dirname+'/forgotPassword.html');

});
app.get("/UI/castvotecopy.html",function(req, res){
  res.sendFile(__dirname+'/UI/castvotecopy.html');

});

app.get("/about.html",function(req, res){
  res.sendFile(__dirname+'/about.html');
 // res.render('about');
 app.get('/index.html',function(req, res){
  res.sendFile(__dirname+'/index.html');

});


app.get('/castvote.html',function(req, res){
  res.sendFile(__dirname+'/castvote.html');
//res.render('castvote');

});
app.get("/castvotecopy.html",function(req, res){
  res.sendFile(__dirname+'/castvotecopy.html');

});

app.get('/contact.html',function(req, res){
  res.sendFile(__dirname+'/contact.html');
//res.render('contact');
});

app.get('/candidate.html',function(req, res){
  res.sendFile(__dirname+'/candidate.html');
//res.render('candidate.html');
  });



});
app.get('/castvote.html',function(req, res){
  res.sendFile(__dirname+'/castvote.html');
//res.render('castvote');
});
app.get('/contact.html',function(req, res){
  res.sendFile(__dirname+'/contact.html');
//res.render('contact');
});
app.get('/candidate.html',function(req, res){
  res.sendFile(__dirname+'/candidate.html');
//res.render('candidate.html');
  });
////////////////-------------------------------////////////////
const PORT = 5000;//changes port as it become error not file run on same port


/*
//----------------------------------------- Set up MySQL connection-----------------------------------
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

// -----------------------------------------------------Connect to MySQL----------------------------
connection.connect((error) => {
  if (error) {
    console.log('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL');
  }
});
*/
// -------------------------Serve the HTML form---------------------------------
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// ---------------------------------------Set up Nodemailer transporter---------------------------
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  port: 587,
  auth: {
    user: 'haiqaarsheen2@gmail.com',
    pass: 'xbsv meje hwex jico',
  },
});
// Handle form submission and send the verification code email
app.post('/index.html', (req, res) => {
  const { email, code , password} = req.body;
  let codee=Math.floor(100000 + Math.random() * 900000);
  
 // var password=req.body.password;

  const mailOptions = {
    from: 'haiqaarsheen2@gmail.com',
    to: email,
    subject: 'Email Verification Code',
    text: `Your  email verification code is:<b> ${codee}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      //res.sendStatus(500);////
      notifier.notify({
        title: 'MAIL',
        message: ' ERROR IN SENDING MAIL'
        
      });
    } else {
      console.log('Email sent:', info.response);
    }});
      //---------------------------------- forget password -------------------                  7-feb-2024
   /*   
      connection.query("SELECT COUNT(*) AS cnt FROM trye WHERE email = ? " , 
 email , function(err , data){
    if(err){
        console.log(err);
    }   
    else{
        if(data[0].cnt > 0){  
         

notifier.notify({
  title: 'EMAIL ALREADY EXIST',
  message: ' PLZ LOGIN WITH ANOTHER EMAIL'
  
});
        } else{
 


          const sql = 'INSERT INTO trye(email, codee ,password) VALUES (?, ?, ?)';
          const values = [email, codee, password];
    
          connection.query(sql, values, (error, results) => {
            if (error) {
              console.log('Error saving verification code:', error);
            } else {
              console.log('Verification code saved to database');
            }
          });
        
      // res.send("data SUCCESSFULLY enter in database");///////////////////////////
      
     notifier.notify({
        title: 'DATA ENTRY',
        message: ' DATA SUCCESSFULLY ENTER'
        
      });
      ///////////// alert message////////////////////
      //function showAlert() {
  //alert('DATA SUCCESSFULLY ENTER');
//}

// Invoke the server function to trigger the alert
//showAlert();
      }
        
        
    
         } //expect(results.insertid).not.toBe(null);
  
});*/
        }

)

      //-------------------------------------------------------forget password page get-------------------------------

app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
  app.get("/forgotpassword.html",function(req, res){
    res.sendFile(__dirname+'/forgotpassword.html');
  
  });
  
  
  
 
});
app.get("/UI/otp.html",function(req, res){
  res.sendFile(__dirname+'/UI/otp.html');
  
 

});/*
app.get("/newpassword.html",function(req, res){
  res.sendFile(__dirname+'/newpassword.html');

});*/
//-------------------------------index page home page node mailer send otp code for loging----------------------------------
  app.post('/UI/forgotpassword.html', (req, res) => {
    const { email, code , password} = req.body;
    let codee=Math.floor(100000 + Math.random() * 900000);
    
   // var password=req.body.password;
  
    const mailOptions = {
      from: 'haiqaarsheen2@gmail.com',
      to: email,
      subject: 'EVB',
      text: ` Thank you for logging into our electronic voting website powered by blockchain technology. Your unique login  code is: ${codee}  This random code ensures 
      an added layer of security. Kindly click on http://localhost:5000/UI/otp.html provided in your email to proceed, contributing to a secure and transparent electoral process.
   Your commitment to participating in the democratic system is valued and crucial to maintaining the integrity of our digital voting platform.
       `,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        //res.sendStatus(500);/////////////////////
        notifier.notify({
          title: 'MAIL',
          message: ' ERROR IN MAIL SENDIND'
          
        });
      } else {
        console.log('Email sent:', info.response);
       // res.send("email send chk email");//////////////////


       
       notifier.notify({
          title: 'EMAIL SEND',
        message: ' PLZ CHK YOUR EMAIL EMAIL'
          
        });
      }});
    
      app.post('/UI/otp.html', (req, res) => {
        const opassword=req.body.opassword;
        const email=req.body.email;
         const match=opassword==codee;
         
        if(match)
        {
         // app.post('/index.html', (req, res) => {});
        
          
       /*   app.post('/newpassword.html', (req, res) => {
           var emaile=req.body.emaile;
            const password=req.body.password;
         const cpassword=req.body.cpassword;
         const pass=password==cpassword;
         if(pass){*/
         
          res.sendFile(__dirname+'/UI/index.html');
     
      
      
            //--------------------------------------------------------------Update password-----------------------:
            
          /*
            const sql = "UPDATE trye SET password =? WHERE email =?";
            const values = [password, emaile ];
              
            
              connection.query(sql, values, (error, results) => {
                if (error) {
                  console.log('Error saving verification code:', error);
                } else {
                  console.log('Verification code saved to database');
                }
                console.log(results.affectedRows + " record(s) updated");
               ////// res.send("password SUCCESSFULLY change and save");/////////
               notifier.notify({
  title: 'PASSWORD',
  message: ' PASSWORD SUCCESSLY CHANGE'
  
});
              });*/
         }
         else{
         
          notifier.notify({
            title: 'EMAIL  not VERIFY',
          message: '  FAILED TO VERIFY THR EMAIL '
            
          });
         }
        
   
          });
          
        });
     /*  else
console.log("try") ;

  });

}); */
        //////////////////////create  page for new password and confirm password///////

       
 
  
 // -------------------------------------------Generate a new CAPTCHA---------------------------------
function generateCaptcha() {
  return svgCaptcha.create();
}
// Store CAPTCHA text and its solution in a session or database (for demo purposes, using a global variable)
let captchaText = '';
let captchaSolution = '';
// Endpoint to generate CAPTCHA
app.get('/captcha', (req, res) => {
  // Generate CAPTCHA
  const captcha = generateCaptcha();
  
  // Store the CAPTCHA text in session or a database for verification later
  const captchaText = captcha.text;
  captchaSolution = captcha.text.toLowerCase(); // Convert the solution to lowercase for case-insensitive comparison
  // Send the CAPTCHA image as response
  res.type('svg');
  res.status(200).send(captcha.data);

  // Example usage: You can save the CAPTCHA text in a session or a database for verification
  // For demonstration purposes, we are just logging it to the console
  console.log('CAPTCHA Text:', captchaText);
});

app.get('/verify', (req, res) => {
  const userInput = req.query.userInput;

  if (verifyCaptcha(userInput)) {
    
    app.post('/UI/castvote.html',(req,res)=>{
      console.log("verify");
     // res.status(200).json({ success: true });
      res.sendFile(__dirname + '/UI/castvote.html')
    });
    
    
  } else {
    res.status(400).json({ success: false });
  }
});

// Verify user input against the stored CAPTCHA solution
function verifyCaptcha(userInput) {
  const userInputLower = userInput.toLowerCase(); // Convert the user input to lowercase for case-insensitive comparison
  return userInputLower === captchaSolution;
}
//});

// Serve HTML file
app.use(express.static('captcha'));


console.log("3");
app.get('/callback', (req, res) => {
  console.log("1");
  const { id_token } = req.query;


  // Verify the id_token with Google's API to ensure its authenticity.
  // You can use libraries like `google-auth-library` for this purpose.

  // If the id_token is valid, you can create a user session and redirect
  // the user to a dashboard or any other page on your website.
  // If the id_token is invalid, handle the error or redirect to a login page.

  res.send('Successfully logged in!');
 
});


///-------------------------login with google using passport-google----------------------------------//


const CLIENT_ID = '755488278493-o4nc4f58o5m119q63hjq8g8t0m19m21l.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:5000/auth/google/callback';
app.use(session({ secret: 'secrite', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.get("/",function(req, res){
  res.sendFile(__dirname+'/index.html');

});
passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: REDIRECT_URI,
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you can process the user data returned by Google and implement your login logic
      return done(null, profile);
    }
  )
);
// Serialize user data to store in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user data from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Route to start the Google OAuth login process
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback route after Google login
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login-failure' }), (req, res) => {
  // Redirect to the success page after successful login
  res.redirect('/login-success');
});

// Route for the login success page
app.get('/login-success', (req, res) => {
  // Access the user's data stored in req.user
  res.send(`Welcome, ${req.user.displayName}!`);
});

// Route for the login failure page
app.get('/login-failure', (req, res) => {
  res.send('Login failed. Please try again.');
});

// Route to logout
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

    //-----------------------------------------------------------------------vot count on result page--------------------
    // Initialize vote counts
    let candidate1Count = 0;
    let candidate2Count = 0;
    let candidate3Count = 0;
    let candidate4Count = 0;
    let candidate5Count = 0;
    let candidate6Count = 0;
    let candidate7Count = 0;
    let candidate8Count = 0;
    let candidate9Count = 0;
    let candidate10Count = 0;
    let candidate11Count = 0;
    let candidate12Count = 0;
    let candidate13Count = 0;
    
    app.post('/castvote.html', (req, res) => {
        const selectedCandidate = req.body.test;
    
        if (selectedCandidate) {
            // Update the vote count for the selected candidate
            switch (selectedCandidate) {
                case 'name 1':
                    candidate1Count++;
                    break;
                case 'name 2':
                    candidate2Count++;
                    break;
                case 'name 3':
                    candidate3Count++;
                    break;
                    case 'name 4':
                        candidate4Count++;
                        break;
                        case 'name 5':
                            candidate5Count++;
                            break;
                            case 'name 6':
                                candidate6Count++;
                                break;
                                case 'name 7':
                                    candidate7Count++;
                                    break;
                                    case 'name 8':
                                        candidate8Count++;
                                        break;
                                        case 'name 9':
                                        candidate9Count++;
                                        break;
                                        case 'name 10':
                                        candidate10Count++;
                                        break;
                                        case 'name 11':
                                        candidate11Count++;
                                        break;
                                        case 'name 12':
                                        candidate12Count++;
                                        break;
                                        case 'name 13':
                                          candidate13Count++;
                                          break;
    
                default:
                    break;
            }
            res.redirect('/result.html');
        } else {
            res.send('Please select a candidate before submitting your vote.');
        }
    });
    
    app.get('/result.html', (req, res) => {
        const resultHTML = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="google-signin-client_id" content="755488278493-pf8bdq0sslh94mrjilh1vqjm2trpscso.apps.googleusercontent.com">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
              
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
                <link rel="stylesheet" href="./assets/style.css">
                <link rel="stylesheet" href="simplebar.css">
            </head>
        
            <body>
                <div class="chk">
                <header class="header"  >
                    <a href="#" class="logo" id>EVB.</a>
                    
                    <i class='bx bx-menu' id="menu-icon" ></i>
                    
                    <nav class="navbar"  >
                       
                        
                       <ul>
                         
                      <li> <a href="/UI/index.html" class="active">HOME</a></li>
                        <li><a href="/UI/about.html">ABOUT</a></li>
                     <li><a href="/UI/candidate.html" >   CANDIDATE</a></li>
                        <li><a href="/UI/castvote.html" >CAST VOTE</a></li>
                        
                       <li> <a href="/UI/contact.html">CONTACT</a></li>
                       <li> <a href="result.html">RESULT</a></li>
                       <li> <a href="/UI/history.html">HISTORY</a></li>
                      
                       </ul> 
        
                   </nav>
                </header>
        <body>
            <h1 class="headig">RESULT<span>PAGE</span> </h1>
            <main class="table">
               
                <div class="table__header">
                    <h1>RESULT</h1>
                    <div class="input-group" >
                        <input type="text" id="searchInput " placeholder="Search Data...">
                        
                    </div>
                    
                </div>
                <section class="table__body" id="dataTable">
                    <table  >
                        <thead id="resulthead">
                            <tr>
                                <th> ID <span class="icon-arrow">&UpArrow;</span></th>
                                <th> CUSTOMER <span class="icon-arrow">&UpArrow;</span></th>
                                <th> LOGO <span class="icon-arrow">&UpArrow;</span></th>
                                <th> VOTE COUNT <span class="icon-arrow">&UpArrow;</span></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           
                            <tr>
                                <td> 1 </td>
                                
                                <td> <img src="images/ii.png" alt=""> NAME 1</td>
                                <td><img src="/images/icons8-bicycle-64.png"> </td>
                                <td ><p class="status delivered">${candidate1Count}</p></td>
                               
                            </tr>
                            <tr>
                             <td> 2 </td>
                             <td> <img src="images/ii.png" alt=""> NAME 2</td>
                             <td><img src="/images/icons8-bicycle-64.png"> </td>
                             <td ><p class="status delivered">${candidate2Count}</p></td>
                            
                         </tr>
                         <tr>
                           <td> 3 </td>
                           <td> <img src="images/ii.png" alt=""> NAME 3</td>
                           <td><img src="/images/icons8-bicycle-64.png"> </td>
                           <td ><p class="status delivered">${candidate3Count}</p></td>
                          
                       </tr>
                       <tr>
                         <td> 4 </td>
                         <td> <img src="images/ii.png" alt=""> NAME 4</td>
                         <td><img src="/images/icons8-bicycle-64.png"> </td>
                         <td ><p class="status delivered">${candidate4Count}</p></td>
                        
                     </tr>
                     <tr>
                       <td> 5 </td>
                       <td> <img src="images/ii.png" alt=""> NAME 5</td>
                       <td><img src="/images/icons8-bicycle-64.png"> </td>
                       <td ><p class="status delivered">${candidate5Count}</p></td>
                      
                   </tr>
                   <tr>
                     <td> 6</td>
                     <td> <img src="images/ii.png" alt=""> NAME 6</td>
                     <td><img src="/images/icons8-bicycle-64.png"> </td>
                     <td ><p class="status delivered">${candidate6Count}</p></td>
                    
                 </tr>
                 <tr>
                   <td> 7 </td>
                   <td> <img src="images/ii.png" alt=""> NAME 7</td>
                   <td><img src="/images/icons8-bicycle-64.png"> </td>
                   <td ><p class="status delivered">${candidate7Count}</p></td>
                  
               </tr>
               <tr>
                 <td> 8 </td>
                 <td> <img src="images/ii.png" alt=""> NAME 8</td>
                                <td><img src="/images/icons8-bicycle-64.png"> </td>
                 <td ><p class="status delivered">${candidate8Count}</p></td>
                
             </tr>
             <tr>
               <td> 9 </td>
               <td> <img src="images/ii.png" alt=""> NAME 9</td>
               <td><img src="/images/icons8-bicycle-64.png"> </td>
               <td ><p class="status delivered">${candidate9Count}</p></td>
           </tr>
           <tr>
            <td> 10 </td>
            <td> <img src="images/ii.png" alt=""> NAME 10</td>
                                <td><img src="/images/icons8-bicycle-64.png"> </td>
            <td ><p class="status delivered">${candidate10Count}</p></td>
           
        </tr>
        <tr>
            <td> 11 </td>
            <td> <img src="images/ii.png" alt=""> NAME 11</td>
                                <td><img src="/images/icons8-bicycle-64.png"> </td>
            <td ><p class="status delivered">${candidate11Count}</p></td>
           
        </tr>
        <tr>
            <td> 12 </td>
            <td> <img src="images/ii.png" alt=""> NAME 12</td>
            <td><img src="/images/icons8-bicycle-64.png"> </td>
            <td ><p class="status delivered">${candidate12Count}</p></td>
           
        </tr>
        <tr>
            <td> 13 </td>
            <td> <img src="images/ii.png" alt=""> NAME 13</td>
            <td><img src="/images/icons8-bicycle-64.png"> </td>
            <td ><p class="status delivered">${candidate13Count}</p></td>
           
        </tr>
        
                        </tbody>
                    </table>
                </section>
            </main>
            <footer class="footer">
                <div class="footer-text">
                    <p>copyright & copy br codehall | All Rights Reserved</p>
                </div>
                <div class="footer-icnTop">
                    <a href="#home"><i class='bx bx-up-arrow-alt'></i></a>
                </div>
               </footer>
             
        
           
               <script src="java/myscript.js"></script>
               <script src="try.js"></script>
           <script>
            const table = document.querySelector('table');
        const tbodye = document.querySelector('tbody');
        
        // Listen for scroll events on the table container
        table.parentElement.addEventListener('scroll', () => {
            const scrollTop = table.parentElement.scrollTop;
        
            // Iterate through each row in the tbody
            tbodye.querySelectorAll('tr').forEach(row => {
                const rowOffsetTop = row.offsetTop;
        
                // Calculate the distance between the row and the top of the table
                const distance = rowOffsetTop - scrollTop;
        
                // Apply the 'blur' class to rows that are not in focus (distance > 0)
                if (distance < 0) {
                    row.classList.add('blur');
                } else {
                    row.classList.remove('blur');
                }
            });
        });
           </script>
         
            
        </body>
        </html>
        
        `;
        res.send(resultHTML);
    });
       
    
    ////////////////////////////////////////////////
    
   
  
/*
    
    app.post('/recordVote', (req, res) => {
      const {selectedCandidate} = req.body.selectedCandidate;
     ;
     blockchain.addBlock( { selectedCandidate } );
      const pubsub = new PubSub( { blockchain } );
      pubsub.broadcastChain();
    
      res.json(blockchain.getChain());
  });*/

  
// Handle form submission
app.post('/check-cnic', (req, res) => {
  const submittedCNIC = req.body.cnic;

  // Check if the first 4 digits are "34104"
  if (submittedCNIC.startsWith('34104')) {
    
    
      res.sendFile(__dirname+'/UI/castvotecopy.html');
    
    

  
  
  
  } else {
    notifier.notify({
      title: 'wrong',
      message: ' CNIC IS WRONG'
      
    });
    // res.send('<script>document.getElementById("form1").style.opacity = 0; document.getElementById("confirmation").style.opacity = 1; document.getElementById("resultText").textContent = "CNIC Number is not valid.";</script>');
  }
});
// ... existing code ...
//-----------------------------------------------------link blockchain----------------------------------------
const blockchain = new Blockchain();

app.post('/recordVote', (req, res) => {
  const selectedCandidate = req.body.selectedCandidate;
  
  blockchain.addBlock(selectedCandidate);
 // res.json(blockchain.getChain());
 const pubsub = new PubSub({blockchain});
  pubsub.broadcastChain();
 // res.json(blockchain.getChain());
});
//const candidateVotes = {}; 

/*
app.post('/submitVote', (req, res) => {
  const candidateData = req.body;
  blockchain.addBlock({ candidateData});
  //res.json(blockchain.getChain());
  
  const pubsub = new PubSub( { blockchain } );
      pubsub.broadcastChain();
  

  // Store the candidate data in memory
  
  //const candidateName = candidateData.name;
 // if (!candidateVotes[candidateName]) {
      //candidateVotes[candidateName] = 0;
      console.log("av");
  //}
 // candidateVotes[candidateName]++;

  res.json({ message: 'Vote casted and candidate data added to the blockchain.' });
});*/

//app.use(express.static(__dirname));





//////////////////////////////// HISTORY PAGE

let voteHistory = [];

function hashCnic(cnic) {
  return crypto.createHash('sha256').update(cnic).digest('hex');
}

function getCnic(hashedCnic) {
  // Use the original 'cnic' to get the plain CNIC number.
  // Note: In a real-world application, this function would also handle the secure storage and retrieval of the original CNIC number.
  // This is just a simple example to demonstrate the concept.
  return 'some CNIC number';
}

app.post('/vote', (req, res) => {
    const cnic = req.body.cnic;
    const hashedCnic = hashCnic(cnic);
    const duplicate = voteHistory.some(vote => vote.cnic === hashedCnic);
    if (duplicate) {
        res.status(400).send('This CNIC number has already voted.');
    } else {
    voteHistory.push({ cnic: hashedCnic });
    res.redirect('/history');}
});

app.get('/UI/history.html', (req, res) => {
    fs.readFile(path.join(__dirname,  '/UI/history.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            let updatedData = data.replace('<% history.forEach(function(vote) { %>', voteHistory.map(vote => getCnic(hashedCnic)`<tr><td>${vote.cnic}</td></tr>`).join('')).replace('<% }); %>', '');
            res.send(updatedData);
        }
    });
});

app.use(express.static(path.join(__dirname, 'public')));

   
    // Start the server
    app.listen(PORT, () => {
      console.log(`listening to PORT:${PORT}`);
     
    })


