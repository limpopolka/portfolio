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
            'value'     => '<div class="main-form-head">Рассчитать стоимость</div>'
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="m-form-cont">'
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form-row">'
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'class'    => 'input-wrap',
            'attributs' => array(
                'id'          => 'field-id0234120',
                'name'        => 'field-name0234120',
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
            'class'    => 'input-wrap',
            'attributs' => array(
                'id'          => 'field-id02342',
                'name'        => 'field-name02342',
                'type'        => 'tel',
                'placeholder' => 'Ваш телефон *',
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
            'value'     => '<div class="form-row">'
        ),

        /* Select */

        array(
            'type'      => 'select',
            'container' => true,
            'formail'   => 1,
            'name_mail' => 'тип помещения',
            'class'    => 'input-wrap',
            'attributs' => array(
                'name'  => 'тип помещения',
                'class' => 'popup_custom-select'
            ),
            'options' => array(
                array('text'=> 'Выберите тип помещения', 'value' => 'Выберите вид уборки', 'selected'=> ''),
                array('text'=> 'Выберите тип помещения1', 'value' => 'Выберите вид уборки1'),
                array('text'=> 'Выберите тип помещения2', 'value' => 'Выберите вид уборки1'),

            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'error'     => '',
            'label'     => '',
            'formail'   => 1,
            'name_mail' => 'Укажите площадь',
            'class'    => 'input-wrap',
            'attributs' => array(
                'id'          => 'field-id02341203',
                'name'        => 'field-name02341203',
                'type'        => 'text',
                'placeholder' => 'Укажите площадь',
                'value'       => '',
                'class'       => 'input'
            ),
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>'
        ),

        /* Select */

        array(
            'type'      => 'select',
            'container' => true,
            'formail'   => 1,
            'name_mail' => 'Вид услуги',
            'attributs' => array(
                'name'  => 'Услуга',
                'class' => 'popup_custom-select'
            ),
            'options' => array(
                array('text'=> 'Выберите вид уборки', 'value' => 'Выберите вид уборки', 'selected'=> ''),
                array('text'=> 'Выберите вид уборки1', 'value' => 'Выберите вид уборки1'),
                array('text'=> 'Выберите вид уборки2', 'value' => 'Выберите вид уборки1'),

            ),
        ),

        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="checkbox-wrap">'
        ),

        array (
            'type' => 'input',
            'attributs' =>
                array (
                    'name' => 'osobie',
                    'type' => 'checkbox',
                    'value' => 'Помещение за пределами МКАД',
                ),
            'container' => true,
            'id' => '',
            'class' => 'checkbox-container',
            'formail' => true,
            'label' => 'Помещение за пределами МКАД',
            'name_mail' => 'Помещение за пределами МКАД',
            'error' => '',
        ),

        array (
            'type' => 'input',
            'attributs' =>
                array (
                    'name' => 'osobie',
                    'type' => 'checkbox',
                    'value' => 'Химчистка ковров и мягкой мебели',
                ),
            'container' => true,
            'id' => '',
            'class' => 'checkbox-container',
            'formail' => true,
            'label' => 'Химчистка ковров и мягкой мебели',
            'name_mail' => 'Химчистка ковров и мягкой мебели',
            'error' => '',
        ),
        array (
            'type' => 'input',
            'attributs' =>
                array (
                    'name' => 'osobie',
                    'type' => 'checkbox',
                    'value' => 'Мытье окон',
                ),
            'container' => true,
            'id' => '',
            'class' => 'checkbox-container',
            'formail' => true,
            'label' => 'Мытье окон',
            'name_mail' => 'Мытье окон',
            'error' => '',
        ),
        array (
            'type' => 'input',
            'attributs' =>
                array (
                    'name' => 'osobie',
                    'type' => 'checkbox',
                    'value' => 'Очистка бытовой техники',
                ),
            'container' => true,
            'id' => '',
            'class' => 'checkbox-container',
            'formail' => true,
            'label' => 'Очистка бытовой техники',
            'name_mail' => 'Очистка бытовой техники',
            'error' => '',
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
                'class'     => 'btn',
                'value' => 'Отправить',
            ),
        ),


        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="polit"><span>Нажимая кнопку, Вы даете согласие на обработку </span><a href="#">персональных данных</a></div>'
        ),
        /* HTML код */
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<script src="../../../libs/formStyler/jquery.formstyler.min.js"></script><script>$(".popup_custom-select").styler(); $(".checkbox-wrap input").styler(); </script>

        
        </div>'
        ),

        ),

);
