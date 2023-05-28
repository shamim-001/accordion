const acc = document.querySelectorAll('.accordion');

for(let i = 0; i < acc.length; i++){
  acc[i].addEventListener('click',function (){
    const desc = this.nextElementSibling;
    const allDesc = document.querySelectorAll('.desc');
    const activeAcc = document.getElementsByClassName('accordion active');

    if(desc.style.maxHeight){
      desc.style.maxHeight = null;
      this.classList.remove('active');
    }else {

      for(let i = 0; i < activeAcc.length; i++){
        activeAcc[i].classList.remove('active');
      }

      for (let i = 0; i < allDesc.length; i++){
        allDesc[i].style.maxHeight = null;
      }

      this.classList.add('active')
      desc.style.maxHeight = desc.scrollHeight + 'px';
    }
  })
}