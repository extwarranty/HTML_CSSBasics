<script>
var message = '';
var student;
var studentName = prompt("Please type a student name or type 'new' to add a new student:");
//var userpassword = prompt('What is the password?');
var password = "password";
var report = '';

function newStudent (name, track, points, achievements) {
  let name = prompt("What is the new student's name?");
  let track = prompt("What is the new student's track?");
  let points = prompt("What is the new student's total points?");
  let achievements = prompt("What is the student's achievement level?");

  name.push(students.name);
}


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
  }

function getStudentReport( student) {
        var report = '<h2>Student: ' + student.name + '</h2>';
        report += '<p>Track: ' + student.track + '</p>';
        report += '<p>Points: ' + student.points + '</p>';
        report += '<p>Achievements: ' + student.achievements + '</p>';
        print (report);
      }
      //} else {
      //  alert('That is not a valid student name.');

function passGate (userpassword, password) {
//  while (userpassword != password) {
    if ( userpassword === password ) {
    getStudentReport();
    } else {
    document.write('That is not the correct password');
    }
  }
//}
//if (studentName === "new") {

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  if (student.name === studentName) {
    message = getStudentReport(student);
    print(report);
  } else if (studentName === "new") {
    newStudent();
  }
}

//while (studentName === null || studentName.toLowerCase() === 'quit') {
  //break;
//  } else {
//    passGate();
//  }
</script>
