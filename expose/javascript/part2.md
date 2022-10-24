1. Line 12 will print "3". Since vars are accessible anywhere inside the function, it'll print the value of i when the for loop completes, which should be 3.

2. Line 13 will print "150". Again, discountedPrice can be accessed outside of the for-loop, and it's most recent value would be 300/2 = 150.

3. Line 14 will print "150" as well. finalPrice is still in scope like the last two questions, and it's most recent value should be 150.

4. The function returns [50, 100, 150] since all it's doing is halving the prices of everything in the original array and pushing it to a new array.

5. There will be an error at line 12 since "i" is out of scope.

6. Again, there's an error here since "discountedPrice" is out of scope and can't be seen by console.log().

7. finalPrice is still in scope, so line 14 prints "150" just like it did in the earlier question.

8. I don't see any problems with the code if you're not trying to access those out of scope variables, so it should return the same array as last time - [50, 100, 150].

9. There will be an error at line 11 since "i" is out of scope.

10. Line 12 will print "3". It's just giving the value of the const assigned on line 4, which will always be 3.

11. The function will return [50, 100, 150]. It's just halving all the prices in the array and returning those--I don't see any out-of-scope errors or problems with reassigning const variables.

12. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseload[0]

13. 
    A. '32' since the integer 2 is mapped to the string '2'.
    B. 1 since '3' converts to the number 3.
    C. 3 since null converts to 0.
    D. '3null' since null converts to the string 'null'.
    E. 4 since true converts to the numeric value 1.
    F. 0 since both false and null convert to the numeric value 0.
    G. '3undefined' since undefined converts to a string.
    H. NaN since undefined becomes NaN as a string.

14. 
    A. true since '2' becomes the number 2.
    B. false since they are compared lexographically as strings.
    C. true since they are both treated as numbers.
    D. false since the number and string are obviously not the same type.
    E. false since true is the number 1, and 1 != 2.
    F. true since the explicit boolean conversion results in another true.

15. == checks for equality and will use type conversion to compare data, while === checks for equality without allowing type conversion.

16. See part2-question16.js

17. It will return [2,4,6]. It's basically iterating through the input array and calling the doSomething function on each element, which doubles the element. It then adds the element to the output array. Thus [1,2,3] becomes [2,4,6].

18. See part2-question18.js

19. The code should print 1, 3, 4, 2 in that order. 1 is printed, then the function to print 2 is called with a 1 second delay, then 3 is printed with 0 delay and then 4 is printed. So the order they will appear on screen is 1, 3, 4, 2.
