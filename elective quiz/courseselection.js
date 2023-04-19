var H = 0;
var G = 0;
var C = 0;
var A = 0;
var S = 0;
var elective = "none for now";
var Qcount = 0;

function start() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("Q1").style.display = "block";
  document.getElementById("Q1num").style.display = "block";
};

function reset() {
  location.reload();
};

//QUESTION 1
function bttn11() {
  document.getElementById("b11").style.backgroundColor = "#00AEFF";
  document.getElementById("b11").style.border = "none";
  document.getElementById("Q1").style.display = "none";
  document.getElementById("Q1num").style.display = "none";
  document.getElementById("Q2").style.display = "block";
  document.getElementById("Q2num").style.display = "block";
  Qcount++;
  H++;
  C++;
  S++;
};
function bttn12() {
  document.getElementById("b12").style.backgroundColor = "#00AEFF";
  document.getElementById("b12").style.border = "none";
  document.getElementById("Q1").style.display = "none";
  document.getElementById("Q1num").style.display = "none";
  document.getElementById("Q2").style.display = "block";
  document.getElementById("Q2num").style.display = "block ";
  Qcount++;
  A++;
};

//QUESTION 2
function bttn21() {
  document.getElementById("b21").style.backgroundColor = "#00AEFF";
  document.getElementById("b21").style.border = "none";
  document.getElementById("Q2").style.display = "none";
  document.getElementById("Q2num").style.display = "none";
  document.getElementById("Q3").style.display = "block";
  document.getElementById("Q3num").style.display = "block";
  Qcount++;
  S++;
};
function bttn22() {
  document.getElementById("b22").style.backgroundColor = "#00AEFF";
  document.getElementById("b22").style.border = "none";
  document.getElementById("Q2").style.display = "none";
  document.getElementById("Q2num").style.display = "none";
  document.getElementById("Q3").style.display = "block";
  document.getElementById("Q3num").style.display = "block";
  Qcount++;
  G = G + 2;
};
function bttn23() {
  document.getElementById("b23").style.backgroundColor = "#00AEFF";
  document.getElementById("b23").style.border = "none";
  document.getElementById("Q2").style.display = "none";
  document.getElementById("Q2num").style.display = "none";
  document.getElementById("Q3").style.display = "block";
  document.getElementById("Q3num").style.display = "block";
  Qcount++;
  H++;
};

//QUESTION 3
function bttn31() {
  document.getElementById("b31").style.backgroundColor = "#00AEFF";
  document.getElementById("b31").style.border = "none";
  document.getElementById("Q3").style.display = "none";
  document.getElementById("Q3num").style.display = "none";
  document.getElementById("Q4").style.display = "block";
  document.getElementById("Q4num").style.display = "block";
  Qcount++;
  S++; C++;
};
function bttn32() {
  document.getElementById("b32").style.backgroundColor = "#00AEFF";
  document.getElementById("b32").style.border = "none";
  document.getElementById("Q3").style.display = "none";
  document.getElementById("Q3num").style.display = "none";
  document.getElementById("Q4").style.display = "block";
  document.getElementById("Q4num").style.display = "block";
  Qcount++;
  H++;
};
function bttn33() {
  document.getElementById("b33").style.backgroundColor = "#00AEFF";
  document.getElementById("b33").style.border = "none";
  document.getElementById("Q3").style.display = "none";
  document.getElementById("Q3num").style.display = "none";
  document.getElementById("Q4").style.display = "block";
  document.getElementById("Q4num").style.display = "block";
  Qcount++;
  A++;
};

//QUESTION 4
function bttn41() {
  document.getElementById("b41").style.backgroundColor = "#00AEFF";
  document.getElementById("b41").style.border = "none";
  document.getElementById("Q4").style.display = "none";
  document.getElementById("Q4num").style.display = "none";
  document.getElementById("Q5").style.display = "block";
  document.getElementById("Q5num").style.display = "block";
  Qcount++;
  H = H + 2;
};
function bttn42() {
  document.getElementById("b42").style.backgroundColor = "#00AEFF";
  document.getElementById("b42").style.border = "none";
  document.getElementById("Q4").style.display = "none";
  document.getElementById("Q4num").style.display = "none";
  document.getElementById("Q5").style.display = "block";
  document.getElementById("Q5num").style.display = "block ";
  Qcount++;
  A = A + 2; G++;
};

