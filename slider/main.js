//실제할일 goToSlide(숫자); 0, 1, 2, 3,
// setInterval(() => {
    
// }, 4000);
document.addEventListener('DOMContentLoaded', () => {

let $slideWrap = document.querySelector('.container'),
    $slideContainer = document.querySelector('.slider-container'),
    $navPrev = document.querySelector('#prev'),
    $navNext = document.querySelector('#next'),
    $slide = document.querySelectorAll('.slide'),
    $slideCount = $slide.length,
    $currentIndex = 0,
    $slideHeight = 0
    
    for(let i = 0;i < $slideCount;i++){
        if($slideHeight < $slide[i].offsetHeight){
            $slideHeight = $slide[i].offsetHeight
        }
    }
    $slideWrap.style.height = $slideHeight + 'px'
    $slideContainer.style.height = $slideHeight + 'px'
    for(let a = 0;a < $slideCount;a++ ){
      $slide[a].style.left = a * 100 + '%';  
    }
    // let goToSlide = (idx) => {
    //     $slideContainer.style.left = -100 * idx + '%'
    //     $currentIndex = idx
    // }

    function goToSlide(idx){
        $slideContainer.style.left = -100 * idx + '%';
        $slideContainer.classList.add('animated');
        $currentIndex = idx;
    }

    $navPrev.addEventListener('click',function(){
        // goToSlide($currentIndex - 1)

        if($currentIndex == 0){
            // $navPrev.classList.add('.disabled')
            goToSlide($slideCount - 1)
        }else{
            // $navPrev.classList.remove('.disabled')
            goToSlide($currentIndex - 1)
        }
        
    });
    $navNext.addEventListener('click',function(){
        goToSlide($currentIndex + 1)

        if($currentIndex == $slideCount - 1){
            // $navNext.classList.add('.disabled') 
            goToSlide(0)
        }else{
            // $navNext.classList.remove('.disabled')
            goToSlide($currentIndex + 1)
        }
    });
})


