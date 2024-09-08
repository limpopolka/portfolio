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


    //туть

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="section-text">
								<div class="section-head">Остались вопросы?</div>
								<div class="section-desc-small">Оставьте свои контактные данные, и мы свяжемся с Вами в ближайшее время.</div>
							</div>'
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-content">'
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-left">'
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
            'class'   => 'wrap-input',
            'attributs' => array(
                'id'          => 'field-id02342',
                'name'        => 'field-name02342',
                'type'        => 'tel',
                'placeholder' => 'Ваш телефон*',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '+ 7 999 999 99 99',
                'class'       => 'input'
            ),
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>'
        ),


        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-right">'
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
                'id'          => 'field-id2388',
                'name'        => 'field-name2388',
                'type'        => 'text',
                'placeholder' => 'Ваше сообщение',
                'value'       => '',
            ),
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>'
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>'
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-bottom">'
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
            'value'     => '</div>'
        ),

    //туть


    ),

);
