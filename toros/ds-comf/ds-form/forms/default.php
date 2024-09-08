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
            'value'     => '<div class="wrapper-form-text">'
        ),
        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="section-head"><span>Необходима консультация нашего специалиста?</span></div>'
        ),
        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-description"><span>Оставьте свои контактные данные, и мы свяжемся с Вами в ближайшее время.</span></div>'
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
        'value'     => '<div class="wrapper-inputs">'
        ),


        /* MAIL */
        array(
            'type'      => 'input',
            'error'     => 'Поле "Имя" заполнено некорректно',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'attributs' => array(
                'id'          => 'field-id03142',
                'name'        => 'field-name03142',
                'type'        => 'email',
                'placeholder' => 'Ваше имя',
                'value'       => '',
                'required'    => 'required',
                'class' => 'main-form-input'
            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            // 'label'     => 'ваш номер телефона',
            'error'     => 'Поле "Телефон" заполнено некорректно',
            'formail'   => 1,
            'name_mail' => 'Ваш телефон',
            'attributs' => array(
                'id'          => 'field-id03342',
                'name'        => 'field-name03342',
                'type'        => 'tel',
                'placeholder' => '+7-___-___-__-__*',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '+ 7 999 999 99 99',
                'class' => 'main-form-input'
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

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-link-wrapper"> <span>Нажимая на кнопку, Вы даете согласие на обработку <a href="#">персональных данных.</a></span>'
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

      /*--Блок ошибок--*/
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="error_form"></div>',
        ),

    ),
);
