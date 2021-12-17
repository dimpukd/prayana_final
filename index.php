<?php
    $name=$_POST['name'];
    $Number=$_POST['Number'];
    $email=$_POST['email'];
    $message=$_POST['message'];

    $conn=new mysqli('sql310.unaux.com','unaux_30583275','2bp7oybt','unaux_30583275_prayana');
    if($conn->connect_error){
        die('Connection Failed :'.$conn->connect_error);
    }else{
        $stmt=$conn->prepare("insert into contact(name,Number,email,message)values(?,?,?,?)");
        $stmt->bind_param("siss",$name,$Number,$email,$message);
        $stmt->execute();
        header("Location:contactus.html");
       // echo "Thank You For Contacting...";
        $stmt->close();
        $conn->close();
    }
?>