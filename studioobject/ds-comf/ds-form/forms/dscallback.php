<?php

return array(
	'mail'  => array(
		'to_email'   => array('motorr575@gmail.com'),
		'subject'    => 'Заказать звонок',
	),
	'configform' => array(
        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="form-head">Заказать звонок</div>'
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
                            'id'          => 'field-id023018',
                            'name'        => 'field-name023018',
                            'type'        => 'text',
                            'placeholder' => 'Представьтесь',
                            'value'       => '',
                        ),
        ),



        /* Однострочный текст */
        array(
        'type'      => 'input',
        'label'     => 'Телефон',
        'error'     => 'Поле "Телефон" заполнено некорректно',
        'formail'   => 1,
        'name_mail' => 'Представьтесь',
        'attributs' => array(
                            'id'          => 'field-id03142',
                            'name'        => 'field-name03142',
                            'type'        => 'tel',
                            'placeholder' => 'Ваш телефон*',
                            'value'       => '',
                            'required'    => 'required',
                            'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                            'data-dsform-mask' => '+ 7 999 999 99 99',
                        ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'label'     => 'Удобное время звонка',
            'error'     => 'Поле "Удобное время звонка" заполнено некорректно',
            'formail'   => 1,
            'name_mail' => 'Удобное время звонка',
            'attributs' => array(
                'id'          => 'field-id023077',
                'name'        => 'field-name023077',
                'type'        => 'text',
                'placeholder' => 'с 10:00 до 12:00',
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
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="error_form"></div>',
        ),


        
     
        array(
            'type'      => 'freearea',
            'container' => false,
            'id'        => 'pers-info',
            'value'     => '<div class="pers-inform">Нажимая кнопку, вы даете
            согласие на обработку <a href="">персональных данных</a></div>'
            ),

      

        

        
    ),
);
