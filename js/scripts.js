$(document).ready(function() {
  $("form#response").submit(function(event) {
    event.preventDefault();

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
  var preferredOS = $("#os").val();
  var preferredLogic = $("input:radio[name=logics]:checked").val();
  var thinkerType = $("input:radio[name=thinker]:checked").val();
  var coolestTrack = $("input:radio[name=coolest]:checked").val();
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

  if (preferredTrack != "None") {
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

  $(".fullname").empty().append(fullName);

  $("#track").empty().append(track);
  $("#fname").empty().append(firstName);
  $("#coolphrase").empty().append(coolPhrase);

  $("#suggestion").show();

  $("button").fadeOut();
	});
});