//QUESTION 5
function bttn51() {
  document.getElementById("b51").style.backgroundColor = "#00AEFF";
  document.getElementById("b51").style.border = "none";
  document.getElementById("Q5").style.display = "none";
  document.getElementById("Q5num").style.display = "none";
  document.getElementById("Q6").style.display = "block";
  document.getElementById("Q6num").style.display = "block";
  Qcount++;
  G++; S++;
};
function bttn52() {
  document.getElementById("b52").style.backgroundColor = "#00AEFF";
  document.getElementById("b52").style.border = "none";
  document.getElementById("Q5").style.display = "none";
  document.getElementById("Q5num").style.display = "none";
  document.getElementById("Q6").style.display = "block";
  document.getElementById("Q6num").style.display = "block ";
  Qcount++;
  A++;
};

//QUESTION 6
function bttn61() {
  document.getElementById("b61").style.backgroundColor = "#00AEFF";
  document.getElementById("b61").style.border = "none";
  document.getElementById("Q6").style.display = "none";
  document.getElementById("Q6num").style.display = "none";
  document.getElementById("Q7").style.display = "block";
  document.getElementById("Q7num").style.display = "block";
  Qcount++;
  S++;
};
function bttn62() {
  document.getElementById("b62").style.backgroundColor = "#00AEFF";
  document.getElementById("b62").style.border = "none";
  document.getElementById("Q6").style.display = "none";
  document.getElementById("Q6num").style.display = "none";
  document.getElementById("Q7").style.display = "block";
  document.getElementById("Q7num").style.display = "block ";
  Qcount++;
  C = C + 2;
};

//QUESTION 7
function bttn71() {
  document.getElementById("b71").style.backgroundColor = "#00AEFF";
  document.getElementById("b71").style.border = "none";
  document.getElementById("Q7").style.display = "none";
  document.getElementById("Q7num").style.display = "none";
  document.getElementById("Q8").style.display = "block";
  document.getElementById("Q8num").style.display = "block";
  Qcount++;
  S = S - 2;
};
function bttn72() {
  document.getElementById("b72").style.backgroundColor = "#00AEFF";
  document.getElementById("b72").style.border = "none";
  document.getElementById("Q7").style.display = "none";
  document.getElementById("Q7num").style.display = "none";
  document.getElementById("Q8").style.display = "block";
  document.getElementById("Q8num").style.display = "block ";
  Qcount++;
  A++;
};
function bttn73() {
  document.getElementById("b73").style.backgroundColor = "#00AEFF";
  document.getElementById("b73").style.border = "none";
  document.getElementById("Q7").style.display = "none";
  document.getElementById("Q7num").style.display = "none";
  document.getElementById("Q8").style.display = "block";
  document.getElementById("Q8num").style.display = "block ";
  Qcount++;
  S = S + 2;
};

//QUESTION 8
function bttn81() {
  document.getElementById("b81").style.backgroundColor = "#00AEFF";
  document.getElementById("b81").style.border = "none";
  document.getElementById("Q8").style.display = "none";
  document.getElementById("Q8num").style.display = "none";
  document.getElementById("Q9").style.display = "block";
  document.getElementById("Q9num").style.display = "block";
  Qcount++;
  G++;
};
function bttn82() {
  document.getElementById("b82").style.backgroundColor = "#00AEFF";
  document.getElementById("b82").style.border = "none";
  document.getElementById("Q8").style.display = "none";
  document.getElementById("Q8num").style.display = "none";
  document.getElementById("Q9").style.display = "block";
  document.getElementById("Q9num").style.display = "block ";
  Qcount++;
  C = C + 2;
};
function bttn83() {
  document.getElementById("b83").style.backgroundColor = "#00AEFF";
  document.getElementById("b83").style.border = "none";
  document.getElementById("Q8").style.display = "none";
  document.getElementById("Q8num").style.display = "none";
  document.getElementById("Q9").style.display = "block";
  document.getElementById("Q9num").style.display = "block ";
  Qcount++;
  A++;
};

