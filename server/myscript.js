let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick  = () => { 
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
};

let sections = document.querySelectorAll('selection');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let  id=sec.getAttribute('id');
     
    });
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
 /*=========remove toggle item and nevbar icon when click navbar=====*/
 menuIcon.classList.remove('bx-x');
 navbar.classList.remove('active');
 
 };

//////////-------------------------LIMIT THE NUMBER OF CNIC----------------------


document.querySelectorAll('input[type="number"]').forEach(input =>{ input.oninput = () =>{
    if(input.value.length > input.maxLength) input.value = input.value.slice(0,input.maxLength);
};});



/*
///-------------------------------captcha----------------------------------------------------
var allvalue =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d',]
var cval1=allvalue[Math.floor(Math.random()*allvalue.length)];
var cval2=allvalue[Math.floor(Math.random()*allvalue.length)];
var cval3=allvalue[Math.floor(Math.random()*allvalue.length)];
var cval4=allvalue[Math.floor(Math.random()*allvalue.length)];
var cval5=allvalue[Math.floor(Math.random()*allvalue.length)];
var cval6=allvalue[Math.floor(Math.random()*allvalue.length)];
var cval=cval1+cval2+cval3+cval4+cval5+cval6;
//alert(cval);
captchaValue.innerHTML = cval;
this.value=" ";
var div=document.getElementById('wrappere');
//
inputCaptcha.addEventListener('change',function(){
    thisvalue=inputCaptcha.value;
   // alert(thisvalue);
})

   var x =  document.getElementById('number');
   var y= x.value;
createAccountButto.addEventListener('click',function(){
    ///-------------------------------------------------CAPTCHA AND CNIC MUST BHI FILED------------
    if((cval == thisvalue )&& (y!== "" || y!== null) ){
        alert('valid');
        div.remove();
       // document.form1.submit();
    }
    
        if(inputCaptcha.value == " " )
        {   
         
              alert("Name must be filled out");
              return false;
            }
          
            
    
 
    else
    alert('invalid');
    return false;

    }
   


)
*/
let candidate1Count = 0;
let candidate2Count = 0;
let candidate3Count = 0;

// Function to cast a vote
function castVote() {
    const selectedCandidate = document.getElementById('candidate').value;

    // Update the vote count for the selected candidate
    switch (selectedCandidate) {
        case 'candidate1':
            candidate1Count++;
            break;
        case 'candidate2':
            candidate2Count++;
            break;
        case 'candidate3':
            candidate3Count++;
            break;
        default:
            break;
    }

    // Redirect to the vote_count.html page and pass the vote counts as URL parameters
    const urlParams = new URLSearchParams();
    urlParams.set('candidate1', candidate1Count);
    urlParams.set('candidate2', candidate2Count);
    urlParams.set('candidate3', candidate3Count);

    window.location.href = 'vote_count.html?' + urlParams.toString();
}
/*




//}

/*
function updateBlockchainUI(chain) {
    const blockchainList = document.getElementById('blockchain');
    blockchainList.innerHTML = '';

    chain.forEach(block => {
        const li = document.createElement('li');
        li.textContent = `Block ${block.index} - Hash: ${block.hash}`;
        blockchainList.appendChild(li);
    });
}*/

/*
function validateForm() {
    var div=document.getElementById('wrappere');
    var x = document.form["form1"]["cnic"].value;
   
    if ((x !== "" || x !== null)) {
      alert("Name must be filled out");
      return false;
    }
else
    div.remove();
}*/
///////////////////////////////
async function recordVote() {
    const selectedCandidate = document.querySelector('input[name="test"]:checked');
   /*           history page 
   if (selectedCandidate) {
        // Save the selected candidate to localStorage
        localStorage.setItem('selectedCandidate', selectedCandidate.value);

        // Redirect to the cast vote page
        window.location.href = 'castvote.html';
    } else {
        alert("Please select a candidate before saving.");
    }*////////////////////////////////////////history/////
    if (!selectedCandidate) {
        alert('Please select a candidate.');
        return;
    }

    const response = await fetch('/recordVote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedCandidate: selectedCandidate.value })
    });

    const blockchain = await response.json();
    updateBlockchainUI(blockchain);
    //var selectedCandidate = document.querySelector('input[name="test"]:checked');

   
}

function updateBlockchainUI(chain) {
    const blockchainList = document.getElementById('blockchain');
    blockchainList.innerHTML = '';

    chain.forEach(block => {
        const li = document.createElement('li');
        li.textContent = `Block ${block.index} - Hash: ${block.hash}`;
        blockchainList.appendChild(li);
    });
}


 




/*

function updateBlockchainUI(chain) {
    const blockchainList = document.getElementById('blockchain');
    blockchainList.innerHTML = '';

    chain.forEach(block => {
        const li = document.createElement('li');
        li.textContent = `Block ${block.index} - Hash: ${block.hash}`;
        blockchainList.appendChild(li);
    });
}*/

///=----------------------------------------------result----------------
const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');
   

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('true', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.true)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0 ||i % 2 !== 0) ? 'transparent' : ' #00bfff'     ;
       
    });
}

// 2. Sorting | Ordering data of HTML table

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}
///------------------------CONTACT------------------------------










/*=========scroll section active link=====*/

