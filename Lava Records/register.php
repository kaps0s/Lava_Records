<?php
/*διάβασε τα στοιχεία σύνδεσης απο το αρχείο credent.php*/
require_once 'credent.php';



// Δημιουργία σύνδεσης 
$connecionstr="host=".DB_SERVER." port=5432 dbname=".DB_BASE." 
user=".DB_USER." password=".DB_PASS." options='--client_encoding=UTF8'"; 
$dbconn = pg_connect($connecionstr);

if (!$dbconn){

    //if connection to database failed
    setcookie('USERNAME', 'null');
    setcookie('PG_ERROR', pg_last_error());

    header("Location: register.html");
}
else{

    $sql = "INSERT INTO user_data (username, email, password, record_1, record_2, record_3, record_4) 
            VALUES ('{$_POST['username']}','{$_POST['email']}','{$_POST['password']}','{$_COOKIE['RECORD_1']}',
            '{$_COOKIE['RECORD_2']}','{$_COOKIE['RECORD_3']}','{$_COOKIE['RECORD_4']}')";
    

    //εκτέλεση ερωτήματος στη βάση
    $result = pg_query($dbconn, $sql);

    if (!$result){

        //if username or email in use
        setcookie('USERNAME', 'null');
        setcookie('PG_ERROR', pg_last_error());


        header("Location: register.html");
    }else{
        setcookie('PG_ERROR', ' ');
        setcookie('USERNAME',$_POST['username']);

        //setcookie('USERNAME',$row[1]);
        //setcookie('USERNAME_COPY',$row[1]);
        setcookie('EMAIL',$_POST['email']);
        setcookie('RECORD_1',"false");
        setcookie('RECORD_2',"false");
        setcookie('RECORD_3',"false");
        setcookie('RECORD_4',"false");

        header("Location: index.html");
    }
}

pg_close($dbconn);
?>
