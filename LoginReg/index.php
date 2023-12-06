<?php
    session_start()
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Login - Registration</title>
</head>
<body>
    <div class="wrapper">
        <div class="box form-bx">
            <?php

            include("php/config.php");
            if(isset($_POST['submit'])){
                $email = mysqli_real_escape_string($con, $_POST['email']);
                $password = mysqli_real_escape_string($con, $_POST['password']);

                $result = mysqli_query($con, "SELECT * FROM users WHERE email='$email' AND password='$password' ") or die("Select Error");
                $row = mysqli_fetch_assoc($result);

                if(is_array($row) && !empty($row)){
                    $_SESSION['valid'] = $row['email'];
                    $_SESSION['username'] = $row['username'];
                    $_SESSION['password'] = $row['password'];
                    $_SESSION['id'] = $row['ID'];
                } else {
                    echo "<div class='message'>
                    <p>WRONG USERNAME OR PASSWORD</p></div><br>";
                    echo "<a href='index.php'>
                    <button class='btn'>Go Back</button>";
                }
                
                // Change the Location below to the homepage

                if (isset($_SESSION['valid'])){
                    header("Location: SampleHomePage.html");
                }

            }else{
            
            
            ?>

            <header>LOGIN</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" >
                </div>

                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" >
                </div>

                <div class="field">
                    <input type="submit" class="btn" name="submit" value="Login">
                </div>

                <div class="reg-link">
                    Don't have an account? <a href="reg.php">Sign Up</a>
                </div>

            </form>
        </div>
        <?php } ?>
    </div>
</body>
</html>