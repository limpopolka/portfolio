<?php

return array(
    'mail'  => array(
        'to_email'   => array('motorr575@gmail.com'),
        'subject'    => 'Расчет стоимости',
    ),
    'configform' => array(
        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-head">Задать вопрос</div>'
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
            'label'     => 'Ваш e-mail*',
            'error'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id023412',
                'name'        => 'field-name023412',
                'type'        => 'text',
                'placeholder' => '',
                'value'       => '',
                'class'       => 'input'
            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'label'     => 'Ваш вопрос*',
            'error'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваш вопрос',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id0234121',
                'name'        => 'field-name0234121',
                'type'        => 'text',
                'placeholder' => '',
                'value'       => '',
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
                'value' => 'Отправить',
            ),
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form__bottom-text"><span>Нажимая кнопку, Вы даете согласие на обработку </span><a href="#">персональных данных</a></div>'
        ),

        ),

);
