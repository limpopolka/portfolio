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
            'value'     => '<div class="reclamation__form__section__title"><span>1.</span> Укажите данные для связи</div><div class="reclamation__form__section clearfix">',
        ),


        /* Однострочный текст */
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Название организации:',
            'formail'   => 1,
            'name_mail' => 'Название организации',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__name',
                'type'        => 'text',
                'placeholder' => 'Название Вашей компании',
            ),
        ),
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Ваш E-mail:(*)',
            'formail'   => 1,
            'name_mail' => 'Email',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__email',
                'type'        => 'text',
                'placeholder' => 'Укажите электронный адрес',
                'required'    => 'required',
                'pattern'     => '^([a-z,A-Z,._,.\-,0-9])+@([a-z,._,.\-,0-9])+(\.([a-z])+)+$',
            ),
        ),
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Ваш телефон:(*)',
            'formail'   => 1,
            'name_mail' => 'Телефон',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__phone',
                'type'        => 'tel',
                'placeholder' => '+7 ( ___ ) ___ - __ - __',
                'required'    => 'required',
                'data-dsform-mask' => '+7 ( 999 ) 999 - 99 - 99',
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div><div class="reclamation__form__section__title"><span>2.</span> Информация о расходном листе</div><div class="reclamation__form__section clearfix">',
        ),

        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Номер расходного листа:(*)',
            'formail'   => 1,
            'name_mail' => 'Номер расходного листа',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__number',
                'type'        => 'text',
                'placeholder' => 'Введите номер',
                'required'    => 'required',
            ),
        ),
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Дата:(*)',
            'formail'   => 1,
            'name_mail' => 'Дата',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__date',
                'type'        => 'text',
                'class' => 'datepicker__input',
                'placeholder' => 'Укажите дату',
                'required'    => 'required',
                'readonly' => 'readonly'
            ),
        ),
        array(
            'type'      => 'select',
            'container' => true,
            'label'     => 'Производитель:(*)',
            'formail'   => 1,
            'name_mail' => 'Производитель',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__manufacturer',
                'type'        => 'tel',

            ),
            'options' => 
            array (
                0 => 
                array (
                    'text' => 'Выберите',
                    'selected' => '',
                    'value'=>'',
                    'disabled'=>''
                ),
                1 => 
                array (
                  'text' => 'ZaDoor1',
                  'value'=>'ZaDoor1'
              ),
                2 => 
                array (
                  'text' => 'ZaDoor2',
                  'value'=>'ZaDoor2'
              ),
                3 => 
                array (
                  'text' => 'ZaDoor3',
                  'value'=>'ZaDoor3'
              ),         
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form__item form__item__radioboxes">
            <label>Тип двери:*</label>
            <label class="styled__radiobutton">',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'class'=>'',
            'container' => false,
            'name_mail'=>'Тип двери',
            'attributs' => array(
                'name'=>'reclamation_doortype[]',
                'type'=>'radio',
                'value'=>'Межкомнатная',
                'checked'=>'checked',
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<span class="styled__radiobutton__text">Межкомнатная</span>
            </label>
            <label class="styled__radiobutton">',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail'=>'Тип двери',
            'attributs' => array(
                'name'=>'reclamation_doortype[]',
                'type'=>'radio',
                'value'=>'Входная',
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<span class="styled__radiobutton__text">Входная</span>
            </label>
            </div>
            <div class="form__item form__item__radioboxes">
            <label>Установлено ли полотно?:*</label>
            <label class="styled__radiobutton">',
        ),

        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail'=>'Установлено ли полотно?',
            'attributs' => array(
                'name'=>'reclamation_canvas[]',
                'type'=>'radio',
                'value'=>'Да',
                'checked'=>'checked',
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<span class="styled__radiobutton__text">Да</span>
            </label>
            <label class="styled__radiobutton">',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail'=>'Установлено ли полотно?',
            'attributs' => array(
                'name'=>'reclamation_canvas[]',
                'type'=>'radio',
                'value'=>'Нет',
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<span class="styled__radiobutton__text">Нет</span>
            </label>
            </div>
            </div>
            <div class="reclamation__form__section__title"><span>3.</span> Информация о товаре</div>
            <div class="reclamation__form__section clearfix">
            <section class="reclmation__columns"><div class="reclamation__column">',
        ),

        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Модель:(*)',
            'formail'   => 1,
            'name_mail' => 'Модель',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__model',
                'type'        => 'text',
                'placeholder' => 'Введите текст',
                'required'    => 'required',
            ),
        ),
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Цвет:(*)',
            'formail'   => 1,
            'name_mail' => 'Цвет',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__color',
                'type'        => 'text',
                'placeholder' => 'Введите текст',
                'required'    => 'required',
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>
            <div class="reclamation__column">',
            'required'    => 'required',
        ),
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Размер:(*)',
            'formail'   => 1,
            'name_mail' => 'Размер',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__size',
                'type'        => 'text',
                'placeholder' => 'Введите текст',
                'required'    => 'required',
            ),
        ),
        array(
            'type'      => 'input',
            'container' => true,
            'label'     => 'Количество:(*)',
            'formail'   => 1,
            'name_mail' => 'Количество',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__amount',
                'type'        => 'text',
                'placeholder' => 'Введите текст',
                'required'    => 'required',
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>
            <div class="reclamation__column">',
        ),
        array(
            'type'      => 'textarea',
            'container' => true,
            'label'     => 'Описание дефекта:(*)',
            'formail'   => 1,
            'name_mail' => 'Описание дефекта',
            'class' => "form__item",
            'attributs' => array(
                'name'        => 'reclamation__description',
                'type'        => 'text',
                'placeholder' => 'Введите текст',
                'required'    => 'required',
            ),
        ),







        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div></section><div class="form__item js--styled__inputfile__wrap">
            <label class="styled__inputfile">
            <span class="form__item__label">Фото полотна целиком:*</span>
            <span class="styled__inputfile__input">Прикрепить файл',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail' => 'Фото полотна целиком:*',
            'attributs' => array(
                'name'=>'reclamation__file1',
                'type'=>'file',
                'multiple' => 'multilple'
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</span></label><span class="styled__inputfile__uploads"></span></div>',
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form__item js--styled__inputfile__wrap"><label class="styled__inputfile"><span class="form__item__label">Фото дефектов:*</span><span class="styled__inputfile__input">Прикрепить файл',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail' => 'Фото дефектов:*',
            'attributs' => array(
                'name'=>'reclamation__file2',
                'type'=>'file',
                'multiple' => 'multilple'
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</span></label><span class="styled__inputfile__uploads"></span></div>',
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form__item js--styled__inputfile__wrap"><label class="styled__inputfile"><span class="form__item__label">Фото торца со штампом ОТК:*</span><span class="styled__inputfile__input">Прикрепить файл',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail' => 'Фото торца со штампом ОТК:*',
            'attributs' => array(
                'name'=>'reclamation__file3',
                'type'=>'file',
                'multiple' => 'multilple'
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</span></label><span class="styled__inputfile__uploads"></span></div>',
        ),


        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form__item js--styled__inputfile__wrap"><label class="styled__inputfile"><span class="form__item__label">Дополнительные файлы:</span><span class="styled__inputfile__input">Прикрепить файл',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail' => 'Дополнительные файлы',
            'attributs' => array(
                'name'=>'reclamation__file4',
                'type'=>'file',
                'multiple' => 'multilple'
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</span></label><span class="styled__inputfile__uploads"></span></div>',
        ),

        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '<div class="form__item js--styled__inputfile__wrap"><label class="styled__inputfile"><span class="form__item__label">Видео дефекта:*</span><span class="styled__inputfile__input">Прикрепить файл',
        ),
        array(
            'type' => 'input',
            'formail' => 1,
            'container' => false,
            'name_mail' => 'Видео дефекта',
            'attributs' => array(
                'name'=>'reclamation__file5',
                'type'=>'file',
                'multiple' => 'multilple'
            ),
        ),
        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</span></label><span class="styled__inputfile__uploads"></span></div>',
        ),


        array(
            'type'      => 'freearea',
            'container' => false,
            'value'     => '</div>',
        ),

        array(
            'type'      => 'input',
            'container' => false,
            'attributs' => array(
                'type'  => 'submit',
                'class' => 'btn btn--red reclamation__submit__btn',
                'value' => 'Отправить рекламацию',
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
            'value'     => '<div class="reclamation__privacy__link__wrap">Нажимая кнопку, вы даете согласие на обработку<br /> <a href="/privacy/" target="_blank" class="reclamation__privacy__link">персональных данных</a></div>',
        ),



    ),  

);
