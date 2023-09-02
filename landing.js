       const btn = document.getElementById('btn1');
       const body = document.querySelector('body');
       
       btn.addEventListener('click', ()=> {
         
         let act = btn.classList.toggle('active');
         
         if(act === act) {
           body.classList.toggle('on-btn');
         }
         else {
           body.classList.toggle('off-btn');
         }
         
       });