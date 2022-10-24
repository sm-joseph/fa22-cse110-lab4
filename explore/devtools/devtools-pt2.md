1. The bug was that the input data types num1 and num2 were strings, so when a result was being assigned, "1" + "2" would be output as "12" instead of doing 1 + 2 numerically and ending up with 3. 

2. We can just pass the strings to the Number object in js before summing them. This will fix the bug, and will return NaN for any string inputs into the calculator. See fix.png