const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    // Button click active class
    for( let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Sections Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //Remove selected from other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }

    })
    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}
PageTransitions();

function sendEmail(){
    Email.send({
        SecureToken: "12012c5b-8ad3-4b25-bd22-f989f4575978",
        
        To : 'nepalanish98@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Subject: " + document.getElementById("subject").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message Sent Sucessfully")
    );
}