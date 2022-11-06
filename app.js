$(() => {
//BioPage---------------------
    const $roleImg1 = $('#roleImg1');
    const $roleInfo1 = $('#role-info1');
    const $roleImg2 = $('#roleImg2');
    const $roleInfo2 = $('#role-info2');
    const $roleImg3 = $('#roleImg3');
    const $roleInfo3 = $('#role-info3');

    const $openSoftware = () => { 
        $roleImg1.css('display', 'none');
        $roleInfo1.css('display', 'flex');
    }
    $roleImg1.on('click', $openSoftware);

    const $closeSoftware = () => { 
        $roleInfo1.css('display', 'none');
        $roleImg1.css('display', 'flex');
    }
    $roleInfo1.on('click', $closeSoftware);

    const $openEducator = () => { 
        $roleImg2.css('display', 'none');
        $roleInfo2.css('display', 'flex');
    }
    $roleImg2.on('click', $openEducator);

    const $closeEducator = () => { 
        $roleInfo2.css('display', 'none');
        $roleImg2.css('display', 'flex');
    }
    $roleInfo2.on('click', $closeEducator);

    const $openLeadership = () => { 
        $roleImg3.css('display', 'none');
        $roleInfo3.css('display', 'flex');
    }
    $roleImg3.on('click', $openLeadership);

    const $closeLeadership = () => { 
        $roleInfo3.css('display', 'none')
        $roleImg3.css('display', 'flex');
    }
    $roleInfo3.on('click', $closeLeadership);
//ProjectsPage----------------------------

    let currentImgIndex = 0;

    let numOfImages = $('.carousel-images').children().length - 1

    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
        } else {
            currentImgIndex = 0
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
    })

    $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
        if(currentImgIndex > 0) {
            currentImgIndex --
        } else {
            currentImgIndex = numOfImages
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
    })
});