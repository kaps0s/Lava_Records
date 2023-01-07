<?php

    
    /*διάβασε τα στοιχεία σύνδεσης απο το αρχείο credent.php*/
    require_once 'credent.php';

    // Δημιουργία σύνδεσης
    $connectionstr="host=".DB_SERVER." port=5432 dbname=".DB_BASE."
    user=".DB_USER." password=".DB_PASS." options='--client_encoding=UTF8'";
    $dbconn = pg_connect($connectionstr);

    // Έλεγχος σύνδεσης
    if (!$dbconn) {
    die("Connection failed: " . pg_connect_error());
    }

    //Δημιουργία ερωτήματος
    $sql = "SELECT * FROM user_data WHERE username = '{$_POST['username']}' AND password = '{$_POST['password']}'";


    // $sql = "UPDATE user_data
    // SET record_1 = '{$_COOKIE['RECORD_1']}', record_2 = '{$_COOKIE['RECORD_2']}',
    //     record_3 = '{$_COOKIE['RECORD_3']}', record_4 = '{$_COOKIE['RECORD_4']}'
    // WHERE username = '{$_COOKIE['USERNAME']}'";
    //$sql = "SELECT * FROM user_data WHERE username = '" .$_POST['username']."';";
    //$sql = "SELECT * FROM userdata WHERE email='".$_POST['email']."';";

    /*εκτυπώνω στο φυλλομετρητή το ερώτημα ώστε να ελέγξω μην έχει πάει κάτι λάθος*/
    
    //εκτέλεση ερωτήματος στη βάση
    $result = pg_query($dbconn, $sql) ;

    //έλεγχος αποτελεσμάτων
    if ($result) {

    } else {
        echo "Αναζήτηση NOT οκ <br>";
        die('Query failed: ' . pg_last_error());
    }


    //echo "!!!!!!!!!!!!";
    // Εμφάνιση αποτελεσμάτων στις γραμμές του πίνακα
    
    $row = pg_fetch_row($result);

    if (!$row){
        //echo "!!!!!!!!!!";
        setcookie('PG_ERROR','Entry_not_found');

        header("Location: login.html");
    
        
    }else{

        setcookie('USERNAME',$row[1]);
        setcookie('USERNAME_COPY',$row[1]);
        setcookie('EMAIL',$row[2]);
        setcookie('RECORD_1',$row[4]);
        setcookie('RECORD_2',$row[5]);
        setcookie('RECORD_3',$row[6]);
        setcookie('RECORD_4',$row[7]);
    

        header("Location: index.html");
    }

    // setcookie('USERNAME',$row[1]);
    // setcookie('RECORD_1',$row[4]);
    // setcookie('RECORD_2',$row[5]);
    // setcookie('RECORD_3',$row[6]);
    // setcookie('RECORD_4',$row[7]);

    //echo "!!!!!!!!!!!!";
    //echo " '".$row['username']."' '".$row['password']."' '".$row['record_1']."' '".$row['record_2']."' ";
    //echo "{$row[1]} {$row[2]} {$row[3]} {$row[4]}";
    //echo $_COOKIE['RECORD_1'];
    //echo "{$row['username']} {$row['password']} {$row['record_1']} {$row['record_2']}";
    //echo "$row['username'] $row['password'] $row['record_1'] $row['record_2']";

    //header("Location: update_records.php");

    //$username = $row['username'];



    //κλείσιμο σύνδεσης
    pg_close($dbconn);
?>

        
