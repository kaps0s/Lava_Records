<?php


    //echo "!!!!!!!!!!!!";
    // Εμφάνιση αποτελεσμάτων στις γραμμές του πίνακα

    setcookie("USERNAME", "null", time()-3600);
    setcookie("USERNAME_COPY", "null", time()-3600);
    setcookie("EMAIL", "null", time()-3600);
    setcookie("PASSWORD", "null", time()-3600);
    setcookie("PASSWORD2", "null", time()-3600);
    setcookie("RECORD_1", "null", time()-3600);
    setcookie("RECORD_2", "null", time()-3600);
    setcookie("RECORD_3", "null", time()-3600);
    setcookie("RECORD_4", "null", time()-3600);
    setcookie("PG_ERROR", "null", time()-3600);

    // setcookie('USERNAME',"null");
    // setcookie('RECORD_1',false);
    // setcookie('RECORD_2',false);
    // setcookie('RECORD_3',false);
    // setcookie('RECORD_4',false);

    //echo "!!!!!!!!!!!!";
    //echo " '".$row['username']."' '".$row['password']."' '".$row['record_1']."' '".$row['record_2']."' ";
    //echo "{$row[1]} {$row[2]} {$row[3]} {$row[4]}";
    //echo $_COOKIE['RECORD_1'];
    //echo "{$row['username']} {$row['password']} {$row['record_1']} {$row['record_2']}";
    //echo "$row['username'] $row['password'] $row['record_1'] $row['record_2']";

    header("Location: index.html");

    //$username = $row['username'];



    //κλείσιμο σύνδεσης
?>