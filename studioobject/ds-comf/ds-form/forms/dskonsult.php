<?php

return array(
	'mail'  => array(
		'to_email'   => array('o.panchenko@demis.ru'),
		'subject'    => 'бесплатная консультация',
	),
	'configform' => array(
        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="form-head">бесплатная консультация</div>'
        ),
      
        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="m-form-cont">'
        ),

        /* Однострочный текст */
        array(
        'type'      => 'input',
        // 'label'     => 'Ваше имя',
        'error'     => 'Поле "Ваше имя" заполнено некорректно',
        'formail'   => 1,
        'name_mail' => 'Ваше имя',
        'attributs' => array(
                            'id'          => 'field-id023418',
                            'name'        => 'field-name023418',
                            'type'        => 'text',
                            'placeholder' => 'Ваше имя',
                            'value'       => '',
                        ),
        ),    

        /* Однострочный текст */
        array(
        'type'      => 'input',
        // 'label'     => 'ваш номер телефона',
        'error'     => 'Поле "Телефон" заполнено некорректно',
        'formail'   => 1,
        'name_mail' => 'Ваше имя',
        'attributs' => array(
                            'id'          => 'field-id03342',
                            'name'        => 'field-name03342',
                            'type'        => 'tel',
                            'placeholder' => 'Ваш телефон*',
                            'value'       => '',
                            'required'    => 'required',
                            'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                            'data-dsform-mask' => '+ 7 999 999 99 99',
                        ),
        ),

        /*--Кнопка--*/
        array(
        'type'      => 'input',
        'class'     => 'buttonform',
        'attributs' => array(
                            'type'  => 'submit',
                            'class'     => 'ds_btn btn btn_pink',
                            'value' => 'отправить',
                        ),
        ), 


      /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '</div>'
        ),

      /*--Блок ошибок--*/
        // array(
        // 'type'      => 'freearea',
        // 'container' => false,
        // 'value'     => '<div class="error_form"></div>',
        // ),    

        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="m-form-bot">'
        ), 
        
     
        array(
            'type'      => 'freearea',
            'container' => false,
            'id'        => 'pers-info',
            'value'     => '<div class="pers-info">Нажимая кнопку, вы даете
            согласие на обработку <br> <a href="">персональных данных</a></div>'        
            ),

      
        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '</div>'
        ),    
        

        
    ),
);
