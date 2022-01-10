$(".hide").hide();
$("body").css("background", "url('https://t4.ftcdn.net/jpg/02/00/68/69/360_F_200686968_KS9NVTJgvjMQs2FniVHyIJaAIcg5p7D0.jpg')");
$("body").css("background-size", "cover");
let no = 0;
let yes = 0;
$(".s1").click(function() {
    $(".show").fadeOut(750);

    $(".B1").fadeIn(750);
    $(".s1").hide(750);
    $("h2").text('So the question is,"Is chicago a civilized society?" this is what you will decide at the end');
});
$(".B1").click(function() {
    $(".B2").fadeIn(750);
    $(".B1").fadeOut(750);
    $("h2").text('So what are the charactreristics of a civilization? They are: \nAdvanced Cities\n Religion \nSocial Structure\n Writing\n and Art/Arcitecture\n Government');
});
$(".B2").click(function() {
    $(".B3").fadeIn(750);
    $(".B2").fadeOut(750);
    $("h2").text('Advanced Cities: Large population that rely on Farming and Trade');
});
$(".B3").click(function() {
    $(".B4").fadeIn(750);
    $(".B4a").fadeIn(750);
    $(".B3").fadeOut(750);
    $("h2").text('Decide if this picture is an example of Advanced cities');
    $(".advCity").fadeIn(750);

});
$(".B4").click(function() {
    no += 1;
    $(".B4").fadeOut(750);
    $(".B4a").fadeOut(750);
    $(".B5").fadeIn(750);
    $("h3").text("The title of this artifact is Chicago Parades. This piece highlights Advanced Cities through vision. Advanced cities are defined as a large population that rely on farming and trade. In this artifact we can see that there is a very large population spectaring the parade. We can also see people trading their time for people to see and enjoy the parade.\nThis artifact connects to me because for many years I have gone downtown to see the parade with my family. This artifact also connects to Chicago because it is a Chicago tradition.");
    $("h2").text("Writing Prompt");
    $(".advCity").fadeOut(750);

});
$(".B4a").click(function() {
    yes += 1;
    $(".B4").fadeOut(750);
    $(".B4a").fadeOut(750);
    $(".B5").fadeIn(750);
    $("h3").text("The title of this artifact is Chicago Parades. This piece highlights Advanced Cities through vision. Advanced cities are defined as a large population that rely on farming and trade. In this artifact we can see that there is a very large population spectaring the parade. We can also see people trading their time for people to see and enjoy the parade.\nThis artifact connects to me because for many years I have gone downtown to see the parade with my family. This artifact also connects to Chicago because it is a Chicago tradition.");
    $("h2").text("Writing Prompt");
    $(".advCity").fadeOut(750);

});
$(".B5").click(function() {
    $(".B6").fadeIn(750);
    $(".B5").fadeOut(750);
    $("h2").text("Religion");
    $("h3").text("Religion explains the forces of nature and their roles in the world, why thing are the way they are, and provide values for living. Early civilizations religions were connected to the rulers who claimed that their power was based on divine approval or they themselves were divine.");
});

