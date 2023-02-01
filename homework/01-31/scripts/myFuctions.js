<!-- This is the code we wrote during the live coding session on 01-24.
Copy the code within the <script> tags to your own index.html file -->
    
<!DOCTYPE html>
<html>
    <head>
        <meta charset=”utf-8” />
        <title>JavaScript</title>

        <script>

	        // Solutions for In-Class Coding Problems (see page 14 of Week 3 slides)
            // Return square root
            function returnsSq(val) {
                if (isNaN(val)) {
                    console.log("Not a number.")
                } else {
                    return Math.sqrt(val);
                }
                // a function without a return will
                // print "undefined" in the console
            }

            // prints the square root of 9
            console.log(returnsSq(9));

            // Return all numbers from an input value all the way down to 0; 
            // Check if the input is a number and is greater than 0
            function decreasing(val) {
                if (isNaN(val)) {
                    console.log("Not a number.");
                } else {
                    // There are a few different ways to implement this.
                    // The following is a simple implementation with a for loop

                    for (let i=val; i >= 0; i--) {
                        console.log(i);
                    }
                }
                // a function without a return will
                // print "undefined" in the console
            }

            // prints all numbers from 10 to 0 
            console.log(decreasing(10));

        </script>
    </head>

    <body>
        <div>
            <h1 id="HL">Hello, world!</h1>
        </div>

        <!-- Connecting JavaScript with HTML:
        changing content in HTML tags. -->
	<!-- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById -->
	<!-- https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML -->
        <script>
            document.getElementById("HL").innerHTML = "Changed the Text";
            document.getElementById("HL").style.color = "green";
        </script>
    </body>

</html>