<?php

return array(
	'mail'  => array(
		'to_email'   => array('motorr575@gmail.com'),
		'subject'    => 'Оставить заявку',
	),
	'configform' => array(
        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="form-head">Оставить заявку</div>'
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
        'label'     => 'Ваше имя',
        'error'     => 'Поле "Ваше имя" заполнено некорректно',
        'formail'   => 1,
        'name_mail' => 'Ваше имя',
        'attributs' => array(
                            'id'          => 'field-id023412',
                            'name'        => 'field-name023412',
                            'type'        => 'text',
                            'placeholder' => 'Представьтесь',
                            'value'       => '',
                        ),
        ),    

        /* Однострочный текст */
        array(
        'type'      => 'input',
        'label'     => 'Телефон*',
        'error'     => 'Поле "Телефон" заполнено некорректно',
        'formail'   => 1,
        'name_mail' => 'Ваше имя',
        'attributs' => array(
                            'id'          => 'field-id02342',
                            'name'        => 'field-name02342',
                            'type'        => 'tel',
                            'placeholder' => 'Ваш телефон*',
                            'value'       => '',
                            'required'    => 'required',
                            'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                            'data-dsform-mask' => '+ 7 999 999 99 99',
                        ),
        ),

        array(
            'type'      => 'textarea',
            'label'     => 'Что вас интересует?',
            'error'     => 'Поле "Ваше имя" заполнено некорректно',
            'formail'   => 1,
            'name_mail' => 'Что вас интересует?',
            'attributs' => array(
                'id'          => 'field-id023422',
                'name'        => 'field-name023422',
                'type'        => 'text',
                'placeholder' => '',
                'value'       => '',
            ),
        ),

        /*--Кнопка--*/
        array(
        'type'      => 'input',
        'class'     => 'buttonform',
        'attributs' => array(
                            'type'  => 'submit',
                            'class'     => 'ds_btn btn btn_pink',
                            'value' => 'Отправить',
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
            'value'     => '<div class="pers-inform">Нажимая кнопку, вы даете
            согласие на обработку <a href="">персональных данных</a></div>'
            ),

      
        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '</div>'
        ),    
        

        
    ),
);
