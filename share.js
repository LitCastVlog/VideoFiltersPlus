
$(document).ready(function(){

    $(document).on('click','#ru',function() {
    $('.zagolovok').text('Поделитесь расширением с друзьями!!!')
    $('.message_text').html('<div class="qqq">Здравствуйте друзья! \
    <br /> \
    Меня зовут Евгений и я разработчик данного расширения</div> \
    <br /><br /> \
    Внимательно ознакомтесь с инструкцией по использованию расширения \
    <br /> \
    Это поможет вам понять принцип его работы и обьяснит некоторые нюансы \
    <br /> \
    В принципе в нем нет ничего сложного и все интуитивно понятно\
    <br /><br /> \
    Очень вас прошу оценить мое расширение в магазине google, это поможет распостранению расширения\
    <br /> \
    Если вам понравилось расширение поделитесь им в социальных сетях, это тоже поможет его развитию\
    ')   
    $('.instruction').attr('src', '/img/menu_ru.jpg')
    
        
    })
    $(document).on('click','#en',function() {
    $('.zagolovok').text('Cracked')
    $('.message_text').html('<div class="qqq">Instructions below \
    <br /> \
    </div> \
    <br /><br /> \
    Carefully read the instructions\
    ') 
    $('.instruction').attr('src', '/img/menu_en.jpg')
    })
    })
