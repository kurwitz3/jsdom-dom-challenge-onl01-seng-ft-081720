document.addEventListener("DOMContentLoaded", () => {
  counterincrease()
  const counter = document.getElementById('counter')
  const counterMinus = document.getElementById('minus')
  const counterPlus = document.getElementById('plus')
  const counterHeart = document.getElementById('heart')
  const ul = document.getElementsByClassName('likes')
  const counterPause = document.getElementById('pause')

 
  function countHearts(){
      let likes = 0 
      if (counter.innerText == null){
          let numberOfLikes = 1 
      }

  }
  function counterincrease(){
    const c = setInterval(increaseCounter,1000);
  }
  function increaseCounter(){
      counter.innerText++
  }
    counterMinus.addEventListener("click",function(){
      counter.innerText--;
    });
    counterPlus.addEventListener("click",function(){
        counter.innerText++;
      });
    counterHeart.addEventListener("click",function(){
     
     debugger
    })
    function likes(){
    const likes = 0 
    

    }
  
    });
