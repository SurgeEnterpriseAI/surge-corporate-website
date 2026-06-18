<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($_POST['phone']));
    $company = htmlspecialchars(trim($_POST['company']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email format";
        exit;
    }
    
    // Email configuration
    $to = "corp@surgesoftware.co.in";
    $subject = "New Contact Form Submission from Surge Website";
    
    // Email body
    $email_body = "You have received a new message from the contact form on your website.\n\n";
    $email_body .= "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Company: $company\n\n";
    $email_body .= "Message:\n$message\n";
    
    // Email headers
    $headers = "From: noreply@surgesoftware.co.in\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        // Redirect to thank you page or show success message
        header("Location: contactus.html?success=1");
        exit;
    } else {
        http_response_code(500);
        echo "Failed to send message. Please try again later.";
        exit;
    }
} else {
    http_response_code(405);
    echo "Method not allowed";
}
?>
