<?php

return array(
    'mail'  => array(
        'to_email'   => array('motorr575@gmail.com'),
        'subject'    => 'Запрос прайс-листа',
    ),
    'configform' => array(


        /* HTML код */

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="title-form while">Запрос прайс-листа</div>
            <p class="while">Оставьте свои контактные данные, и мы вышлем<br> Вам наш прайс-лист</p>',
        ),


        /* Однострочный текст */
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Название организации:',
            'error'     => 'необходимо заполнить поле "Название организации"',
            'formail'   => 1,
            'name_mail' => 'Название организации',
            'attributs' => array(
                'name'        => 'zap_name',
                'type'        => 'text',
                'placeholder' => 'Назвавание Вашей компании',
                'value'       => '',
                'pattern'     => '',
            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Ваш E-mail:*',
            'error'     => 'Необходимо заполнить поле',
            'formail'   => 1,
            'name_mail' => 'Ваш E-mail',
            'attributs' => array(
                'name'        => 'zap_tel',
                'type'        => 'text',
                'placeholder' => 'Укажите электронный адрес',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^([a-z,A-Z,._,.\-,0-9])+@([a-z,._,.\-,0-9])+(\.([a-z])+)+$',
            ),
        ),


        array(
            'type'      => 'textarea',
            'container' => true,
            'label'     => 'Ваш комментарий или вопрос:*',
            'error'     => ' ',
            'formail'   => 1,
            'name_mail' => 'Ваш комментарий или вопрос',
            'attributs' => array(
                'name'        => 'zap_message',
                'type'        => 'text',
                'rows'        => '8',
                'cols'        => '46',
                'value'       => '',
                'required'    => 'required',
                'placeholder' => 'Вы можете задать любой вопрос',
            ),
        ),


        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="person_dan">Нажимая кнопку, вы даете согласие на обработку <a target="_blank" class="zapros__policy__privacy__link" href="/privacy/">персональных данных</a></div>',
        ),


        /*--Кнопка--*/
        array(
            'type'      => 'input',
            'container' => true,
            'attributs' => array(
                'type'  => 'submit',
                'class' => 'btn btn--red',
                'value' => 'Отправить',
            ),
        ),  

        /*--Блок ошибок--*/
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="error_form"></div>',
        ),   







    ),  
    
);
