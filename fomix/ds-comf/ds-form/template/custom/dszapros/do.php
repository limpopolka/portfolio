<?
function sendFormBD($data){

$result = $data['mailMessage'];
if(!empty($result[1]['message']) && !empty($result[2]['message'])){

	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
	CModule::IncludeModule("iblock");

	$prop = array();
	$prop['NAME'] = htmlspecialchars($result[0]['message']);
	$prop['EMAIL'] = htmlspecialchars($result[1]['message']);
	$prop['MESSAGE'] = htmlspecialchars($result[2]['message']);



	$entityName= $prop['NAME'] ? $prop['NAME'] : "Запрос прайс-листа";
	$arFields = array(
		"ACTIVE" => "Y",
		"DATE_ACTIVE_FROM" => date($DB->DateFormatToPHP(CSite::GetDateFormat()), time()),
		"IBLOCK_ID" => 18,
		"NAME" =>$entityName,
		"PROPERTY_VALUES" => $prop,
	);
	$oElement = new CIBlockElement();
	$oElement->Add($arFields, false, false, true);
}
}
sendFormBD($data);
?>