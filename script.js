function predict() {
  let marks = document.getElementById("marks").value;
  let att = document.getElementById("attendance").value;
  let result = "";

  if(marks < 40 || att < 50) result="⚠️ High Risk Student";
  else if(marks < 70) result="🟡 Medium Risk Student";
  else result="✅ Safe Student";

  document.getElementById("result").innerHTML = result;
}
