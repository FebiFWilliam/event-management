<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // For now, let's display the message (you can implement mail or DB storage here)
    echo "Thank you for contacting us, $name. We have received your message:<br>";
    echo "<strong>Subject:</strong> $subject<br>";
    echo "<strong>Message:</strong> $message<br>";

    // You can add email logic or save the message in the database here.
}
?>
