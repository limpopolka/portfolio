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
            'value'     => '<div class="big-form-container">',
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-head">Заказать звонок</div>',
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="big-form-container_top">',
        ),

        /* input*/
        array(
            'type'      => 'input',
            'container' => true,
            'class'     => 'wrapper-input',
            'label'     => 'Ваше имя',
            'error'     => 'необходимо заполнить поле "Ваше имя"',
            'formail'   => 1,
            'name_mail' => 'Имя',
            'attributs' => array(
                'name'        => 'feedback_name',
                'type'        => 'text',
                'placeholder' => 'Представьтесь',
                'value'       => '',
                'pattern'     => '',
            ),
        ),

        array(
            'type'      => 'input',
            'class'     => 'wrapper-input',
            'formail'   => 1,
            'label'     => 'Ваш телефон:*',
            'name_mail' => 'Телефон',
            'attributs' => array(
                'id'          => 'field-id287',
                'name'        => 'field-name287',
                'class'       => 'input',
                'type'        => 'text',
                'placeholder' => '+ 7 (___) ___ __ __',
                'value'       => '',
                'required'    => 'required',
                'pattern'     => '^\+?[\d,\-,(,),\s]+$',
                'data-dsform-mask' => '8 ( 999 ) 999 - 99 - 99',
            ),
        ),

        /* Select */
        array(
            'type'      => 'select',
            'container' => true,
            'label'     => 'Интересующая услуга',
            'formail'   => 1,
            'class'     => 'wrapper-input',
            'name_mail' => 'Интересующая услуга',
            'attributs' => array(
                'name'=> 'dfggdfg',
            ),
            'options' => array(
                array('text'=> 'Первая услуга', 'value' => 'Первая услуга', 'selected'=> ''),
                array('text'=> 'Вторая услуга', 'value' => 'Вторая услуга'),
                array('text'=> 'Еще одна услуга', 'value' => 'Еще одна услуга'),

            ),
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>',
        ),

        /* TEXAREA */
        array(
            'type'      => 'textarea',
            'label'     => 'Сообщение',
            'formail'   => 1,
            'class'     => 'wrapper-textarea',
            'name_mail' => 'Сообщение',
            'attributs' => array(
                'id'          => 'field-id23898',
                'name'        => 'field-name23898',
                'type'        => 'text',
                'value'       => '',
            ),
        ),




        /*--Кнопка--*/
        array(
            'type'      => 'input',
            'container' => true,
            'class'=>'feedback__form__submit__wrap',
            'attributs' => array(
                'type'  => 'submit',
                'class' => 'btn btn--red feedback__submit',
                'value' => 'Отправить',
            ),
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-small-text">Нажимая кнопку, Вы даете согласие на обработку <a href="#">персональных данных</a></div> ',
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>',
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
