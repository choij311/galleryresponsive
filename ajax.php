<!DOCTYPE HTML>
<html lang='ko'>
<head>
	<title>AJAX FOMR 전송</title>
	<meta charset='utf-8'>	
	
</head>
<body>
	<h1>전송이 완료 되었습니다.</h1>

	<ul>
		<li>이름 : <? echo $_POST['_name']; ?></li>
		<li>이메일 : <? echo $_POST['_email']; ?></li>
		<li>좋아하는 음식 : <? echo $_POST['_select']; ?></li>
		<li>메시지 : <? echo $_POST['_message']; ?></li>
	</ul>

</body>
</html>
