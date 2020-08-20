$(function(){
    $('h2:eq(1)').css('color', '#0058a9');
    $('h2:eq(1)').css('font-size', '20px');
    $('h2:eq(1)').css('margin-top', '30px');
    



    let scrollPos = $(window).scrollTop();
    let introID = $("#introID")
    let introH = introID.innerHeight();
    let introW = introID.innerWidth();

    //Carts

    carts();
    
    function carts() {
        for (let c = 0; c <= 4 ; c++) {
            $('div#cartID:eq(' + c + ')').css('opacity', ' '+ 1/(c+1) + '');
            $('div#cartID:eq(' + c + ')').css('transform', ' translate3d(' + c * 20 + 'px, 0, -' + c * 20 +'px)');
        } 
    }

    //FeedBack

    feedbackPosition();

    function feedbackPosition() {

        $('div.feedback__images:eq(1)').css('transform', 'scaleX(-1)');
        let a = 2;
        let b = 4;
        const positionArray = [ 0, 0.25, 0.75, 1, 0.5, 0, 1, 0.5];
        let posY;

        for (let i = 0; i < positionArray.length; i++) {

            posY = positionArray[i];
            b++;
            a++; 
            
            let x = i * b * 2;
            let y = posY * 200 + 50;
            s = a / 10;
            
            //console.log("x = " + x + "\t y = " + y + "\t s = " + s + "\t a = " + a + "\t scaleSum = " + s);
            $('div#btnFeedbackImg:eq(' + i + ')').css('transform',' translate(' + x + 'px, ' + y + 'px) scale(' + s + '');
            $('div#btnFeedbackImg2:eq(' + i + ')').css('transform',' translate(' + x + 'px, ' + y + 'px) scale(' + s + '');
        }
            
    }

    slick();
    $('#slickBtnF').css('opacity','0');

    function slick() {

        $('div#feedbackItemID:not(div#feedbackItemID:eq(0))').addClass('feedback__right');
        let i = 0;
        
        $('#slickBtnF').on('click', function() {
            i--;
            $('div#feedbackItemID:eq('+ i + ')').removeClass('feedback__left');
            $('div#feedbackItemID:eq('+ i + ')').addClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i + 1) + ')').removeClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i + 1) + ')').addClass('feedback__right');

            btnOpacity();
        });

        $('#slickBtnS').on('click', function() {
            i++;
            $('div#feedbackItemID:eq('+ i + ')').removeClass('feedback__right');
            $('div#feedbackItemID:eq('+ i + ')').addClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i - 1) + ')').removeClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i - 1) + ')').addClass('feedback__left');

            btnOpacity();
        });

        $('[data-slick]').on('click', function(){
            let elementSlick = $(this).data('slick');

            if (i >= elementSlick) {
                for (i; i >= elementSlick; i--) {
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__left');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__right');
                    console.log(i);
                }

                $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__left');
                $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
                console.log(i);

            } else if (i < elementSlick) {
                elementSlick = elementSlick - 2;

                for (i; i <= elementSlick; i++) {
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__right');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__left');
                }

                $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__right');
                $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
            }

            btnOpacity();
        });

        function btnOpacity() {
            if (i == 7) {
                $('#slickBtnS').css('opacity', '0');
            } else if ( i== 0) {
                $('#slickBtnF').css('opacity', '0');
            } else {
                $('#slickBtnS').css('opacity', '1');
                $('#slickBtnF').css('opacity', '1');
            }
        }

    }

    //Scroll

    $(window).on('scroll load resize', function(){
        scrollPos = $(this).scrollTop();

        navigation(scrollPos);
        if (scrollPos >= stepsOffset) {
            stepShow();
        }
    });

    function navigation(scrollPos) {
        let nav = $("#navigationID");

        if (scrollPos >= introH) {
            nav.css('right', '1em')
        } else {
            nav.css('right', '-6em')
        }

        if (scrollPos >= 0 && scrollPos < introH) {
            $('div#navBtn:eq(0)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(0))').removeClass("nav__active");
        } else if (scrollPos >= introH && scrollPos < introH * 2) {
            $('div#navBtn:eq(1)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(1))').removeClass("nav__active");
        } else if (scrollPos >= introH * 2 && scrollPos < introH * 3) {
            $('div#navBtn:eq(2)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(2))').removeClass("nav__active");
        } else if (scrollPos >= introH * 3 && scrollPos < introH * 4) {
            $('div#navBtn:eq(3)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(3))').removeClass("nav__active");
        } else if (scrollPos >= introH * 4 && scrollPos < introH * 5) {
            $('div#navBtn:eq(4)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(4))').removeClass("nav__active");
        } else if (scrollPos >= introH * 5 && scrollPos < introH * 6) {
            $('div#navBtn:eq(5)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(5))').removeClass("nav__active");
        } else if (scrollPos >= introH * 6 && scrollPos < introH * 7) {
            $('div#navBtn:eq(6)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(6))').removeClass("nav__active");
        } else if (scrollPos >= introH * 7 + 30 && scrollPos < introH * 8) {
            $('div#navBtn:eq(7)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(7))').removeClass("nav__active");
        } else if (scrollPos >= introH * 8) {
            $('div#navBtn:eq(8)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(8))').removeClass("nav__active");
        }


    }

    $("[data-scroll]").on('click', function(){

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        console.log(elementOffset);

        $('html, body').animate({scrollTop: elementOffset + 10}, 700);
            
    });

    $('#scrollToLogin').on('click', function(){
        let registrationOffset = $("#registrationID").offset().top;

        $('html, body').animate({scrollTop: registrationOffset + 10}, 700);

        $('#inputName').focus();

    });


    //Registration

    let inputName = $('#inputName');
    let inputEmail = $('#inputEmail');
    let inputPassword = $('#inputPassword');
    let inputCheckbox = $('input:checkbox');

    inputName.on('keyup change', function(){
        if(event.keyCode == 13) {
            $('#inputEmail').focus();
        }

        if (inputName.val().length > 0) {
            inputName.css('border', '3px solid #dbdbdb');
        }
    });
    
    $('#inputEmail').on('keyup change', function(){
        if(event.keyCode == 13) {
            $('#inputPassword').focus();
        }

        if (inputEmail.val().length > 0) {
            inputEmail.css('border', '3px solid #dbdbdb');
        }
    });

    $('#inputPassword').on('keyup change', function(){
        if (inputPassword.val().length > 0) {
            inputPassword.css('border', '3px solid #dbdbdb');
        }
    });

    $('#inputLogin').on('click', function() {
        if(inputName.val().length < 1) {
            inputName.css('border', '3px solid red');
        } if (inputEmail.val().length < 1) {
            inputEmail.css('border', '3px solid red');
        } if (inputPassword.val().length < 1) {
            inputPassword.css('border', '3px solid red');
        }
        if (!inputCheckbox.cheked) {
            inputCheckbox.css('border', '2px solid red');
        }
    });
    

    //Steps

    stepsY();

    function stepsY() {
        let x = 20,
            posY = [20, 30, -20, -20, -40, -60];

        let elementStep = $('div#subStepID'),
            y;

        for(let i = 0; i < posY.length; i++) {
            x = x + 150;
            y = posY[i];
            elementStep.eq(i).css('transform','translate(' + x + 'px, ' + y + 'px)');
        }
    }

    let stepsOffset = $('#stepsID').offset().top;

    function stepShow() {
        let elementStep = $('div#subStepID');
        let i = 0;
        
        for (i; i < 6; i++){
            elementStep.eq(i).animate({
                'opacity': '1'
            },(i * 2) * 2000);
        }
        
    }


    //Numbers

    //numbersDisplay();
    function numbersDisplay() {
        
        let subNumber = $('div#subNumberID');
        
        let x = 190;
        let y1;
        let y;

        for (let i = 0; i < 6; i++) {
            x++;
            y1 = y1 + 0.25;
            y = Math.sin(y1)* 100 + 100;
            subNumber.eq(i).css('transform','translate(' + x + 'px, ' + y + 'px)');
        }
    }


    let n1 = 0,
        n2 = 0,
        n3 = 0,
        n4 = 0,
        n5 = 0,
        n6 = 0;
    function numberPlus() {

        

        let numberSumDiv = $('div#numberSum');
        numberSumDiv.css('font-size', '1.75em').css('color','#ffffff').css('font-family','Akrobat_Black').css('text-align','center');
        let numberSumSpan = $('span#numberSum');
        numberSumSpan.css('color','#ffffff');

        if (n1!=210) {
            n1++;
            numberSumDiv.eq(0).text(n1);
            numberSumSpan.eq(0).text(n1) ;       
        } 
        if (n2<=103932) {
            n2 = n2 + 111;
            numberSumDiv.eq(1).text(n2);
            numberSumSpan.eq(1).text(n2);  
        }
        if (n3!=340) {
            n3++;
            numberSumDiv.eq(2).text(n3);
            numberSumSpan.eq(2).text(n3);  
        }
        if (n4!=450) {
            n4++;
            numberSumDiv.eq(3).text(n4);
            numberSumSpan.eq(3).text(n4);  
        }
        if (n5!=842) {
            n5++;
            numberSumDiv.eq(4).text(n5);
            numberSumSpan.eq(4).text(n5);  
        }
        if (n6!=230) {
            n6++;
            numberSumDiv.eq(5).text(n6);
            numberSumSpan.eq(5).text(n6);  
        }
            
    }

    let numberOffset = $('#numbersID').offset().top;
    let fortraiderOffset = $('#forTraidersID').offset().top;
    console.log(numberOffset + ' = numOFF ' + fortraiderOffset + ' = fortrOFF')

    function abc() {
        scrollPos = scrollPos;
    }

    if(scrollPos >= numberOffset && scrollPos < fortraiderOffset) {
        animate(abc);
    } 
    //Canvas


    let canv = document.createElement('canvas');    
    let ctx = canv.getContext('2d');

    
    introID.append(canv);
    $('canvas').css('z-index', '-1000');

    canv.width = introW;
    canv.height = introH;

    let a = 1,
        b = window.innerHeight / 2,
        c = 0,
        d = 250;

    function draw() {
        a++;
        b--;
        d = d - 0.25;
        c = c + 0.03;

        let x = a * 3,
            y = d - Math.cos(c) * 100 + 100,
            z = b - Math.sin(c + 0.1) * 100 + 100;
            
        ctx.fillStyle = '#f9fcff';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#eef6fd';
        ctx.beginPath();
        ctx.arc(x, z, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

    function secondDraw() {
        a++;
        c = c + 0.03;

        let x = a * 3,
            y = b + Math.cos(c) * 100 + 100,
            z = d + Math.sin(c + 0.1) * 100 + 100;

        ctx.fillStyle = '#f9fcff';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, z, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }

    function clear() {
        ctx.clearRect(0, 0, canv.width, canv.height);
    }
    



    //ReqestAnitationFrame

    if ( !window.requestAnimationFrame ) {

        window.requestAnimationFrame = ( function() {
      
          return window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
      
            window.setTimeout( callback );
      
          };
      
        })();
    }
    
    animate();
    function animate() {
        requestAnimationFrame(animate);

        if(scrollPos >= numberOffset && scrollPos < fortraiderOffset){
            if (n2 < 100000) {
                numberPlus();
            }            
        }


        draw();
    }
    
});