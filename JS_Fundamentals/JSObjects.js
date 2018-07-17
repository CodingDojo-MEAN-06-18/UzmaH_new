let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
// print all the student names and their cohorts
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June
// 

console.log("\n","\n");

for (var person in students){
    console.log("Name: " + students[person]['name'] + ",  Cohort: " + students[person].cohort);

}
console.log("\n","\n");
//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

// Your console should like the following
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9


for (person in users){
    console.log(person.toUpperCase()); //prints the keys of the object users
    for (details in users[person]){
        //console.log(details);index
        fname_upper = users[person][details].first_name.toUpperCase(); //upper case first name
        fcount = fname_upper.length;                                   // length of first name
        lname_upper = users[person][details].last_name.toUpperCase();//upper case last name
        lcount = lname_upper.length;                                 // length of last name
        count = fcount + lcount;                                     //Total length of first and last name
        prefix = parseInt(details) + 1;                         
        console.log( prefix + " - " + lname_upper + ",  " + fname_upper + " - " , count )
    }
}