$(document).ready(function () {

    objectFitImages();

    $('.slider_container .cont').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true
    });
    $('.slider_container .prevBtn').click(function () {
        $('.slider_container .cont').slick("slickPrev");
    });
    $('.slider_container .nextBtn').click(function () {
        $('.slider_container .cont').slick("slickNext");
    });


    var myElement = document.querySelector(".header");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement, {
        "offset": 140,
        "tolerance": {
            up: 20,
            down: 10
        },
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });
    // initialise
    headroom.init();


    // get margin to content ubder Header
    function getMarginUnderHaeder() {
        var height = document.getElementsByClassName("header")[0].offsetHeight;
        document.getElementsByClassName("content_main")[0].style.marginTop = height + 'px';
    }
    getMarginUnderHaeder();
    $(window).on("resize", function () {
        getMarginUnderHaeder();
    });
    //add preloader of scrolling
    $("<div id='contPreloader'><div id='scrollPreload'></div></div>").prependTo($("body"));
    $(window).scroll(function () {
        var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#scrollPreload").width(ratio + "%");
    });


    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var calc = "calc(50% + " + scrollTop / 2.5 + "px)";
        $(".banner .center").css("top", calc);
    });

    // check if device is mobile:

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    if (isMobile) {
        $("body").addClass("isMobileDevice");
    } else {
        $("body").addClass("noMobileDevice");
    }

    // button arrow to UP

    $("body").append("<button class='btn_up'/>");


    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if ($(window).scrollTop() > 150) {
            $(".btn_up").addClass("activeB");
        } else {
            $(".btn_up").removeClass("activeB");
        }
    });

    $(".btn_up").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass("activeB");
        $("body").animate({
            'scrollTop': 0
        }, 800);
        $("html").animate({
            'scrollTop': 0
        }, 800);
    });


    $("#callBackForm").validate({
        rules: {
            inputName: {
                required: true,
                minlength: 2,
            },
            inputEmail: {
                required: true,
                email: true
            },
            inputPhone: {
                required: true,
                minlength: 10,
                digits: true
            }
        },
        messages: {
            inputName: {
                required: "Поле обязательное для заполнения"
            },
            inputEmail: {
                required: "Поле обязательное для заполнения",
                email: "Введите корректный Email"
            },
            inputPhone: {
                required: "Поле обязательное для заполнения"
            }
        },
        focusCleanup: true,
        focusInvalid: false
    });

    $("#inputPhone").mask('(000) 000-00-00');
    $("#phoneNumber").mask('(000) 000-00-00');

   
    setTimeout(function () {
        $(".preloaderOverlay").addClass("dn");
        $(".header").removeClass("opacity-0").addClass("opacity-1");
    }, 500);

});

$(document).ready(function () {
    //$(window).resize(setBodyPadding);
    //
    //	$(window).resize(function () {
    //		setTimeout(function () {
    //			setBodyPadding();
    //		}, 100);
    //	});
    //
    //	function setBodyPadding() {
    //		let headerHeight = $(".wrapp_main_header").height();
    //		console.log(headerHeight);
    //		$("body").css("padding-top", headerHeight);
    //	}
    //	setBodyPadding();
    ////
    //	$(window).scroll(function () {
    //		let aboveHeaderHeight = $("#aboveHeader").height();
    //
    //		if ($(window).scrollTop() > aboveHeaderHeight) {
    //			$(".wrapp_main_header").css("top", -aboveHeaderHeight);
    //			$("section.header").addClass("scrolled");
    //		} else {
    //			$(".wrapp_main_header").css("top", 0);
    //			$("section.header").removeClass("scrolled");
    //		}
    //	})

});




/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
