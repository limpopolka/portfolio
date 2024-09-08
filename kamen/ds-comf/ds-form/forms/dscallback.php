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
            'value'     => '<div class="ds__form-head">Заказать звонок</div>'
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="ds__form-top">'
        ),


        /* Однострочный текст */
        array(
            'type'      => 'input',
            'label'     => 'Имя',
            'error'     => 'Поле "Ваше имя" заполнено некорректно',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'attributs' => array(
                'id'          => 'field-id023412',
                'name'        => 'field-name023412',
                'type'        => 'text',
                'placeholder' => 'Например, Иван',
                'value'       => '',
                'class'       => 'input'
            ),
        ),



        /* Однострочный текст */
        array(
            'type'      => 'input',
            'label'     => 'Телефон*',
            'error'     => 'Поле "Телефон" заполнено некорректно',
            'formail'   => 1,
            'name_mail' => 'Телефон',
            'attributs' => array(
                'id'          => 'field-id02342',
                'name'        => 'field-name02342',
                'type'        => 'tel',
                'placeholder' => '+7 ( _ _ _ ) _ _ _ - _ _ - _ _',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '+ 7 999 999 99 99',
                'class'       => 'input'
            ),
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>'
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="ds__form-bottom">'
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="ds-form__small-text">Нажимая кнопку, Вы даете согласие <br> на обработку персональных данных</div>'
        ),


        /*--Кнопка--*/
        array(
            'type'      => 'input',
            'class'     => 'buttonform',
            'attributs' => array(
                'type'  => 'submit',
                'class'     => 'btn btn-orange',
                'value' => 'Отправить',
            ),
        ),

    ),
);
