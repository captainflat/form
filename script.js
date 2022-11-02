const form = document.getElementById('#my-form');
const form1 = document.querySelector('.my-form1');
const hidden = document.querySelector('.form_hidden');
const btn = document.querySelector('.my-form-button');
const btn1 = document.querySelector('.btn1');
const body = document.querySelector('.body');
const btn2 = document.querySelector("#nav-icon4");


btn2.addEventListener('click', function (e) {
    btn2.classList.toggle('open');
    setTimeout(function() {
        
        form1.classList.toggle('open');
    }, 500)
    e.preventDefault();
}) 

    btn.addEventListener('click', function(e) {
        hidden.classList.toggle('open');
        form.addEventListener("submit", handleSubmit());
        
        setTimeout(function timerclose() {
            form1.classList.remove('open');
            hidden.classList.remove('open');
        }, 3000)
        e.preventDefault();
    })
    
    btn1.addEventListener('click', function(e) {
        form1.classList.toggle('open');
        async function handleSubmit(event) {
        
            event.preventDefault();
            var status = document.getElementById("#my-form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
              method: form.method,
              body: data,
              headers: {
                  'Accept': 'application/json'
              }
            }).then(response => {
              if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
              } else {
                response.json().then(data => {
                  if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                  } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                  }
                })
              }
            }).catch(error => {
              status.innerHTML = "Oops! There was a problem submitting your form"
            });
          }
          
        e.preventDefault();
    })