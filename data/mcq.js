/* Topic-wise quick checks (self-check). First option is correct; options are shuffled on screen. */
const MCQ=[
/* 1.1 */
{t:"1.1",q:"What is the denary value of the binary number 10010110?",o:["150","146","154","106"],why:"128 + 16 + 4 + 2 = 150."},
{t:"1.1",q:"What is the hexadecimal value of the denary number 172?",o:["AC","CA","B2","AD"],why:"172 = 10 × 16 + 12 → A C."},
{t:"1.1",q:"What is the result of a logical right shift of one place on 01100100?",o:["00110010","11001000","00110011","01100010"],why:"Every bit moves one place right and a 0 enters on the left (100 → 50)."},
{t:"1.1",q:"Which 8-bit two's complement number represents −1?",o:["11111111","10000001","10000000","01111111"],why:"−128 + 127 = −1."},
{t:"1.1",q:"Adding two 8-bit numbers gives a result greater than 255. This is called:",o:["an overflow error","a logical shift","a parity error","a check digit error"],why:"The result needs more than 8 bits."},
{t:"1.1",q:"How many bits are represented by one hexadecimal digit?",o:["4","2","8","16"],why:"One hex digit = one nibble = 4 bits."},
/* 1.2 */
{t:"1.2",q:"Increasing the sample rate of a sound recording will:",o:["improve accuracy and increase file size","reduce file size and improve accuracy","reduce accuracy","have no effect on file size"],why:"More samples per second means more data."},
{t:"1.2",q:"Colour depth is:",o:["the number of bits used to represent the colour of each pixel","the number of pixels in an image","the brightness of an image","the size of the screen"],why:"e.g. 24-bit colour depth."},
{t:"1.2",q:"Why does Unicode use more storage than ASCII?",o:["It uses more bits per character to represent many more characters","It stores images as well as text","It is compressed","It stores fonts"],why:"Unicode can use up to 4 bytes per character."},
{t:"1.2",q:"The number of bits used to store each sound sample is the:",o:["sample resolution","sample rate","bit rate per pixel","colour depth"],why:"Sample rate = samples per second; resolution = bits per sample."},
/* 1.3 */
{t:"1.3",q:"How many bytes are in 1 KiB?",o:["1024","1000","8","1048"],why:"KiB uses powers of 2: 2¹⁰ = 1024 bytes."},
{t:"1.3",q:"Which unit is the largest?",o:["TiB","GiB","MiB","KiB"],why:"KiB < MiB < GiB < TiB."},
{t:"1.3",q:"Which compression method is most suitable for a spreadsheet?",o:["Lossless","Lossy","Either, it makes no difference","Neither, spreadsheets cannot be compressed"],why:"Any lost data would change the values."},
{t:"1.3",q:"Run-length encoding works best on data that has:",o:["many repeated consecutive values","no repeated values","only numbers","random noise"],why:"RLE stores each run as a count and a value."},
{t:"1.3",q:"An image is 100 × 100 pixels with a colour depth of 8 bits. What is its file size in bytes?",o:["10 000","80 000","1 250","800"],why:"100 × 100 × 8 bits = 80 000 bits ÷ 8 = 10 000 bytes."},
/* 2.1 */
{t:"2.1",q:"Which part of a packet contains the destination IP address?",o:["Header","Payload","Trailer","Checksum"],why:"The header holds source/destination addresses and the packet number."},
{t:"2.1",q:"Data sent one bit at a time down a single wire is:",o:["serial transmission","parallel transmission","duplex transmission","packet switching"],why:"Parallel sends several bits at once on several wires."},
{t:"2.1",q:"Which transmission allows data in both directions at the same time?",o:["Full-duplex","Half-duplex","Simplex","Serial"],why:"Half-duplex allows both directions but not at the same time."},
{t:"2.1",q:"USB is an example of:",o:["serial transmission","parallel transmission","simplex transmission","wireless transmission"],why:"Universal Serial Bus."},
{t:"2.1",q:"In packet switching, packets:",o:["may take different routes and are reordered at the destination","always take the same route","are never lost","do not need a header"],why:"Routers choose the best route for each packet."},
/* 2.2 */
{t:"2.2",q:"Using even parity, which byte has an error?",o:["10110101","11001100","01111000","10100000"],why:"10110101 has five 1s (odd)."},
{t:"2.2",q:"An echo check works by:",o:["the receiver sending the data back to the sender to compare","adding an extra bit to each byte","calculating a check digit","sending an acknowledgement only"],why:"If the returned data differs, an error has occurred."},
{t:"2.2",q:"A check digit is used to detect errors in:",o:["data entry, such as an ISBN","packet headers only","encrypted data","sound files"],why:"It is calculated from the other digits."},
{t:"2.2",q:"In ARQ, a timeout means that:",o:["the data is resent if no acknowledgement is received in time","the transmission is cancelled permanently","the parity bit is changed","the receiver deletes the data"],why:"Automatic repeat query uses acknowledgements and timeouts."},
{t:"2.2",q:"Which method cannot detect two bits changed in the same byte?",o:["A single parity bit","A checksum","An echo check","A parity block with a parity byte"],why:"Two flipped bits keep the parity the same."},
/* 2.3 */
{t:"2.3",q:"In asymmetric encryption, a message to Ana is encrypted with:",o:["Ana's public key","Ana's private key","the sender's private key","a shared symmetric key"],why:"Only Ana's private key can decrypt it."},
{t:"2.3",q:"Encrypted data that has not been decrypted is called:",o:["cipher text","plain text","source code","machine code"],why:"Plain text → encryption → cipher text."},
{t:"2.3",q:"A weakness of symmetric encryption is that:",o:["the key must be shared and could be intercepted","it cannot encrypt text","it needs two keys","it is impossible to decrypt"],why:"The same key encrypts and decrypts."},
/* 3.1 */
{t:"3.1",q:"Which register holds the address of the next instruction to be fetched?",o:["Program counter (PC)","Memory data register (MDR)","Current instruction register (CIR)","Accumulator (ACC)"],why:"The PC is incremented during the fetch stage."},
{t:"3.1",q:"Which bus carries data between the CPU and memory in both directions?",o:["Data bus","Address bus","Control bus","USB"],why:"The address bus is one-directional."},
{t:"3.1",q:"Cache memory improves performance because it:",o:["stores frequently used instructions close to the CPU","increases the clock speed","adds more cores","stores the operating system permanently"],why:"Accessing cache is faster than accessing RAM."},
{t:"3.1",q:"Which device is most likely to contain an embedded system?",o:["A washing machine","A desktop PC","A web server","A laptop"],why:"Embedded systems perform a dedicated function in a larger device."},
{t:"3.1",q:"The MAR stores:",o:["the address of the memory location being read from or written to","the data fetched from memory","the result of calculations","the current instruction"],why:"MDR holds the data; CIR holds the current instruction."},
{t:"3.1",q:"Clock speed is measured in:",o:["hertz (e.g. GHz)","bytes","bits per second","pixels"],why:"It is the number of cycles per second."},
/* 3.2 */
{t:"3.2",q:"Which is an input device?",o:["Microphone","Actuator","Speaker","Projector"],why:"An actuator is an output device that produces movement."},
{t:"3.2",q:"Which sensor would be used to detect an intruder?",o:["Infrared","pH","Humidity","Gas"],why:"Infrared detects body heat/movement."},
{t:"3.2",q:"A 3D printer creates objects by:",o:["building layers of material","removing material with a drill","printing ink on paper","engraving with a laser only"],why:"It is an additive process."},
{t:"3.2",q:"A resistive touch screen detects a touch when:",o:["two layers are pressed together and complete a circuit","the electrostatic field is disturbed","infrared beams are broken","sound waves are detected"],why:"Capacitive screens use the electrostatic field."},
/* 3.3 */
{t:"3.3",q:"Which statement about RAM is correct?",o:["It is volatile","It stores the bootstrap permanently","It is secondary storage","It is read-only"],why:"RAM loses its contents when power is off."},
{t:"3.3",q:"Which storage uses lasers to read pits and lands?",o:["Optical","Magnetic","Solid-state","RAM"],why:"e.g. CD, DVD, Blu-ray."},
{t:"3.3",q:"Virtual memory is:",o:["secondary storage used as an extension of RAM","extra cache inside the CPU","cloud storage","ROM used by the operating system"],why:"Pages are swapped between RAM and secondary storage."},
{t:"3.3",q:"Which type of storage has no moving parts?",o:["Solid-state","Magnetic hard disk","Optical","Magnetic tape"],why:"It uses flash memory."},
{t:"3.3",q:"A disadvantage of cloud storage is that:",o:["an internet connection is needed","files cannot be shared","it is always more expensive than buying hard drives","files cannot be backed up"],why:"Data is held on remote servers."},
/* 3.4 */
{t:"3.4",q:"A MAC address is assigned by the:",o:["manufacturer of the network interface card","router each time the device connects","ISP","user"],why:"It is a unique, fixed address."},
{t:"3.4",q:"An IPv4 address is:",o:["32 bits","128 bits","48 bits","64 bits"],why:"IPv6 is 128 bits; MAC is 48 bits."},
{t:"3.4",q:"Which device forwards data packets between networks using IP addresses?",o:["Router","Network interface card","Monitor","Keyboard"],why:"It also assigns IP addresses to devices on the local network."},
{t:"3.4",q:"A dynamic IP address:",o:["can change each time a device connects","never changes","is set by the manufacturer","is the same as a MAC address"],why:"Static IP addresses do not change."},
/* 4.1 */
{t:"4.1",q:"Which is an example of system software?",o:["Operating system","Spreadsheet","Web browser","Photo editor"],why:"System software manages the hardware."},
{t:"4.1",q:"Which program runs when an interrupt is received?",o:["An interrupt service routine (ISR)","A compiler","An assembler","An IDE"],why:"The current task is paused and the ISR runs."},
{t:"4.1",q:"Which is an example of a hardware interrupt?",o:["A key being pressed","Division by zero","Two programs accessing the same memory","A program requesting more memory"],why:"Software interrupts come from programs."},
{t:"4.1",q:"Firmware such as the bootloader is stored in:",o:["ROM","RAM","the cache","the CIR"],why:"It must be kept when the power is off."},
{t:"4.1",q:"Which is a function of an operating system?",o:["Managing memory","Translating high-level code","Editing photos","Calculating spreadsheet formulas"],why:"Others include file management, security and handling interrupts."},
/* 4.2 */
{t:"4.2",q:"Which translator converts the whole program before it is run and produces an executable file?",o:["Compiler","Interpreter","Assembler","Linker only"],why:"An interpreter translates line by line."},
{t:"4.2",q:"Assembly language is:",o:["a low-level language that uses mnemonics","a high-level language","machine code","a type of compiler"],why:"It is translated by an assembler."},
{t:"4.2",q:"An advantage of an interpreter during development is that:",o:["it stops at the error, making debugging easier","it produces an executable file","the program runs faster","code does not need translating"],why:"Errors are reported line by line."},
{t:"4.2",q:"Which IDE feature highlights keywords in different colours?",o:["Prettyprint","Run-time environment","Breakpoint","Auto-correction"],why:"Prettyprint/colour coding improves readability."},
/* 5.1 */
{t:"5.1",q:"The World Wide Web is:",o:["a collection of web pages and websites accessed using the internet","the global network of cables and routers","a type of browser","an email protocol"],why:"The internet is the infrastructure."},
{t:"5.1",q:"A DNS server:",o:["finds the IP address for a domain name","stores web pages","encrypts data","blocks viruses"],why:"Domain name service."},
{t:"5.1",q:"In https://www.shop.com/sale.html, the domain name is:",o:["www.shop.com","https","sale.html","/sale"],why:"https is the protocol; sale.html is the file name."},
{t:"5.1",q:"A persistent cookie:",o:["is stored until it expires or is deleted","is deleted when the browser closes","is a virus","stores the web page"],why:"e.g. remembering login details."},
{t:"5.1",q:"What is the role of a web browser?",o:["To render HTML and display web pages","To store websites","To assign IP addresses","To route packets"],why:"Browsers also store bookmarks, history and cookies."},
/* 5.2 */
{t:"5.2",q:"Blockchain is:",o:["a decentralised digital ledger of transactions","a type of encryption key","a central bank database","a firewall"],why:"Each block is linked to the previous one."},
{t:"5.2",q:"Digital currency:",o:["exists only electronically","is always printed","can only be used in banks","cannot be transferred"],why:"It has no physical form."},
/* 5.3 */
{t:"5.3",q:"An email that tricks a user into clicking a link to a fake website is:",o:["phishing","pharming","DDoS","brute force"],why:"Pharming uses malicious code to redirect the user."},
{t:"5.3",q:"Trying every possible password combination is a:",o:["brute-force attack","phishing attack","denial of service attack","social engineering attack"],why:"Long, complex passwords make this harder."},
{t:"5.3",q:"Software that secretly records key presses is:",o:["spyware","a firewall","a proxy server","anti-malware"],why:"It is a type of malware."},
{t:"5.3",q:"Which helps prevent unauthorised access by checking incoming and outgoing traffic against rules?",o:["Firewall","Cookie","Router table","Compiler"],why:"It can block suspicious traffic."},
{t:"5.3",q:"Manipulating people into revealing confidential information is:",o:["social engineering","hacking","pharming","data interception"],why:"e.g. pretending to be IT support."},
{t:"5.3",q:"A ransomware attack:",o:["encrypts a user's files and demands payment","overloads a server with requests","redirects to a fake website","records keystrokes"],why:"It is a type of malware."},
/* 6.1–6.3 */
{t:"6.1",q:"In an automated system, sensor data is usually converted by an:",o:["analogue-to-digital converter (ADC)","actuator","DNS server","interpreter"],why:"Microprocessors process digital data."},
{t:"6.1",q:"Which component carries out a physical action in an automated system?",o:["Actuator","Sensor","Microprocessor","ADC"],why:"e.g. motors, valves, heaters."},
{t:"6.2",q:"Which is a characteristic of a robot?",o:["It is programmable","It must look like a human","It cannot have sensors","It always uses AI"],why:"Robots have a mechanical structure, electrical components and are programmable."},
{t:"6.2",q:"A disadvantage of using robots in manufacturing is:",o:["high initial cost","they cannot work at night","they are less accurate than humans","they need breaks"],why:"They are expensive to buy, set up and maintain."},
{t:"6.3",q:"Which component of an expert system applies rules to facts to reach a conclusion?",o:["Inference engine","Knowledge base","User interface","Rule base"],why:"The rule base stores the rules; the inference engine uses them."},
{t:"6.3",q:"Machine learning means a program:",o:["can adapt its own processes as it learns from data","must be reprogrammed for every change","has no data","only follows fixed rules"],why:"It improves with experience."},
/* 7 */
{t:"7",q:"Which stage of the program development life cycle involves writing the program code?",o:["Coding","Analysis","Design","Testing"],why:"Analysis → design → coding → testing."},
{t:"7",q:"A range check for ages 11–18 rejects 19. The value 18 is:",o:["extreme data","abnormal data","boundary data that should be rejected","erroneous data"],why:"Extreme data is at the limits of the valid range."},
{t:"7",q:"Breaking a problem into smaller sub-problems is called:",o:["decomposition","abstraction","validation","verification"],why:"Abstraction removes unnecessary detail."},
{t:"7",q:"Which check confirms that data has been entered correctly by asking the user to type it twice?",o:["Double entry verification","Range check","Presence check","Check digit"],why:"Verification checks accuracy of entry."},
{t:"7",q:"A linear search on 100 items will check at most:",o:["100 items","50 items","7 items","1 item"],why:"In the worst case every item is checked."},
{t:"7",q:"In a flowchart, a decision is shown as a:",o:["diamond","rectangle","parallelogram","rounded rectangle"],why:"Parallelograms are input/output; rectangles are processes."},
{t:"7",q:"Which test data is invalid and should be rejected?",o:["Abnormal","Normal","Extreme","Boundary (valid side)"],why:"Abnormal data is outside the rules."},
/* 8.1 */
{t:"8.1",q:"What is the value of 23 MOD 4?",o:["3","5","5.75","4"],why:"23 = 5 × 4 + 3; DIV gives 5."},
{t:"8.1",q:"Which data type is most suitable for a price such as 12.99?",o:["REAL","INTEGER","CHAR","BOOLEAN"],why:"It has a fractional part."},
{t:"8.1",q:"Which loop always runs at least once?",o:["Post-condition (REPEAT … UNTIL)","Pre-condition (WHILE … DO)","Count-controlled (FOR)","None"],why:"The condition is tested at the end."},
{t:"8.1",q:"A value that cannot change while the program is running is a:",o:["constant","variable","parameter","array"],why:"Declared with CONSTANT."},
{t:"8.1",q:"SUBSTRING(\"COMPUTER\", 4, 3) returns:",o:["\"PUT\"","\"MPU\"","\"PUTE\"","\"UTE\""],why:"Starting at position 4 (P), take 3 characters."},
{t:"8.1",q:"A subroutine that returns a value is a:",o:["function","procedure","loop","constant"],why:"Procedures do not return a value."},
{t:"8.1",q:"What is output by: X <- 5; IF X > 3 AND X < 5 THEN OUTPUT \"A\" ELSE OUTPUT \"B\" ENDIF?",o:["B","A","AB","Nothing"],why:"5 < 5 is FALSE, so the condition is FALSE."},
/* 8.2 */
{t:"8.2",q:"The array Marks[1:30] has how many elements?",o:["30","29","31","1"],why:"Indices 1 to 30."},
{t:"8.2",q:"In Grid[1:5, 1:3], how many elements are there?",o:["15","8","5","3"],why:"5 rows × 3 columns."},
{t:"8.2",q:"Which structure is most efficient for processing every element of an array?",o:["A count-controlled loop","A CASE statement","A single IF statement","A constant"],why:"FOR Index <- 1 TO n."},
/* 8.3 */
{t:"8.3",q:"Which statement opens a file so that data can be added without deleting existing data?",o:["OPENFILE \"Data.txt\" FOR APPEND","OPENFILE \"Data.txt\" FOR WRITE","OPENFILE \"Data.txt\" FOR READ","CLOSEFILE \"Data.txt\""],why:"WRITE overwrites existing data."},
{t:"8.3",q:"Why should a file be closed after use?",o:["To make sure data is saved and the file is released","To delete the file","To encrypt it","To compress it"],why:"Other programs can then use it safely."},
/* 9 */
{t:"9",q:"A field that uniquely identifies each record is the:",o:["primary key","foreign field","validation rule","query"],why:"e.g. StudentID."},
{t:"9",q:"In a database table, a single row is a:",o:["record","field","key","query"],why:"Columns are fields."},
{t:"9",q:"Which SQL keyword sorts results?",o:["ORDER BY","WHERE","SELECT","FROM"],why:"Use ASC or DESC."},
{t:"9",q:"Which SQL function adds the values in a field?",o:["SUM","COUNT","TOTAL","ADD"],why:"COUNT counts records."},
{t:"9",q:"Which data type is most suitable for a field storing TRUE or FALSE?",o:["Boolean","Text","Real","Date/time"],why:"Only two possible values."},
/* 10 */
{t:"10",q:"Which gate outputs 1 only when both inputs are 1?",o:["AND","OR","NAND","XOR"],why:"NAND is the opposite of AND."},
{t:"10",q:"Which gate outputs 0 only when both inputs are 1?",o:["NAND","NOR","AND","XOR"],why:"NAND = NOT AND."},
{t:"10",q:"Which gate outputs 1 when its two inputs are different?",o:["XOR","OR","AND","NOR"],why:"Exclusive OR."},
{t:"10",q:"How many rows (excluding the header) does a truth table with three inputs need?",o:["8","6","3","9"],why:"2³ = 8 combinations."},
{t:"10",q:"What is the output of NOT (1 OR 0)?",o:["0","1","Both","Undefined"],why:"1 OR 0 = 1; NOT 1 = 0."},
{t:"10",q:"What is the output of (1 NOR 0)?",o:["0","1","Both","Undefined"],why:"NOR outputs 1 only when both inputs are 0."}
];
