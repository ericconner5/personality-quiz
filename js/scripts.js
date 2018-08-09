$(function () {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();    var answer3 = $("input:radio[name=question3]:checked").val();    var answer4 = $("input:radio[name=question4]:checked").val();    var answer5 = $("input:radio[name=question5]:checked").val();

    var briggs = 0;
    var shelly = 0;
    var dale = 0;
    var josie = 0;
    var log = 0;

    if (answer1 === "briggs") {
      briggs++;
    } else if (answer1 === "shelly") {
      shelly++;
    } else if (answer1 === "dale") {
      dale++;
    } else if (answer1 === "josie") {
      josie++;
    } else {
      log++;
    }

    if (answer2 === "briggs") {
      briggs++;
    } else if (answer2 === "shelly") {
      shelly++;
    } else if (answer2 === "dale") {
      dale++;
    } else if (answer2 === "josie") {
      josie++;
    } else {
      log++;
    }

    if (answer3 === "briggs") {
      briggs++;
    } else if (answer3 === "shelly") {
      shelly++;
    } else if (answer3 === "dale") {
      dale++;
    } else if (answer3 === "josie") {
      josie++;
    } else {
      log++;
    }

    if (answer4 === "briggs") {
      briggs++;
    } else if (answer4 === "shelly") {
      shelly++;
    } else if (answer4 === "dale") {
      dale++;
    } else if (answer4 === "josie") {
      josie++;
    } else {
      log++;
    }

    if (answer5 === "briggs") {
      briggs++;
    } else if (answer5 === "shelly") {
      shelly++;
    } else if (answer5 === "dale") {
      dale++;
    } else if (answer5 === "josie") {
      josie++;
    } else {
      log++;
    }

    if (briggs >= shelly && briggs >= josie && briggs >= dale && briggs >= log) {
      $(".briggs").show();
      $(".shelly").hide();
      $(".dale").hide();
      $(".josie").hide();
      $(".log").hide();
    } else if (dale >= briggs && dale >= shelly && dale >= josie && dale >= log){
      $(".shelly").hide();
      $(".briggs").hide();
      $(".josie").hide();
      $(".log").hide();
      $(".dale").show();
    } else if (shelly >= dale && shelly >= briggs && shelly >= josie && shelly >= log) {
      $(".briggs").hide();
      $(".shelly").show();
      $(".dale").hide();
      $(".josie").hide();
      $(".log").hide();
    } else if (josie >= briggs && josie >= dale && josie >= shelly && josie >= log) {
      $(".briggs").hide();
      $(".shelly").hide();
      $(".dale").hide();
      $(".josie").show();
      $(".log").hide();
    } else {
      $(".log").show();
      $(".shelly").hide();
      $(".dale").hide();
      $(".josie").hide();
      $(".briggs").hide();
    }
window.scrollTo(0,document.body.scrollHeight);
  });
});
