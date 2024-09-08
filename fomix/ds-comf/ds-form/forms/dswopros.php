<?php

return array(
    'mail'  => array(
        'to_email'   => array('motorr575@gmail.com'),
        'subject'    => 'Остались вопросы?',
    ),
    'configform' => array(


        /* HTML код */

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="title-form while">Остались вопросы?</div>
            <p class="while">Оставьте свои контактные данные, и мы свяжемся<br> с Вами в ближайшее время.</p>',
        ),


        /* Однострочный текст */
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Ваше имя:',
            'error'     => 'необходимо заполнить поле "Ваше имя"',
            'formail'   => 1,
            'name_mail' => 'Ваше имя',
            'attributs' => array(
                'name'        => 'login23',
                'type'        => 'text',
                'placeholder' => 'Представьтесь, пожалуйста',
                'value'       => '',
                'pattern'     => '',
            ),
        ),

        /* Однострочный текст */
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Ваш телефон или E-mail:*',
            'error'     => 'Необходимо заполнить поле',
            'formail'   => 1,
            'name_mail' => 'Ваш телефон',
            'attributs' => array(
                'name'        => 'tel23',
                'type'        => 'text',
                'placeholder' => 'Введите текст',
                'value'       => '',
                'required'    => 'required',
            ),
        ),


        array(
            'type'      => 'textarea',
            'container' => true,
            'label'     => 'Ваше сообщение:',
            'error'     => ' ',
            'formail'   => 1,
            'name_mail' => 'Ваше сообщение:',
            'attributs' => array(
                'name'        => 'detal23',
                'type'        => 'text',
                'rows'        => '8',
                'cols'        => '46',
                'value'       => '',
                'placeholder' => 'Вы можете задать любой вопрос или описать желаемый заказ',
            ),
        ),


        /*--Блок ошибок--*/
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="files_input">',
        ),   


        /*--Блок ошибок--*/
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<label class="files">',
        ),   
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail' => 'Файл',
            'attributs' => array(
                'name'=>'dswopros__file',
                'type'=>'file',
                'id'=>'dswopros__file',
            ),
        ),

        /*--Блок ошибок--*/
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<span class="first">Прикрепить файл</span><span class="last dswopros__file__text">Файл не выбран</span></label>',
        ),   


        /*--Блок ошибок--*/
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>',
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


        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="person_dan">Нажимая кнопку, вы даете согласие на обработку<br> <a class="inherit" href="/privacy/" target="_blank"> персональных данных</a></div>',
        ),



    ),  

);
