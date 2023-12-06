<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Registration</title>
</head>
<body>
    <div class="wrapper">
        <div class="box form-bx">

            <?php
            
            include("php/config.php");
            if(isset($_POST['submit'])){
                $username = $_POST['username'];
                $email = $_POST['email'];
                $phoneNo = $_POST['number'];
                $password = $_POST['password'];

                $verify_query = mysqli_query($con, "SELECT email FROM users WHERE email='$email'");

                if (mysqli_num_rows($verify_query) != 0){
                    echo "<div class='message'>
                    <p>This Email is Already used</p></div><br>";
                    echo "<a href='javascript:self.history.back()'>
                    <button class='btn'>Go Back</button>";
                }
                else {

                    mysqli_query($con, "INSERT INTO users(username, email, phoneNo, password) VALUES('$username', '$email', '$phoneNo','$password')") or die("Error Occurred");
                    echo "<div class='message'>
                    <p>Registered Succesfully! !</p></div><br>";
                    echo "<a href='index.php'>
                    <button class='btn'>Login Now</button>";
                }
                
            } else {
            ?>
            
            <header>SIGN UP</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" required>
                </div>

                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" autocomplete="off" required>
                </div>

                <div class="field input">
                    <label for="number">Number</label>
                    <input type="number" name="number" id="number" maxlength="11" required>
                </div>

                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required>
                </div>

                <!-- <div class="field input">
                    <label for="confirm-pass">Confirm Password</label>
                    <input type="password" name="confirm-pass" id="confirm-pass" required>
                </div> -->

                <div class="field">
                    <input type="submit" class="btn" name="submit" value="SIGN UP" onsubmit="chkPassword()">
                    <!-- <button type="submit" class="btn" name="submit" value="Login" onsubmit="chkPassword()">SIGN UP</button> -->
                </div>

                <div class="reg-link">
                    Have an account? <a href="index.php">Sign Up</a>
                </div>

            </form>
        </div>
        <?php } ?>
    </div>

    <!-- <script src="validator.js"></script> -->
</body>
</html>