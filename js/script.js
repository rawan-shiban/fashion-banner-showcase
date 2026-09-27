// switch banner section 
window.addEventListener('load', function () {
    const bannerSectionList = document.querySelectorAll('.banner-section');
    bannerSectionList.forEach(function (section) {
        section.addEventListener('click', function (e) {
            e.preventDefault();
            bannerSectionList.forEach(function (el) {
                el.classList.remove('active');
            });
            this.classList.add('active');

        });
    });
});
//activition of banner content
const bannerContentActive = name => {
    const bannerContentList = document.querySelectorAll('.item');
    bannerContentList.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(name)) {
            content.classList.add('active');
        }
    })
}

// hide banner content 
const bannerContentHide = () => {
    const bannerContentList = document.querySelectorAll('.item');
    bannerContentList.forEach(content => {
        content.classList.remove('active')
    })
}


window.addEventListener('load', () => {
    const bannerBtnList = document.querySelectorAll('.banner-btn');
    const banner = document.querySelector('.banner');
    const closeBtn = document.querySelector('.close-btn');
    const sci = document.querySelector('.sci')
    // forEach عملها تكرار على المصفوفات وليس لاضافة حدث لذا نضع برمترات لوضع حدث

    bannerBtnList.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            banner.classList.add('active');
            sci.classList.add('active');
            // هنا يتم استدعاء الدالة content
            bannerContentActive(this.getAttribute('data-target'));
        });
    });
    closeBtn.addEventListener('click',function(e){
        e.preventDefault();
        banner.classList.remove('active');
        sci.classList.remove('active');
        bannerContentHide()}
)
    })