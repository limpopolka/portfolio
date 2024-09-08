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
            'value'     => '<div class="bottom-form-top">'
        ),

        /* HTML код */
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="bottom-form-left">'
        ),



        /* Однострочный текст */
        array(
            'type'      => 'input',
            'label'     => '',
            'error'     => 'Поле "Ваше имя" заполнено некорректно',
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

        /* MAIL */
        array(
            'type'      => 'input',
            'label'     => '',
            'error'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'attributs' => array(
                'id'          => 'field-id03142',
                'name'        => 'field-name03142',
                'type'        => 'email',
                'placeholder' => 'Ваш E-mail*',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$|^([a-z,A-Z,._,.\-,0-9])+@([a-z,._,.\-,0-9])+(\.([a-z])+)+$',
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
            'value'     => '<div class="bottom-form-right">'
        ),


        /* TEXAREA */
        array(
            'type'      => 'textarea',
            'label'     => '',
            'error'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваше сообщение',
            'attributs' => array(
                'id'          => 'field-id2388',
                'name'        => 'field-name2388',
                'type'        => 'text',
                'placeholder' => 'Ваше сообщение',
                'value'       => '',
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
            'value'     => '</div>'
        ),





        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="bottom-form-bottom">'
        ),
        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="bottom-form-bottom-left">'
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<input id="bottom-file" type="file">'
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
            'value'     => '<div class="bottom-form-bottom-right">'
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="bottom-form-bottom-right__text"> Нажимая кнопку, Вы даете согласие на обработку <a href="#">персональных данных</a>'
        ),



        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>'
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





        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<script src="../../../libs/formStyler/jquery.formstyler.min.js"></script>
        <script>
            $("#bottom-file").styler();
        </script>

        </div>'
        ),
    ),
);
