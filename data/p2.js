/* Paper 2 (Algorithms, Programming and Logic) — original questions on topics 7–10. Pseudocode follows the Cambridge pseudocode guide style. */
const MEMBERS=[["MemberID","Name","Age","Level","Fees","Paid"],["M01","Asha","15","Junior","40.00","TRUE"],["M02","Ben","34","Senior","75.50","TRUE"],["M03","Chen","17","Junior","40.00","FALSE"],["M04","Divya","52","Senior","75.50","TRUE"],["M05","Eli","12","Junior","35.00","TRUE"],["M06","Fatima","29","Senior","75.50","FALSE"],["M07","Gus","68","Veteran","50.00","TRUE"],["M08","Hana","16","Junior","40.00","TRUE"]];
const BOOKS=[["BookID","Title","Author","Genre","Year","Copies"],["B101","River Song","Okafor","Fiction","2015","3"],["B102","Deep Space","Lindqvist","Science","2021","5"],["B103","The Orchard","Okafor","Fiction","2019","2"],["B104","Code Basics","Patel","Computing","2022","6"],["B105","Lost Cities","Mendes","History","2012","1"],["B106","Data Stories","Patel","Computing","2018","4"],["B107","Night Train","Mendes","Fiction","2023","2"]];
const C1={g:"OR",i:[{g:"AND",i:["A","B"]},{g:"NOT",i:["C"]}]};
const C2={g:"XOR",i:[{g:"NAND",i:["A","B"]},"C"]};
const C3={g:"AND",i:[{g:"OR",i:["A","B"]},{g:"NOR",i:["B","C"]}]};
const ALARM={g:"AND",i:[{g:"OR",i:["W","D"]},{g:"NOT",i:["K"]}]};
const PUMP={g:"OR",i:[{g:"AND",i:["T",{g:"NOT",i:["M"]}]},"O"]};
const P2Q=[
{id:"validation",t:["7"],title:"Validation and test data",stem:"<p>A program asks a student to enter their age. Only ages from 11 to 18 inclusive are accepted.</p>",parts:[
 {q:"Identify the most appropriate validation check for each input: (i) the age must be from 11 to 18, (ii) a password must have at least 8 characters, (iii) a postcode must not be left blank, (iv) an email address must contain one @ symbol.",m:4,ms:["(i) range check","(ii) length check","(iii) presence check","(iv) format check"]},
 {q:"Give one example of each type of test data for the age input: normal, abnormal, extreme and boundary.",m:4,ms:["Normal: any whole number from 12 to 17 (e.g. 15)","abnormal: e.g. 25, −3, \"fifteen\"","extreme: 11 or 18","boundary: 10 or 11, or 18 or 19 (a pair either side of a limit)"]},
 {q:"Describe the difference between validation and verification.",m:2,ms:["Validation checks that data is reasonable/meets set rules before it is accepted","verification checks that data has been accurately copied/entered (e.g. double entry, visual check)"]},
 {q:"Write pseudocode to input an age and keep asking until a valid age (11 to 18) is entered.",m:4,ms:["INPUT Age","loop (e.g. WHILE Age < 11 OR Age > 18 / REPEAT … UNTIL)","error message and re-input inside the loop","correct condition for the range"],note:"[1] per point. Example: INPUT Age; WHILE Age < 11 OR Age > 18 DO OUTPUT \"Invalid, re-enter\"; INPUT Age; ENDWHILE"}]},
{id:"trace1",t:["7"],title:"Trace table",stem:"<p>The algorithm below processes numbers until 0 is entered.</p>"+C(`Count <- 0
Total <- 0
Max <- -1
REPEAT
   INPUT Num
   IF Num > 0
     THEN
       Total <- Total + Num
       Count <- Count + 1
       IF Num > Max
         THEN
           Max <- Num
       ENDIF
   ENDIF
UNTIL Num = 0
OUTPUT Total / Count, " ", Max`,true),parts:[
 {q:"Complete a trace table for the input data 7, −3, 12, 5, 0. Use the columns Num, Total, Count, Max and OUTPUT.",m:5,ms:["Initial values Total 0, Count 0, Max −1","Num 7: Total 7, Count 1, Max 7","Num −3: no change","Num 12: Total 19, Count 2, Max 12; Num 5: Total 24, Count 3, Max 12","Num 0: loop ends; OUTPUT 8 12"],note:"[1] per correct stage."},
 {q:"State the purpose of the algorithm.",m:2,ms:["Calculates and outputs the average of the positive numbers entered","and the largest positive number"]},
 {q:"Identify a problem that occurs if the first number entered is 0, and suggest how to correct it.",m:2,ms:["Count is 0 so Total / Count causes a division by zero (run-time error)","add a check: IF Count > 0 THEN output the average ELSE output a message"]}]},
{id:"errors",t:["7","8.1"],title:"Finding and correcting errors",stem:"<p>This algorithm should input 20 whole numbers, count how many are even, and output the count and the average of all 20 numbers. It contains four errors.</p>"+C(`DECLARE Number : INTEGER
DECLARE EvenCount : INTEGER
DECLARE Total : INTEGER
EvenCount <- 1
Total <- 0
FOR Index <- 1 TO 21
   INPUT Number
   IF Number DIV 2 = 0
     THEN
       EvenCount <- EvenCount + 1
   ENDIF
   Total <- Total + Index
NEXT Index
OUTPUT "Even numbers: ", EvenCount
OUTPUT "Average: ", Total / 20`,true),parts:[
 {q:"Identify the line number of each of the four errors and write the correction.",m:4,ms:["Line 04: EvenCount <- 0","Line 06: FOR Index <- 1 TO 20","Line 08: IF Number MOD 2 = 0","Line 12: Total <- Total + Number"],note:"[1] per error identified and corrected."},
 {q:"Explain why Total / 20 might not give a whole number and how the result could be displayed to 2 decimal places.",m:2,ms:["The average may be a real number (e.g. 12.35)","use ROUND(Total / 20, 2)"]},
 {q:"Describe one way of rewriting the FOR loop as a pre-condition loop.",m:2,ms:["Set Index <- 1 before the loop; WHILE Index <= 20 DO","increment Index <- Index + 1 inside the loop; ENDWHILE"]}]},
{id:"strings",t:["8.1"],title:"String handling",stem:"<p>A computer system creates usernames. The variable Surname is \"Fernandez\" and Year is 2011.</p><p class='small'>SUBSTRING(String, Start, Length) returns Length characters starting at position Start; the first character is position 1.</p>",parts:[
 {q:"State the value returned by each of: (i) LENGTH(Surname), (ii) UCASE(SUBSTRING(Surname, 1, 3)), (iii) LCASE(Surname).",m:3,ms:["(i) 9","(ii) \"FER\"","(iii) \"fernandez\""]},
 {q:"Write one line of pseudocode to make Username equal to the first four letters of Surname in upper case followed by the last two digits of Year, e.g. FERN11.",m:3,ms:["Username <- UCASE(SUBSTRING(Surname, 1, 4))","& concatenation","NUM_TO_STR(Year MOD 100) / SUBSTRING(NUM_TO_STR(Year), 3, 2)"],note:"Accept equivalent string functions/program code."},
 {q:"Complete the table with the most appropriate data type for each variable: Surname, Year, HasPaid (yes/no), Initial (one letter), Height in metres.",m:3,ms:["Surname: STRING","Year: INTEGER","HasPaid: BOOLEAN; Initial: CHAR; Height: REAL"],note:"[1] for any two correct, [2] for four, [3] for all five."},
 {q:"Explain why Year should be stored as an integer rather than a string.",m:2,ms:["So it can be used in calculations/comparisons (e.g. working out age)","uses less storage/allows numeric validation"]}]},
{id:"routines",t:["8.1"],title:"Library routines, procedures and functions",stem:"<p>A programmer is using library routines and subroutines.</p>",parts:[
 {q:"State the value of each expression: (i) 17 MOD 5, (ii) 17 DIV 5, (iii) ROUND(7.468, 1), (iv) the smallest value RANDOM() * 10 could produce.",m:4,ms:["(i) 2","(ii) 3","(iii) 7.5","(iv) 0"]},
 {q:"Describe the difference between a procedure and a function.",m:2,ms:["A function always returns a value","a procedure does not return a value (it performs a task)"]},
 {q:"Explain the difference between a local variable and a global variable.",m:2,ms:["A local variable is declared inside a subroutine and can only be used within it","a global variable is declared outside subroutines and can be used anywhere in the program"]},
 {q:"Write a pseudocode function Area that takes the length and width of a rectangle as parameters and returns the area.",m:3,ms:["FUNCTION Area(Length : REAL, Width : REAL) RETURNS REAL","RETURN Length * Width","ENDFUNCTION"]}]},
{id:"loops",t:["8.1"],title:"Iteration and selection",stem:C(`FOR Count <- 1 TO 5
   OUTPUT Count * Count
NEXT Count`),parts:[
 {q:"State the output from the algorithm.",m:1,ms:["1 4 9 16 25"]},
 {q:"Rewrite the algorithm using a post-condition loop.",m:3,ms:["Count <- 1 before the loop","REPEAT … OUTPUT Count * Count; Count <- Count + 1","UNTIL Count > 5"]},
 {q:"A program inputs a day number (1 to 7) and outputs the day name. Explain why a CASE statement is more suitable than several IF statements.",m:2,ms:["CASE selects one of many options based on a single value","code is shorter/clearer/easier to read and maintain than nested IFs"]},
 {q:"Write pseudocode using CASE OF to output \"Weekend\" for day 6 or 7, \"Weekday\" for days 1 to 5 and \"Error\" otherwise.",m:4,ms:["CASE OF Day","1 to 5 : OUTPUT \"Weekday\" (accept each value listed)","6, 7 : OUTPUT \"Weekend\"","OTHERWISE : OUTPUT \"Error\" … ENDCASE"]}]},
{id:"search",t:["8.2","7"],title:"Searching a one-dimensional array",stem:"<p>The array Names[1:50] stores the names of 50 students.</p>",parts:[
 {q:"Write pseudocode to declare the array.",m:2,ms:["DECLARE Names : ARRAY[1:50]","OF STRING"]},
 {q:"Write pseudocode for a linear search that inputs a name, searches Names and outputs the position if it is found or \"Not found\" if it is not.",m:6,ms:["INPUT SearchName","initialise Found <- FALSE and Index <- 1","loop through the array (until found or end of array)","compare Names[Index] = SearchName","if found output the position/Index and set Found <- TRUE","output \"Not found\" if not found after the loop"],note:"[1] per point up to [6]."},
 {q:"Explain why a linear search may be slow for a very large array.",m:2,ms:["Each element is checked in turn","in the worst case every element must be checked (e.g. item last or not present)"]}]},
{id:"bubble",t:["7","8.2"],title:"Bubble sort",stem:"<p>A bubble sort is used to sort the array Values into ascending order. Values contains: 9, 4, 7, 1, 5.</p>",parts:[
 {q:"Write the contents of the array after the first pass of the bubble sort.",m:2,ms:["4, 7, 1, 5, 9"],note:"[1] for the largest value 9 at the end, [1] for the correct order of the rest."},
 {q:"Write the contents of the array after the second pass.",m:1,ms:["4, 1, 5, 7, 9"]},
 {q:"State how many passes are needed before the array is sorted.",m:1,ms:["3 (the array is in order after the third pass; a fourth pass with no swaps may be used to confirm)"],note:"Accept 4 if the student explains a final pass with no swaps."},
 {q:"Explain how a flag can be used to make the bubble sort more efficient.",m:2,ms:["A Boolean flag is set to TRUE when a swap is made during a pass","if a pass completes with no swaps the array is sorted and the sort stops early"]},
 {q:"Write pseudocode for one pass of a bubble sort on Values[1:5].",m:4,ms:["FOR Index <- 1 TO 4","IF Values[Index] > Values[Index + 1]","swap using a temporary variable: Temp <- Values[Index]; Values[Index] <- Values[Index + 1]; Values[Index + 1] <- Temp","ENDIF / NEXT Index"]}]},
{id:"array2d",t:["8.2"],title:"Two-dimensional arrays",stem:"<p>A teacher stores test scores for 30 students in 4 tests in the 2D array Scores[1:30, 1:4]. Student names are stored in StudentName[1:30].</p>",parts:[
 {q:"Write pseudocode to declare the array Scores.",m:2,ms:["DECLARE Scores : ARRAY[1:30, 1:4]","OF INTEGER"]},
 {q:"Write pseudocode to output each student's name and their average score for the four tests.",m:6,ms:["Outer loop for 30 students","Total reset to 0 for each student","inner loop for 4 tests","Total <- Total + Scores[Student, Test]","Average <- Total / 4","OUTPUT StudentName[Student], Average"],note:"[1] per point up to [6]."},
 {q:"Explain why a 2D array is more suitable than four separate 1D arrays.",m:2,ms:["All the scores are stored in one structure/one identifier","so nested loops can process all tests and students easily"]}]},
{id:"files",t:["8.3"],title:"File handling",stem:"<p>A program saves high scores to the text file Scores.txt.</p>",parts:[
 {q:"Explain why data is stored in a file.",m:2,ms:["Data in variables is lost when the program closes","a file stores data permanently so it can be used again later/by another program"]},
 {q:"Write pseudocode to open Scores.txt, write the value of the variable NewScore to it and close the file.",m:3,ms:["OPENFILE \"Scores.txt\" FOR WRITE","WRITEFILE \"Scores.txt\", NewScore","CLOSEFILE \"Scores.txt\""]},
 {q:"Write pseudocode to read and output the first line of text from Scores.txt.",m:3,ms:["OPENFILE \"Scores.txt\" FOR READ","READFILE \"Scores.txt\", Line; OUTPUT Line","CLOSEFILE \"Scores.txt\""]},
 {q:"State what will happen to existing data in Scores.txt when it is opened FOR WRITE.",m:1,ms:["It is overwritten/deleted"]}]},
{id:"db-members",t:["9"],title:"A database of club members",stem:"<p>A sports club stores member details in the table MEMBERS.</p>"+T2(MEMBERS,"Table: MEMBERS"),parts:[
 {q:"State the number of fields and the number of records in the table.",m:2,ms:["6 fields","8 records"]},
 {q:"Identify a suitable primary key. Justify your choice.",m:2,ms:["MemberID","it is unique for each member (names or ages could repeat)"]},
 {q:"Identify the most suitable data type for the fields Age, Fees and Paid.",m:3,ms:["Age: integer","Fees: real","Paid: Boolean"]},
 {q:"Write the output from this SQL statement: SELECT Name, Age FROM MEMBERS WHERE Level = 'Junior' AND Paid = TRUE ORDER BY Age DESC;",m:3,ms:["Hana 16","Asha 15","Eli 12 (in this order)"],note:"[1] for correct records, [1] for correct fields, [1] for correct order."},
 {q:"Complete an SQL statement to output the total fees for Senior members.",m:3,ms:["SELECT SUM(Fees)","FROM MEMBERS","WHERE Level = 'Senior';"]},
 {q:"Suggest one validation check for the Age field.",m:1,ms:["Range check (e.g. 5 to 100)/type check (integer)/presence check"]}]},
{id:"db-books",t:["9"],title:"A library database",stem:"<p>A school library stores details of books in the table BOOKS.</p>"+T2(BOOKS,"Table: BOOKS"),parts:[
 {q:"Write the output from: SELECT Title FROM BOOKS WHERE Author = 'Okafor' OR Copies > 4;",m:3,ms:["River Song","Deep Space","The Orchard; Code Basics"],note:"[3] for all four titles and no others; [2] for three; [1] for two."},
 {q:"Write the output from: SELECT COUNT(BookID) FROM BOOKS WHERE Genre = 'Fiction';",m:1,ms:["3"]},
 {q:"Write an SQL statement to output the Title and Year of Computing books in ascending order of Year.",m:4,ms:["SELECT Title, Year","FROM BOOKS","WHERE Genre = 'Computing'","ORDER BY Year ASC;"]},
 {q:"Write the output from: SELECT SUM(Copies) FROM BOOKS WHERE Year >= 2019;",m:1,ms:["15 (5 + 2 + 6 + 2)"]}]},
{id:"logic1",t:["10"],title:"Logic circuit to truth table",stem:CIRCUIT(C1,"Figure: logic circuit"),parts:[
 {q:"Complete the truth table for the logic circuit."+TT(C1,"X",true),m:4,ms:["X values in order (A,B,C = 000 to 111): "+TTROWS(C1).map(r=>r[3]).join(", ")],note:"[4] all 8 correct; [3] 6–7; [2] 4–5; [1] 2–3."},
 {q:"Write the logic expression for the circuit.",m:2,ms:["X = (A AND B) OR NOT C"],note:"[1] for each correct half."},
 {q:"Identify the logic gate that outputs 1 only when both inputs are 0.",m:1,ms:["NOR"]}]},
{id:"logic2",t:["10"],title:"Logic expressions and truth tables",stem:"<p>Consider the logic expression X = (A NAND B) XOR C.</p>",parts:[
 {q:"Draw a logic circuit for the expression. Do not simplify it.",m:3,ms:["NAND gate with inputs A and B","XOR gate","output of NAND and input C go into the XOR gate"],note:"[1] per correct gate with correct inputs."},
 {q:"Complete the truth table for the expression."+TT(C2,"X",true),m:4,ms:["X values in order (000 to 111): "+TTROWS(C2).map(r=>r[3]).join(", ")],note:"[4] all 8 correct; [3] 6–7; [2] 4–5; [1] 2–3."},
 {q:"Describe the output of an XOR gate.",m:2,ms:["Output is 1 when the inputs are different","output is 0 when the inputs are the same"]}]},
{id:"logic3",t:["10"],title:"Logic from a circuit diagram",stem:CIRCUIT(C3,"Figure: logic circuit"),parts:[
 {q:"Write a logic expression for the circuit.",m:3,ms:["X = (A OR B) AND (B NOR C)"],note:"[1] A OR B, [1] B NOR C, [1] AND combining them."},
 {q:"Complete the truth table."+TT(C3,"X",true),m:4,ms:["X values in order (000 to 111): "+TTROWS(C3).map(r=>r[3]).join(", ")],note:"[4] all 8 correct; [3] 6–7; [2] 4–5; [1] 2–3."},
 {q:"State the input combination(s) for which X = 1.",m:1,ms:["A = 1, B = 0, C = 0 only"]}]},
{id:"logic-alarm",t:["10"],title:"Logic from a problem statement",stem:"<p>A security alarm (X) sounds when a window is open (W = 1) or a door is open (D = 1), but only if the key switch is not turned (K = 0).</p>",parts:[
 {q:"Write a logic expression for the alarm.",m:2,ms:["X = (W OR D) AND NOT K"]},
 {q:"Draw a logic circuit for the alarm. Do not simplify it.",m:3,ms:["OR gate with inputs W and D","NOT gate on K","AND gate combining the two"]},
 {q:"Complete the truth table for the alarm."+TT(ALARM,"X",true,["W","D","K"]),m:4,ms:["X values in order (W,D,K = 000 to 111): "+TTROWS(ALARM,["W","D","K"]).map(r=>r[3]).join(", ")],note:"[4] all 8 correct; [3] 6–7; [2] 4–5; [1] 2–3."}]},
{id:"logic-pump",t:["10"],title:"Logic for a water pump",stem:"<p>A water pump (X) switches on when the tank is low (T = 1) and the manual-off switch is not pressed (M = 0), or when the override switch is on (O = 1).</p>",parts:[
 {q:"Write a logic expression for the pump.",m:2,ms:["X = (T AND NOT M) OR O"]},
 {q:"Complete the truth table."+TT(PUMP,"X",true,["T","M","O"]),m:4,ms:["X values in order (T,M,O = 000 to 111): "+TTROWS(PUMP,["T","M","O"]).map(r=>r[3]).join(", ")],note:"[4] all 8 correct; [3] 6–7; [2] 4–5; [1] 2–3."},
 {q:"Identify the gate symbol shown."+GATECARD("NAND","Figure: gate symbol"),m:1,ms:["NAND"]}]},
{id:"pdlc",t:["7"],title:"Program development and decomposition",stem:"<p>A team is developing a program for a school canteen that lets students order and pay for lunch online.</p>",parts:[
 {q:"Identify the four stages of the program development life cycle.",m:4,ms:["Analysis","design","coding","testing"]},
 {q:"Describe what happens during the analysis stage.",m:2,ms:["The problem is identified and decomposed/abstraction is used","requirements of the system are identified/specified"]},
 {q:"Decompose the canteen system into its inputs, processes, outputs and storage, giving one example of each.",m:4,ms:["Input: student ID/menu choice/payment details","process: calculate total cost/check balance","output: order confirmation/receipt","storage: student accounts/menu/orders"]},
 {q:"Identify two methods of designing a solution.",m:2,ms:["Structure diagrams","flowcharts","pseudocode"],note:"[1] per method up to [2]."}]},
{id:"flow-max",t:["7"],title:"Flowcharts",stem:"<p>The flowchart below calculates the average of a set of marks.</p>"+FLOW("Flowchart A",[
  {id:"s",k:"t",x:"START",next:"i"},{id:"i",k:"p",x:"Count <- 0|Total <- 0",next:"in"},{id:"in",k:"io",x:"INPUT Mark",next:"d"},
  {id:"d",k:"d",x:"Is Mark = -1?",yes:"o",no:"t"},{id:"t",k:"p",x:"Total <- Total + Mark",next:"c"},{id:"c",k:"p",x:"Count <- Count + 1",next:"in"},
  {id:"o",k:"io",x:"OUTPUT Total / Count",next:"e"},{id:"e",k:"t",x:"STOP"}]),parts:[
 {q:"State the output if the marks entered are 60, 75, 90, −1.",m:2,ms:["(60 + 75 + 90) ÷ 3","= 75"]},
 {q:"Explain the purpose of −1 in this flowchart.",m:2,ms:["It is a rogue/sentinel value that ends the input","it is not included in the total or count"]},
 {q:"Identify the problem that occurs if the first mark entered is −1, and describe how the flowchart could be changed to prevent it.",m:2,ms:["Division by zero (Count is 0)","add a decision before the output to check Count > 0 / output a message instead"]},
 {q:"Write pseudocode equivalent to the flowchart, using a WHILE loop.",m:4,ms:["Count <- 0, Total <- 0, INPUT Mark","WHILE Mark <> -1 DO","Total <- Total + Mark; Count <- Count + 1; INPUT Mark","ENDWHILE; OUTPUT Total / Count"]}]},
{id:"flow-largest",t:["7"],title:"Flowcharts and trace tables",stem:"<p>The flowchart below processes five numbers.</p>"+FLOW("Flowchart B",[
  {id:"s",k:"t",x:"START",next:"in1"},{id:"in1",k:"io",x:"INPUT Num",next:"l1"},{id:"l1",k:"p",x:"Largest <- Num",next:"c1"},{id:"c1",k:"p",x:"Count <- 1",next:"d1"},
  {id:"d1",k:"d",x:"Is Count < 5?",yes:"in2",no:"o"},{id:"in2",k:"io",x:"INPUT Num",next:"d2"},
  {id:"d2",k:"d",x:"Is Num > Largest?",yes:"l2",no:"c2"},{id:"l2",k:"p",x:"Largest <- Num",next:"c2",side:true},
  {id:"c2",k:"p",x:"Count <- Count + 1",next:"d1"},{id:"o",k:"io",x:"OUTPUT Largest",next:"e"},{id:"e",k:"t",x:"STOP"}]),parts:[
 {q:"Complete a trace table (columns Num, Largest, Count, OUTPUT) for the input data 12, 7, 19, 3, 15.",m:4,ms:["Num: 12, 7, 19, 3, 15","Largest: 12, 19 (changes only when 19 is input)","Count: 1, 2, 3, 4, 5","OUTPUT: 19"]},
 {q:"State the purpose of the flowchart.",m:1,ms:["To find and output the largest of five numbers input"]},
 {q:"Describe the changes needed so that the flowchart outputs the smallest number instead.",m:2,ms:["Change the decision to Is Num < Largest? / Num < Smallest","rename the variable Largest to Smallest (and output Smallest)"]},
 {q:"Write pseudocode equivalent to the flowchart, using a FOR loop.",m:4,ms:["INPUT Num; Largest <- Num","FOR Count <- 2 TO 5 (four more inputs) with INPUT Num inside","IF Num > Largest THEN Largest <- Num ENDIF","NEXT Count; OUTPUT Largest (after the loop)"]}]},
{id:"flow-valid",t:["7"],title:"Flowcharts with validation",stem:"<p>The flowchart below is used to enter test scores for a class of 30 pupils.</p>"+FLOW("Flowchart C",[
  {id:"s",k:"t",x:"START",next:"i"},{id:"i",k:"p",x:"Passes <- 0|Pupil <- 1",next:"in"},{id:"in",k:"io",x:"INPUT Score",next:"d1"},
  {id:"d1",k:"d",x:"Is Score < 0 OR|Score > 100?",yes:"err",no:"d2"},{id:"err",k:"io",x:"OUTPUT \"Invalid, re-enter\"",next:"in",side:true},
  {id:"d2",k:"d",x:"Is Score >= 50?",yes:"p",no:"u"},{id:"p",k:"p",x:"Passes <- Passes + 1",next:"u",side:true},
  {id:"u",k:"p",x:"Pupil <- Pupil + 1",next:"d3"},{id:"d3",k:"d",x:"Is Pupil > 30?",yes:"o",no:"in"},
  {id:"o",k:"io",x:"OUTPUT Passes",next:"e"},{id:"e",k:"t",x:"STOP"}]),parts:[
 {q:"Identify the type of validation check used in the flowchart.",m:1,ms:["Range check"]},
 {q:"Give one item of normal, one item of boundary and one item of erroneous test data for Score.",m:3,ms:["Normal: any value 1–99, e.g. 64","Boundary: 0 or 100 (or −1/101 as extreme boundary-invalid)","Erroneous: e.g. −15, 150, \"ten\""]},
 {q:"Explain the purpose of the variable Passes.",m:2,ms:["It is a counter","counts the number of pupils who scored 50 or more"]},
 {q:"Write pseudocode equivalent to the flowchart. Use a REPEAT … UNTIL loop for the validation.",m:6,ms:["Passes <- 0 and loop for 30 pupils (FOR Pupil <- 1 TO 30 or equivalent)","REPEAT INPUT Score","IF Score < 0 OR Score > 100 THEN OUTPUT \"Invalid, re-enter\"","UNTIL Score >= 0 AND Score <= 100","IF Score >= 50 THEN Passes <- Passes + 1","OUTPUT Passes after the loop"]}]}
];

