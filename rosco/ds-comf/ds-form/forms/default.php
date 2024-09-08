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
        'value'     => '<div class="m-form-cont">'
        ),





        /* Однострочный текст */
        array(
            'type'      => 'input',
            // 'label'     => 'ваш номер телефона',
            'error'     => 'Поле "Телефон" заполнено некорректно',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'attributs' => array(
                'id'          => 'field-id03342',
                'name'        => 'field-name03342',
                'type'        => 'tel',
                'placeholder' => 'Ваш телефон*',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '+ 7 999 999 99 99',
            ),
        ),

        /* Select */

        array(
            'type'      => 'select',
            'container' => true,
            'label'     => 'Выберите станцию метро',
            'formail'   => 1,
            'name_mail' => 'Станция метро',
            'attributs' => array(
                'name'=> 'dfggdfg',
            ),
            'options' => array(
                array('text'=> 'Первая станция', 'value' => 'Первая станция', 'selected'=> ''),
                array('text'=> 'Вторая станция', 'value' => 'Вторая станция'),
                array('text'=> 'Еще одна станция', 'value' => 'Еще одна станция'),

            ),
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

      /*--Блок ошибок--*/
        array(
        'type'      => 'freearea',
        'container' => false,
        'value'     => '<div class="error_form"></div>',
        ),




        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<script src="../../../libs/formStyler/jquery.formstyler.min.js"></script>
        <script>
            $("select").styler();
        </script>

        </div>'
        ),






    ),
);
