<?php

return array(
    'mail'  => array(
        'to_email'   => array('motorr575@gmail.com'),
        'subject'    => 'Запись на осмотр',
    ),

    'configform' => array(
        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => ''
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="main-form-head">Нужен совет?</div>
					<div class="main-form-desc">Оставьте свои контактные данные,и менеджер свяжется с Вами!</div>'
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'attributs' => array(
                'id'          => 'field-id023412',
                'name'        => 'field-name023412',
                'type'        => 'text',
                'placeholder' => 'Ваше имя',
                'value'       => '',
                'class'       => 'input'
            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Телефон',
            'attributs' => array(
                'id'          => 'field-id02342',
                'name'        => 'field-name02342',
                'type'        => 'tel',
                'placeholder' => 'Ваш телефон *',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '+ 7 999 999 99 99',
                'class'       => 'input'
            ),
        ),

        /*--Кнопка--*/
        array(
            'type'      => 'input',
            'class'     => 'buttonform',
            'attributs' => array(
                'type'  => 'submit',
                'class'     => 'btn',
                'value' => 'Получить скидку',
            ),
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="polit"><span>Нажимая кнопку, Вы даете согласие на обработку </span> <a href="#">персональных данных</a></div>'
        ),
    ),

);