/* 15-mark scenario questions */
const SCEN=[
{id:"s-cinema",t:["8.2","7","8.1"],title:"Cinema seat booking",stem:`<p>A small cinema has 10 rows of seats with 20 seats in each row. The two-dimensional array <b>Seats[1:10, 1:20]</b> stores TRUE if a seat has been booked and FALSE if it is free. The one-dimensional array <b>Price[1:10]</b> stores the ticket price for each row.</p>
<p>Write a program that meets the following requirements:</p><ul><li>set all seats to free at the start</li><li>allow a customer to input a row number and a seat number, validating that both are in range</li><li>if the seat is free, book it and output the price; if it is already booked, output a message and allow the customer to choose again</li><li>allow customers to keep booking until a row number of 0 is entered</li><li>output the total number of seats booked and the total money taken</li><li>output the number of free seats remaining in each row.</li></ul>
<p>You must use pseudocode or program code and add comments to explain how your code works. You do not need to declare any arrays or variables; you may assume that this has already been done. All inputs and outputs must contain suitable messages. Assume Price has already been filled with data.</p>`,
req:["R1 initialises Seats to FALSE using nested loops (iteration)","R2 inputs and validates row (1–10) and seat (1–20), with 0 to stop (input, validation, iteration)","R3 checks if a seat is free, books it, adds the price to a running total and counts bookings; message if booked (selection, totalling, counting)","R4 outputs total seats booked, total money, and free seats per row (iteration, counting, output)"],
ans:`// set every seat to free
FOR Row <- 1 TO 10
   FOR Seat <- 1 TO 20
      Seats[Row, Seat] <- FALSE
   NEXT Seat
NEXT Row
Booked <- 0
Takings <- 0
OUTPUT "Enter row number (1-10) or 0 to finish"
INPUT Row
WHILE Row <> 0 DO
   // validate row
   WHILE Row < 0 OR Row > 10 DO
      OUTPUT "Invalid row, enter 1-10 or 0 to finish"
      INPUT Row
   ENDWHILE
   IF Row <> 0
     THEN
       OUTPUT "Enter seat number (1-20)"
       INPUT Seat
       WHILE Seat < 1 OR Seat > 20 DO
          OUTPUT "Invalid seat, enter 1-20"
          INPUT Seat
       ENDWHILE
       // book the seat if it is free
       IF Seats[Row, Seat] = FALSE
         THEN
           Seats[Row, Seat] <- TRUE
           Booked <- Booked + 1
           Takings <- Takings + Price[Row]
           OUTPUT "Seat booked. Price: ", Price[Row]
         ELSE
           OUTPUT "That seat is already booked, please choose another"
       ENDIF
       OUTPUT "Enter row number (1-10) or 0 to finish"
       INPUT Row
   ENDIF
ENDWHILE
OUTPUT "Seats booked: ", Booked
OUTPUT "Total money taken: ", Takings
// count free seats in each row
FOR Row <- 1 TO 10
   Free <- 0
   FOR Seat <- 1 TO 20
      IF Seats[Row, Seat] = FALSE
        THEN
          Free <- Free + 1
      ENDIF
   NEXT Seat
   OUTPUT "Row ", Row, " free seats: ", Free
NEXT Row`},
{id:"s-results",t:["8.2","7","8.1"],title:"Class test results",stem:`<p>A teacher records the results of a test for a class of 30 students. The arrays <b>StudentName[1:30]</b> and <b>Mark[1:30]</b> are used. The names are already stored in StudentName.</p>
<p>Write a program that meets the following requirements:</p><ul><li>for each student, output the student's name and input their mark, validating that the mark is between 0 and 100 inclusive</li><li>store the mark in Mark</li><li>award a grade: 70 or more = "Distinction", 50 to 69 = "Pass", below 50 = "Fail", and output the name with the grade</li><li>count how many students achieved each grade</li><li>calculate and output the class average mark, rounded to one decimal place</li><li>output the name(s) of the student(s) with the highest mark.</li></ul>
<p>You must use pseudocode or program code and add comments to explain how your code works. You do not need to declare any arrays or variables. All inputs and outputs must contain suitable messages.</p>`,
req:["R1 inputs and validates each mark in a loop and stores it in Mark (iteration, input, validation)","R2 awards and outputs a grade and counts each grade (selection, counting, output)","R3 totals the marks and outputs the average rounded to 1 d.p. (totalling, ROUND)","R4 finds the highest mark and outputs all names with that mark (iteration, selection, output)"],
ans:`Distinction <- 0
Pass <- 0
Fail <- 0
Total <- 0
Highest <- -1
FOR Index <- 1 TO 30
   // input and validate the mark
   OUTPUT "Enter mark for ", StudentName[Index]
   INPUT Mark[Index]
   WHILE Mark[Index] < 0 OR Mark[Index] > 100 DO
      OUTPUT "Mark must be 0 to 100, re-enter"
      INPUT Mark[Index]
   ENDWHILE
   Total <- Total + Mark[Index]
   // award and count the grade
   IF Mark[Index] >= 70
     THEN
       Grade <- "Distinction"
       Distinction <- Distinction + 1
     ELSE
       IF Mark[Index] >= 50
         THEN
           Grade <- "Pass"
           Pass <- Pass + 1
         ELSE
           Grade <- "Fail"
           Fail <- Fail + 1
       ENDIF
   ENDIF
   OUTPUT StudentName[Index], " ", Grade
   // track the highest mark
   IF Mark[Index] > Highest
     THEN
       Highest <- Mark[Index]
   ENDIF
NEXT Index
OUTPUT "Distinctions: ", Distinction, " Passes: ", Pass, " Fails: ", Fail
OUTPUT "Class average: ", ROUND(Total / 30, 1)
OUTPUT "Highest mark ", Highest, " achieved by:"
FOR Index <- 1 TO 30
   IF Mark[Index] = Highest
     THEN
       OUTPUT StudentName[Index]
   ENDIF
NEXT Index`},
{id:"s-steps",t:["8.2","7","8.1"],title:"Fitness tracker",stem:`<p>A fitness app records the number of steps a user walks each day for one week. The array <b>Steps[1:7]</b> stores the steps and the array <b>DayName[1:7]</b> already stores the names of the days, "Monday" to "Sunday". The daily target is 10 000 steps.</p>
<p>Write a program that meets the following requirements:</p><ul><li>input the number of steps for each day, validating that it is a whole number from 0 to 50 000</li><li>calculate the total steps for the week and the average per day, rounded to the nearest whole number</li><li>count the days on which the target was met and output the names of those days</li><li>find and output the day with the most steps</li><li>output a message "Target met every day" if appropriate, otherwise "Target not met on every day".</li></ul>
<p>You must use pseudocode or program code and add comments to explain how your code works. You do not need to declare any arrays or variables. All inputs and outputs must contain suitable messages.</p>`,
req:["R1 inputs and validates steps for 7 days and stores them (iteration, input, validation)","R2 totals the steps and outputs total and rounded average (totalling, ROUND, output)","R3 counts and outputs days meeting the target (selection, counting)","R4 finds the best day and outputs the target-met-every-day message (selection, output)"],
ans:`Total <- 0
TargetDays <- 0
BestDay <- 1
FOR Day <- 1 TO 7
   // input and validate the steps for this day
   OUTPUT "Enter steps for ", DayName[Day]
   INPUT Steps[Day]
   WHILE Steps[Day] < 0 OR Steps[Day] > 50000 OR Steps[Day] <> ROUND(Steps[Day], 0) DO
      OUTPUT "Enter a whole number from 0 to 50000"
      INPUT Steps[Day]
   ENDWHILE
   Total <- Total + Steps[Day]
   // remember the day with the most steps
   IF Steps[Day] > Steps[BestDay]
     THEN
       BestDay <- Day
   ENDIF
NEXT Day
OUTPUT "Total steps: ", Total
OUTPUT "Average per day: ", ROUND(Total / 7, 0)
OUTPUT "Target met on:"
FOR Day <- 1 TO 7
   IF Steps[Day] >= 10000
     THEN
       TargetDays <- TargetDays + 1
       OUTPUT DayName[Day]
   ENDIF
NEXT Day
OUTPUT "Days target met: ", TargetDays
OUTPUT "Best day: ", DayName[BestDay], " with ", Steps[BestDay], " steps"
IF TargetDays = 7
  THEN
    OUTPUT "Target met every day"
  ELSE
    OUTPUT "Target not met on every day"
ENDIF`},
{id:"s-parking",t:["8.2","7","8.1"],title:"Car park charges",stem:`<p>A car park has 50 spaces. When a car arrives, its registration is stored in <b>Registration[1:50]</b> and the hour it arrived (0 to 23) in <b>ArrivalHour[1:50]</b>. An empty space has the registration "".</p>
<p>The charge is $2.50 per hour or part hour, with a maximum charge of $15.00. Cars must leave on the same day.</p>
<p>Write a program that meets the following requirements:</p><ul><li>set all spaces to empty at the start</li><li>allow the attendant to choose A (arrive), L (leave) or X (exit the program), validating the choice</li><li>for an arrival, store the registration and arrival hour in the first empty space, or output "Car park full"</li><li>for a departure, input the registration and the hour of leaving, search for the car, calculate and output the charge, and set the space to empty; output a message if the car is not found</li><li>when X is entered, output the total money taken.</li></ul>
<p>You must use pseudocode or program code and add comments to explain how your code works. You do not need to declare any arrays or variables. All inputs and outputs must contain suitable messages.</p>`,
req:["R1 initialises the arrays and repeats a validated menu A/L/X (iteration, validation)","R2 arrival: finds the first empty space or outputs full (linear search, selection)","R3 departure: searches for the registration, calculates the charge with the maximum, empties the space, handles not found (search, calculation, selection)","R4 totals and outputs the money taken (totalling, output)"],
ans:`// empty every space
FOR Space <- 1 TO 50
   Registration[Space] <- ""
   ArrivalHour[Space] <- 0
NEXT Space
Takings <- 0
REPEAT
   OUTPUT "Enter A (arrive), L (leave) or X (exit)"
   INPUT Choice
   WHILE Choice <> "A" AND Choice <> "L" AND Choice <> "X" DO
      OUTPUT "Invalid choice, enter A, L or X"
      INPUT Choice
   ENDWHILE
   IF Choice = "A"
     THEN
       // find the first empty space
       Space <- 1
       WHILE Space <= 50 AND Registration[Space] <> "" DO
          Space <- Space + 1
       ENDWHILE
       IF Space > 50
         THEN
           OUTPUT "Car park full"
         ELSE
           OUTPUT "Enter registration"
           INPUT Registration[Space]
           OUTPUT "Enter arrival hour (0-23)"
           INPUT ArrivalHour[Space]
       ENDIF
   ENDIF
   IF Choice = "L"
     THEN
       OUTPUT "Enter registration"
       INPUT Reg
       OUTPUT "Enter hour of leaving (0-23)"
       INPUT LeaveHour
       // search for the car
       Space <- 1
       WHILE Space <= 50 AND Registration[Space] <> Reg DO
          Space <- Space + 1
       ENDWHILE
       IF Space > 50
         THEN
           OUTPUT "Car not found"
         ELSE
           Hours <- LeaveHour - ArrivalHour[Space]
           IF Hours < 1
             THEN
               Hours <- 1
           ENDIF
           Charge <- Hours * 2.5
           IF Charge > 15
             THEN
               Charge <- 15
           ENDIF
           OUTPUT "Charge: $", Charge
           Takings <- Takings + Charge
           Registration[Space] <- ""
       ENDIF
   ENDIF
UNTIL Choice = "X"
OUTPUT "Total money taken: $", Takings`}
];
