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
            'value'     => '<div class="form-head">Обратная связь</div>'
        ),




        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id02341221',
                'name'        => 'field-name02341221',
                'type'        => 'text',
                'placeholder' => 'Ваше имя',
                'value'       => '',
                'class'       => 'input-popup'
            ),
        ),
        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваш e-mail *',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id023412212',
                'name'        => 'field-name023412212',
                'type'        => 'text',
                'placeholder' => 'Ваш e-mail *',
                'value'       => '',
                'class'       => 'input-popup'
            ),
        ),

        /* TEXAREA */
        array(
            'type'      => 'textarea',
            'label'     => '',
            'error'     => '',
            'formail'   => 1,
            'name_mail' => 'Сообщение',
            'class'   => 'wrap-textarea',
            'attributs' => array(
                'id'          => 'field-id23884',
                'name'        => 'field-name23884',
                'type'        => 'text',
                'placeholder' => 'Ваше сообщение',
                'value'       => '',
            ),
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="popup-bottom">'
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


        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-bottom_left">
									<span class="form-bottom_text">
									Нажимая кнопку, Вы даете согласие на обработку
									</span>
									<a href="#" class="form-bottom_link">персональных данных.</a>
								</div>'
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>'
        ),


    ),

);
