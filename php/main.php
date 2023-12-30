<?php
session_start();
$mysqli = new mysqli('localhost', 'admin', '1234', 'test');
$data = json_decode(file_get_contents('php://input'), true);
function records($mysqli, $state, $data) {
    $mysqli->query(sprintf("insert into re(account, state, result) value('%s','%s','%s')", $data, $state < 2 ? '登入' : '登出', $state < 1 ? '失敗' : '成功'));
    return $state;
}
if ($_GET['cmd'] == 'record')
    echo json_encode($mysqli->query("select * from re")->fetch_all(MYSQLI_ASSOC));
if ($_GET['cmd'] == 'select')
    echo json_encode($mysqli->query("select * from ac")->fetch_all(MYSQLI_ASSOC));
if ($_GET['cmd'] == 'insert')
    echo json_encode($mysqli->query(sprintf("insert into ac(name, account, password, permissions) value('%s','%s','%s','%s')", $data['name'], $data['account'], $data['password'], $data['permissions'])));
if ($_GET['cmd'] == 'update')
    echo json_encode($mysqli->query(sprintf("update ac set name='%s', account='%s', password='%s', permissions='%s' where id='%s'", $data['name'], $data['account'], $data['password'], $data['permissions'], $data['id'])));
if ($_GET['cmd'] == 'delete')
    echo json_encode($mysqli->query(sprintf("delete from ac where id='%s'", $data['id'])));
if ($_GET['cmd'] == 'LogIn') {
    $_SESSION['fail'] = $_SESSION['fail']??0;
    if (join('', $data['captcha']) != $_SESSION['ans'] || is_null($data['captcha']))
        echo json_encode(['fail'=>$_SESSION['fail']+=1, 'message'=>'請輸入驗證碼！', 'state'=>records($mysqli, 0, '未知')]), exit();
    if ($data['account'] == '' or $data['password'] == '')
        echo json_encode(['fail'=>$_SESSION['fail']+=1, 'message'=>'請填寫完整資料', 'state'=>records($mysqli, 0, '未知')]), exit();
    $result = $mysqli->query(sprintf("select * from ac where account='%s' limit 1", $data['account']))->fetch_assoc();
    if ($data['account'] != $result['account'] || is_null($result))
        echo json_encode(['fail'=>$_SESSION['fail']+=1, 'message'=>'帳號輸入不正確', 'state'=>records($mysqli, 0, '未知')]), exit();
    if ($data['password'] != $result['password'])
        echo json_encode(['fail'=>$_SESSION['fail']+=1, 'message'=>'密碼輸入不正確', 'state'=>records($mysqli, 0, $data['account'])]), exit();
    $_SESSION['competence'] = $result['permissions'] != '使用者';
    $_SESSION['user'] = $result['permissions'];
    $_SESSION['account'] = $result['account'];
    echo json_encode(['fail'=>$_SESSION['fail']=0, 'message'=>'登入成功', 'state'=>records($mysqli, 1, $data['account'])]);
}
if ($_GET['cmd'] == 'SignOut') {
    records($mysqli, 2, $_SESSION['account']);
    unset($_SESSION['competence'], $_SESSION['user'], $_SESSION['account']);
}
if ($_GET['cmd'] == 'info') {
    echo json_encode(['competence'=>$_SESSION['competence'] ?? false, 'user'=>$_SESSION['user']??null, 'account'=>$_SESSION['account']??null]);
}