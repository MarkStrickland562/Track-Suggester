$(document).ready(function() {
  $("form#response").submit(function(event) {
    event.preventDefault();

  var errorCheck = 0;

  var firstName = $("input#FirstName").val();

  if (firstName === "") {
    alert("First Name is required!");
  }

  var lastName = $("input#LastName").val();

  if (lastName === "") {
    alert("Last Name is required!");
  }

  var middleName = $("input#MiddleName").val();

  var fullName;

  if (middleName === "") {
    fullName = firstName + " " + lastName;
  } else {
    fullName = firstName + " " + middleName + " " + lastName;
  }

  var track;

  var visualImportance = $("input:radio[name=visuals]:checked").val();

  if (visualImportance === undefined) {
    alert("Please select an option for what is important to you!");
    $("#suggestion").hide();
    $("button").fadeIn();
    errorCheck = 1;
  }

  var preferredOS = $("#os").val();
  var preferredLogic = $("input:radio[name=logics]:checked").val();

  if (preferredLogic === undefined) {
    alert("Please select a preference for logic types!");
    $("#suggestion").hide();
    $("button").fadeIn();
    errorCheck = 1;
  }

  var thinkerType = $("input:radio[name=thinker]:checked").val();

  if (thinkerType === undefined) {
    alert("Please indicate what kind of thinker you are!");
    $("#suggestion").hide();
    $("button").fadeIn();
    errorCheck = 1;
  }

  var coolestTrack;
  coolestTrack = $("input:radio[name=coolest]:checked").val();

  if (coolestTrack === undefined) {
    alert("Please tell us which track you think is the coolest!");
    $("#suggestion").hide();
    $("button").fadeIn();
    errorCheck = 1;
  }

  var preferredTrack = $("#preferred").val();

  if (visualImportance === "1" || visualImportance === "2") {
    track = "CSS/Design";
  } else if (preferredOS === "Microsoft Windows") {
    track = "C#/.NET";
  }

  if (thinkerType === "1" && visualImportance === "3") {
    track = "Ruby/Rails or PHP/Drupal";
  } else if (thinkerType === "2" && visualImportance === "3") {
    track = "C#/.NET or Java/Android";
  }

  if (preferredTrack != "No Preference") {
    track = preferredTrack;
  } else if (preferredTrack === "None") {
    track = coolestTrack;
  }

  if (coolestTrack === "all") {
    coolPhrase = "but you think that they're all cool.";
  } else if (coolestTrack === preferredTrack) {
    coolPhrase = "and you also think that track is cool!"
  } else {
    coolPhrase = "but you think that " + coolestTrack + " is the coolest!";
  }

  if (errorCheck === 0) {
    $(".fullname").empty().append(fullName);

    $("#track").empty().append(track);
    $("#fname").empty().append(firstName);
    $("#coolphrase").empty().append(coolPhrase);

    $("#suggestion").show();

    $("button").fadeOut();
  }
	});
});
