# 03 JavaScript: Password Generator
The application generates a unique password, given criteria by the user.

This application begins by prompting the user fo the password length required.

If the length is less than 8 or the length is greater than 129, 
they will be told their input is invalid and will be reprompted until they choose an input length between 8 and 128.

The user will then be prompted to include Lowercase, Uppercase, Numbers, and Special characters.
If none are selected, the user will be reprompted until at least one input type is chosen.

The application then adds a random character from each of the character types chosen,
and then creates an Array including all characters of the types chosen by the user.

The remainder of the password is then generated by taking random elements from th Array 
that includes all possible characters from the character types the user has chosen.

The password is then saved to a variable and then returned. 


-UPDATE: ALL TEST CASES HAVE BEEN CHECKED