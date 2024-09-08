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
            'value'     => '<div class="form-head">Забронировать</div>'
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="inputs-wrap">'
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
                'id'          => 'field-id0234122',
                'name'        => 'field-name0234122',
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
            'name_mail' => 'Телефон',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id0234242',
                'name'        => 'field-name02342',
                'type'        => 'tel',
                'placeholder' => 'Ваш телефон *',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '+ 7 999 999 99 99',
                'class'       => 'input-popup'
            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Марка машины',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id023412234',
                'name'        => 'field-name023412234',
                'type'        => 'text',
                'placeholder' => 'Марка машины',
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
            'name_mail' => 'Номер машины *',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id02341223533',
                'name'        => 'field-name02341223533',
                'type'        => 'text',
                'placeholder' => 'Номер машины *',
                'value'       => '',
                'class'       => 'input-popup'
            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => 'Дата заезда *',
            'formail'   => 1,
            'name_mail' => 'Дата заезда *',
            'class'   => 'wrap-input wrap-input-cal label-small',
            'attributs' => array(
                'id'          => 'field-id0234122353',
                'name'        => 'date-cal1',
                'type'        => 'text',
                'placeholder' => '',
                'value'       => '',

                'class'       => 'input-popup'

            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => 'Дата выезда *',
            'formail'   => 1,
            'name_mail' => 'Дата выезда *',
            'class'   => 'wrap-input wrap-input-cal label-small',
            'attributs' => array(
                'id'          => 'field-id023412235344',
                'name'        => 'date-cal2',
                'type'        => 'text',
                'placeholder' => '',
                'value'       => '',

                'class'       => 'input-popup'

            ),
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="wrap-time-input">'
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => 'Время заезда *',
            'formail'   => 1,
            'name_mail' => 'Время заезда *',
            'class'   => 'wrap-input label-small',
            'attributs' => array(
                'id'          => 'field-id0234122353445',
                'name'        => 'field-name0234122353445',
                'type'        => 'text',
                'placeholder' => '',
                'value'       => '',
                'data-dsform-mask' => '99:99',
                'class'       => 'input-popup'

            ),
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="time-right">'
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => 'Время выезда *',
            'formail'   => 1,
            'name_mail' => 'Время выезда *',
            'class'   => 'wrap-input label-small',
            'attributs' => array(
                'id'          => 'field-id0234122353446',
                'name'        => 'field-name0234122353446',
                'type'        => 'text',
                'placeholder' => '',
                'value'       => '',
                'data-dsform-mask' => '99:99',
                'class'       => 'input-popup'

            ),
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="time-right-text">Минимальное время выезда: 11:05</div>'
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
            'value'     => '</div>'
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Тип парковки',
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id02341223443',
                'name'        => 'field-name02341223443',
                'type'        => 'text',
                'placeholder' => 'Тип парковки',
                'value'       => '',
                'class'       => 'input-popup'
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
            'value'     => '<div class="popup-bottom">'
        ),


        /*--Кнопка--*/
        array(
            'type'      => 'input',
            'class'     => 'buttonform',
            'attributs' => array(
                'type'  => 'submit',
                'class'     => 'btn',
                'value' => 'Забронировать',
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
