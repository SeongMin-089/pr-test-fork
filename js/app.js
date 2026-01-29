// 배경 요소 선택
const bgWrap = document.querySelectorAll('.bg-wrap > div');

const swiper = new Swiper('.gallery', {
    loop: true,
    speed: 800,
    effect: 'slide', 
    
    // 자동 재생 
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    on: {
        slideChangeTransitionStart: function () {
            // loop 모드일 때는 realIndex를 사용해야 정확한 인덱스(0, 1, 2)를 가져옴
            const i = this.realIndex;

            // 모든 배경의 active 클래스 제거
            bgWrap.forEach(bg => bg.classList.remove('active'));
            
            // 현재 인덱스에 해당하는 배경에 active 클래스 추가
            // bgWrap[i]가 존재하는지 확인 후 실행
            if (bgWrap[i]) {
                bgWrap[i].classList.add('active');
            }
        }
    }
});