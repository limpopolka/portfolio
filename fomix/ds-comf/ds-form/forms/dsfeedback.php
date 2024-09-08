<?php

return array(
    'mail'  => array(
        'to_email'   => array('motorr575@gmail.com'),
        'subject'    => 'Обратная связь',
    ),
    'configform' => array(


        /* HTML код */

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="modal-popup">',
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-head">Заказать звонок</div>',
        ),




        /* input*/
        array(
            'type'      => 'input',
            'container' => true,
            'class'     => 'wrapper-input',
            'label'     => 'Ваше имя',
            'error'     => 'необходимо заполнить поле "Ваше имя"',
            'formail'   => 1,
            'name_mail' => 'Имя',
            'attributs' => array(
                'name'        => 'feedback_name',
                'type'        => 'text',
                'placeholder' => 'Представьтесь',
                'value'       => '',
                'pattern'     => '',
            ),
        ),

        array(
            'type'      => 'input',
            'class'     => 'wrapper-input',
            'formail'   => 1,
            'label'     => 'Ваш телефон:*',
            'name_mail' => 'Телефон',
            'attributs' => array(
                'id'          => 'field-id2',
                'name'        => 'field-name2',
                'class'       => 'input',
                'type'        => 'text',
                'placeholder' => '+ 7 (___) ___ __ __',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '8 ( 999 ) 999 - 99 - 99',
            ),
        ),

        /*--Кнопка--*/
        array(
            'type'      => 'input',
            'container' => true,
            'class'=>'feedback__form__submit__wrap',
            'attributs' => array(
                'type'  => 'submit',
                'class' => 'btn btn--red feedback__submit',
                'value' => 'Отправить',
            ),
        ),



        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>',
        ),




    ),  
    
);
