$(function(){

    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    centerMode: true,
                    slidesToShow: 3,
                    arrows: false
                }
                
            },
                
            {
                breakpoint: 580,
                settings:{
                    centerMode: true,
                    slidesToShow: 2,
                    arrows: false
                }
            },

            {
                breakpoint: 380,
                settings:{
                    centerMode: true,
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 580,
                settings:{
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.depoimentos_two .container').slick({
        centerMode: false,
        arrows: false,
        dots: true,
    });
});