$(".B6").click(function() {
    $(".B7").fadeIn(750);
    $(".B7a").fadeIn(750);
    $(".B6").fadeOut(750);
    $(".religion").fadeIn(750);
    $("h2").text("Decide if this picture is an example of Religion");
    $("h3").text('');
});
$(".B7").click(function() {
    no += 1;
    $(".B7").fadeOut(750);
    $(".B7a").fadeOut(750);
    $(".B8").fadeIn(750);
    $("h2").text("Writing Prompt");
    $("h3").text("The title of this artifact is Ritual This piece highlights Religion through vision. Religion is the explanation of natural forces and their roles in the world. In this artifact we can see that the people in the image are taking part in a ritual. In the image we see fire which can be interpreted as the force of purification.\nThis image connects with me because religion is a very important thing to my family. I also chose this image because fire and water are some of the many symbols my religion has. This image connects to Chicago because chicago has a variety of religions.");
    $(".religion").fadeOut(750);

});
$(".B7a").click(function() {
    yes += 1;
    $(".B7").fadeOut(750);
    $(".B7a").fadeOut(750);
    $(".B8").fadeIn(750);
    $("h2").text("Writing Prompt");
        $("h3").text("The title of this artifact is Ritual This piece highlights Religion through vision. Religion is the explanation of natural forces and their roles in the world. In this artifact we can see that the people in the image are taking part in a ritual. In the image we see fire which can be interpreted as the force of purification.\nThis image connects with me because religion is a very important thing to my family. I also chose this image because fire and water are some of the many symbols my religion has. This image connects to Chicago because chicago has a variety of religions.");

    $(".religion").fadeOut(750);

});
$(".B8").click(function() {
    $(".B9").fadeIn(750);
    $(".B8").fadeOut(750);
    $("h2").text("Writing");
    $("h3").text("Writing allows systems for trade, government, and thought to develop it also allows civilizations to record their own history. Written communication is another element that all civilizations share.");
});
$(".B9").click(function() {
    $(".B10").fadeIn(750);
    $(".B9").fadeOut(750);
    $("h2").text("Art/Architecture");
    $("h3").text("Architecture was used to build temples for worship or sacrifice and palaces and tombs for kings. Painters and artists portrayed stories of nature and depicted gods and rulers.");
});
$(".B10").click(function() {
    $(".B11").fadeIn(750);
    $(".B11a").fadeIn(750);
    $(".writingArt").fadeIn();
    $(".B10").fadeOut(750);
    $("h2").text("");
    $("h3").text("Is this an example of writing and art/architecture");
});
$(".B11").click(function() {
    no += 1;
    $(".B11").fadeOut(750);
    $(".B11a").fadeOut(750);
    $(".B12").fadeIn(750);
    $("h2").text("Writing Prompt");
    $("h3").text("This artifact is titled Powerful Voices. This artifact highlights Writing and Art through Vision. Writing is a form of keeping record of trade, government and development but also a form of Communication like ort. Art is a way to communicate stories of natural occurrences, gods and rulers. In this image we see writing and communicating things happening right now around the world.\nThis artifact connects to me because it says. “The Voice is power” in spanish. I highly agree with this.This artifact connects to Chicago because It is located in the Pilsen neighborhood in Chicago.");
    $(".writingArt").fadeOut(750);

});
$(".B11a").click(function() {
    yes += 1;
    $(".B11").fadeOut(750);
    $(".B11a").fadeOut(750);
    $(".B12").fadeIn(750);
    $("h2").text("Writing Prompt");
       $("h3").text("This artifact is titled Powerful Voices. This artifact highlights Writing and Art through Vision. Writing is a form of keeping record of trade, government and development but also a form of Communication like ort. Art is a way to communicate stories of natural occurrences, gods and rulers. In this image we see writing and communicating things happening right now around the world.\nThis artifact connects to me because it says. “The Voice is power” in spanish. I highly agree with this.This artifact connects to Chicago because It is located in the Pilsen neighborhood in Chicago.");

    $(".writingArt").fadeOut(750);
});
$(".B12").click(function() {
    $(".B13").fadeIn(750);
    $(".B12").fadeOut(750);
    $("h2").text("Social Structure");
    $("h3").text("Social structure gives civilization a framework for peoples' roles in the society. Rulers and an upper class of priests, government officials, and warriors dominated the society. Below them a large group of free people - farmers, artisans, and craftspeople - grew food and made necessary items for the society. The upper classes wanted luxury items which encouraged artisans, and they bought food from the farmers. The population growing created trade of goods for raw materials.");
});
$(".B13").click(function() {
    $(".B14").fadeIn(750);
    $(".B14a").fadeIn(750);
    $(".social").fadeIn();
    $(".B13").fadeOut(750);
    $("h2").text("");
    $("h3").text("Is this an example of writing and Social Structure");
});
$(".B14").click(function() {
    no += 1;
    $(".B14").fadeOut(750);
    $(".B14a").fadeOut(750);
    $(".g").fadeIn(750);
    $("h2").text("Writing Prompt");
    $("h3").text("This Artifact is titled Map. This artifact highlights Social Structures through Vision. In this photo we can see how the police areas are divided throughout the city. \nThis map connects to me because I know people and have friends that are police or work for the police. This artifact connects to Chicago because it is referring to the Chicago police.");
    $(".social").fadeOut(750);

});
$(".B14a").click(function() {
    yes += 1;
    $(".B14").fadeOut(750);
    $(".B14a").fadeOut(750);
    $(".g").fadeIn(750);
    $("h2").text("Writing Prompt");
        $("h3").text("This Artifact is titled Map. This artifact highlights Social Structures through Vision. In this photo we can see how the police areas are divided throughout the city. \nThis map connects to me because I know people and have friends that are police or work for the police. This artifact connects to Chicago because it is referring to the Chicago police.");
    $(".social").fadeOut(750);
});
$(".g").click(function() {

    $(".g").fadeOut(750);
    $(".g0").fadeIn(750);
    $("h2").text("Government");
    $("h3").text("Government organizes and regulates human activity. Government provides smooth interaction between groups and people. Early governments were led by monarchs who organized armies to defend the people and they made laws to regulate their subjects lives.");
});
$(".g0").click(function() {

    $(".g0").fadeOut(750);
    $(".gov").fadeIn(750);
    $(".B15").fadeIn(750);
    $("h2").text("");
    $("h3").text("Is This an example of Government");
});
$(".Yes").click(function() {
    yes += 1;
    $(".gov").fadeOut(750);
    $(".B14").fadeOut(750);
    $(".B14a").fadeOut(750);
    $(".B16").fadeIn();
    $(".B15").fadeOut(750);
    $("h2").text("Results");
    if (no < yes) {
        $("h3").text("Do to what you chose Chicago is a Civilization");
        $(".no").text("No:" + no);
        $(".yes").text("Yes:" + yes);
    } else if (no > yes) {
        $("h3").text("Do to what you chose Chicago is not a Civilization");
        $(".no").text("No:" + no);
        $(".yes").text("Yes:" + yes);
    } else if (no === yes) {
        $("h3").text("It appears that we are not sure yet");
        $(".no").text("No:" + no);
        $(".yes").text("Yes:" + yes);
    }
});
$(".No").click(function() {
    no += 1;
    $(".gov").fadeOut(750);
    $(".B14").fadeOut(750);
    $(".B14a").fadeOut(750);
    $(".B16").fadeIn();
    $(".B15").fadeOut(750);
    $("h2").text("Results");
    if (no < yes) {
        $("h3").text("Do to what you chose Chicago is a Civilization");
        $(".no").text("No:" + no);
        $(".yes").text("Yes:" + yes);
    } else if (no > yes) {
        $("h3").text("Do to what you chose Chicago is not a Civilization");
        $(".no").text("No:" + no);
        $(".yes").text("Yes:" + yes);
    } else if (no === yes) {
        $("h3").text("It appears that we are not sure yet");
        $(".no").text("No:" + no);
        $(".yes").text("Yes:" + yes);
    }
});
$(".B16").click(function() {

    $(".B16").fadeOut(750);
    $(".B17").fadeIn(750);
    $("h2").text("Writing Prompt");
    $("h3").text("The title of this artifact is Let's Play.\nThis artifact highlights all six characteristics through Vision/ touch In this artifacts we can see all the characteristics of a civilization.\nThis artifact Connects to me because it is a game that I coded. Coding is one of the things that I enjoy dang. This artifact connects to Chicago because Chicago is the third largest producer of Software development degrees.");
    $("h4").text("");

});
$(".B17").click(function() {
    yes = 0;
    no = yes;
    $(".B17").fadeOut(750);
    $(".show").fadeIn(750);
    $("h2").text("Welcome to Chicago!!! Home of the Deep dish pizza and Michael Jordan.");
    $("h3").text("");
    $("h4").text("");

});