//QUESTION 9
function bttn91() {
  document.getElementById("b91").style.backgroundColor = "#00AEFF";
  document.getElementById("b91").style.border = "none";
  document.getElementById("Q9").style.display = "none";
  document.getElementById("Q9num").style.display = "none";
  document.getElementById("Q10").style.display = "block";
  document.getElementById("Q10num").style.display = "block";
  Qcount++;
  G = G + 2; A++;
};
function bttn92() {
  document.getElementById("b92").style.backgroundColor = "#00AEFF";
  document.getElementById("b92").style.border = "none";
  document.getElementById("Q9").style.display = "none";
  document.getElementById("Q9num").style.display = "none";
  document.getElementById("Q10").style.display = "block";
  document.getElementById("Q10num").style.display = "block ";
  Qcount++;
  S++;
};

//QUESTION 10
function bttn101() {
  document.getElementById("b101").style.backgroundColor = "#00AEFF";
  document.getElementById("b101").style.border = "none";
  document.getElementById("Q10").style.display = "none";
  document.getElementById("Q10num").style.display = "none";
  document.getElementById("finale").style.display = "block";
  Qcount++;
  H = H + 2; C++;
  output();
};
function bttn102() {
  document.getElementById("b102").style.backgroundColor = "#00AEFF";
  document.getElementById("b102").style.border = "none";
  document.getElementById("Q10").style.display = "none";
  document.getElementById("Q10num").style.display = "none";
  document.getElementById("finale").style.display = "block";
  Qcount++;
  H++;
  output();
};
function bttn103() {
  document.getElementById("b103").style.backgroundColor = "#00AEFF";
  document.getElementById("b103").style.border = "none";
  document.getElementById("Q10").style.display = "none";
  document.getElementById("Q10num").style.display = "none";
  document.getElementById("finale").style.display = "block";
  Qcount++;
  A++; H++; G++;
  output();
};

function output() {
  H = H / 9;
  G = G / 8;
  C = C / 7;
  A = A / 9;
  S = S / 6

  if ( H > G && H > C && H > A && H > S) {
          if ( G > C && G > A && G > S) {
            elective = "Physical Education !";
          } else if ( C > G && C > A && C > S) {

            elective = "3D Design and Ceramics !";
          } else if ( A > C && A > G && A > S) {

            elective = "Computer Programming JAVA !";
          } else if ( S > C && S > A && S > G) {

            elective = "Woodworking !";
          } else {

            elective = "3D Design and Ceramics !";
          }

  } else if ( G > H && G > C && G > A && G > S) {

          if ( H > C && H > A && H > S) {

            elective = "AP Computer Science A !";
          } else if ( C > H && C > A && C > S) {

            elective = "Journalism !";
          } else if ( A > C && A > H && A > S) {
            elective = "STEM Research !";
          } else if ( S > C && S > A && S > H) {
            elective = "AP Computer Science Principles !";
          } else {
            elective = "STEM Research !";
          }

  } else if ( C > G && C > H && C > A && C > S) {
          if ( H > G && H > A && H > S) {
            elective = "Art !";
          } else if ( G > H && G > A && G > S) {
            elective = "Yearbook !";
          } else if ( A > G && A > H && A > S) {
            elective = "Choir !";
          } else if ( S > G && S > A && S > H) {
            elective = "Photography !";
          } else {
            elective = "Art !";
          }

  } else if ( A > G && A > C && A > H && A > S) {
          if ( H > C && H > G && H > S) {
            elective = "Orchestra !";
          } else if ( C > H && C > G && C > S) {
            elective = "International Business !";
          } else if ( G > C && G > H && G > S) {
            elective = "Law !";
          } else if ( S > C && S > G && S > H) {
            elective = "Band !";
          } else {
            elective = "Law !";
          }

  } else if ( S > G && S > C && S > A && S > H) {
          if ( H > C && H > A && H > G) {
            elective = "Engineering Design !";
          } else if ( C > H && C > A && C > G) {
            elective = "Drama !";
          } else if ( A > C && A > H && A > G) {
            elective = "Principles of Business or Marketing !";
          } else if ( G > C && G > A && G > H) {
            elective = "Leadership !";
          } else {
            elective = "Drama !";
          }

  } else {
    elective = "Unscheduled 1st Period !";
  }

  document.getElementById("elective").innerHTML = elective;
};
