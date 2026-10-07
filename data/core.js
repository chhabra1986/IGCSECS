/* Core data for the Cambridge IGCSE Computer Science (0478) paper generator, syllabus 2026–2028. */
const NAME={"1.1":"Number systems","1.2":"Text, sound and images","1.3":"Data storage and compression","2.1":"Types and methods of data transmission","2.2":"Methods of error detection","2.3":"Encryption","3.1":"Computer architecture","3.2":"Input and output devices","3.3":"Data storage","3.4":"Network hardware","4.1":"Types of software and interrupts","4.2":"Programming languages, translators and IDEs","5.1":"The internet and the World Wide Web","5.2":"Digital currency","5.3":"Cyber security","6.1":"Automated systems","6.2":"Robotics","6.3":"Artificial intelligence","7":"Algorithm design and problem-solving","8.1":"Programming concepts","8.2":"Arrays","8.3":"File handling","9":"Databases","10":"Boolean logic"};
const TORDER=["1.1","1.2","1.3","2.1","2.2","2.3","3.1","3.2","3.3","3.4","4.1","4.2","5.1","5.2","5.3","6.1","6.2","6.3","7","8.1","8.2","8.3","9","10"];
const BANDS={
 scen:{m:15,title:"Scenario question levels — AO2 max 9 + AO3 max 6",rows:[
  ["AO2 0","No creditable response."],
  ["AO2 1–3","At least one programming technique used (any selection, iteration, counting, totalling, input or output). Some data stored but not appropriately (any variables or arrays)."],
  ["AO2 4–6","Some programming techniques used are appropriate to the problem; more than one technique applied to the scenario. Some data structures chosen are appropriate and store some of the data required; more than one data structure used."],
  ["AO2 7–9","The range of programming techniques is appropriate; all criteria stated for the scenario are covered. The data structures chosen are appropriate and store all the data required."],
  ["AO3 0","No creditable response."],
  ["AO3 1–2","Program seen without relevant comments; some identifiers and data structure names appropriate; solution illogical and inaccurate in many places; attempts at least one requirement."],
  ["AO3 3–4","Some relevant comments; most identifiers meaningful; parts may be illogical or inaccurate; meets most of the requirements (ignore minor syntax errors)."],
  ["AO3 5–6","Fully commented; meaningful identifiers and data structure names throughout; logical order; accurate; performs all the tasks given in the scenario (ignore minor syntax errors)."]]}
};
