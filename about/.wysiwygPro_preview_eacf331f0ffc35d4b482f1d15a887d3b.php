<?php
if ($_GET['randomId'] != "8SkZYH4QO926N1egCMs9YNXMslevSNWwbvk5Zf2a46pIKJK46t3G_63m0IrX4_q3") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
