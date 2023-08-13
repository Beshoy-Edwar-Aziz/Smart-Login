# Smart-Login
Login System which utilizes HTML , CSS, Bootstrap5, JS and Regex it allows the user to add his name, email and password to Localstorage and before signing up the system checks whether the name, email or password were stored before in localstorage if they are it prevents the process from continuing, showing a message detailing the problem, also regex validates that the user is entering the data correctly with specific rules to prevent SQL injection
For Regex it validates the Name, email and password fields inside the signup page, for the name the vaildation focuses mainly on limiting the user to entering aplphabetic letters and numbers.
In case of email the validation simply limited the email to 
