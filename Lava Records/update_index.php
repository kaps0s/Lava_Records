<?php
    /*διάβασε τα στοιχεία σύνδεσης απο το αρχείο credent.php*/
    require_once 'credent.php';

    // Δημιουργία σύνδεσης
    $connecionstr="host=".DB_SERVER." port=5432 dbname=".DB_BASE."
    user=".DB_USER." password=".DB_PASS." options='--client_encoding=UTF8'";
    $dbconn = pg_connect($connecionstr);
    
    // Έλεγχος σύνδεσης
    if (!$dbconn) {
        die("Connection failed: " . pg_connect_error());
    }

    //Δημιουργία ερωτήματος
    $sql = "UPDATE user_data
            SET record_1 = '{$_COOKIE['RECORD_1']}', record_2 = '{$_COOKIE['RECORD_2']}',
                record_3 = '{$_COOKIE['RECORD_3']}', record_4 = '{$_COOKIE['RECORD_4']}'
            WHERE username = '{$_COOKIE['USERNAME']}'";
    
    //εκτέλεση ερωτήματος στη βάση
    $result = pg_query($dbconn, $sql) ;
    //έλεγχος αποτελεσμάτων
    if ($result) {
    
    } else {
    echo "Αναζήτηση NOT οκ <br>";
    die('Query failed: ' . pg_last_error());
    }
    
    
    //echo "!!!!!!!!";
    header("Location: index.html");

    //κλείσιμο σύνδεσης
    pg_close($dbconn);
?>