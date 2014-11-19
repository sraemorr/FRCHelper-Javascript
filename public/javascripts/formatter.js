/**
 * Created by Steph on 11/4/2014.
 */

exports.formatRankings = function formatRankings(input) {
    var prettyRank = "Rankings: ";
    var i = 0; //Rankings counter
    var Rank = input.Rankings[i].Rank;
    var TeamId = input.Rankings[i].TeamId;
    var QualScore = input.Rankings[i].QualScore;
    var HybridPoints = input.Rankings[i].HybridPoints;
    var AssistPoints = input.Rankings[i].AssistPoints;
    var TrussAndCatchPoints = input.Rankings[i].TrussAndCatchPoints;
    var TeleopPoints = input.Rankings[i].TeleopPoints;
    var Wins = input.Rankings[i].Wins;
    var Losses = input.Rankings[i].Losses;
    var Ties = input.Rankings[i].Ties;
    var DQ = input.Rankings[i].DQ;
    var MatchesPlayed = input.Rankings[i].MatchesPlayed;

    function updateRankings(currentRank){
        Rank = input.Rankings[currentRank].Rank;
        TeamId = input.Rankings[currentRank].TeamId;
        QualScore = input.Rankings[currentRank].QualScore;
        HybridPoints = input.Rankings[currentRank].HybridPoints;
        AssistPoints = input.Rankings[currentRank].AssistPoints;
        TrussAndCatchPoints = input.Rankings[currentRank].TrussAndCatchPoints;
        TeleopPoints = input.Rankings[currentRank].TeleopPoints;
        Wins = input.Rankings[currentRank].Wins;
        Losses = input.Rankings[currentRank].Losses;
        Ties = input.Rankings[currentRank].Ties;
        DQ = input.Rankings[currentRank].DQ;
        MatchesPlayed = input.Rankings[currentRank].MatchesPlayed;
    }

    for (var j=1; j < input.Rankings.length; j++) {
        prettyRank = prettyRank + Rank + ". " + TeamId + " (" + Wins + "-" + Losses + "-" + Ties + " , " + AssistPoints + " Assists) ";
        updateRankings(j);
    }
    return prettyRank;
};

exports.getMatch = function getMatch(input, num) {
    var prettyMatch = "";
    var i = Number(num)-1;
    var time = input.Matches[i].actualStartTime;
    var description = input.Matches[i].description;
    var level = input.Matches[i].level;
    var number = input.Matches[i].number;
    var scoreRedFinal = input.Matches[i].scoreRedFinal;
    var scoreRedFoul = input.Matches[i].scoreRedFoul;
    var scoreRedAuto = input.Matches[i].scoreRedAuto;
    var scoreBlueFinal = input.Matches[i].scoreBlueFinal;
    var scoreBlueFoul = input.Matches[i].scoreBlueFoul;
    var scoreBlueAuto = input.Matches[i].scoreBlueAuto;
    var blue1Number = input.Matches[i].Teams[0].number;
    var blue2Number = input.Matches[i].Teams[1].number;
    var blue3Number = input.Matches[i].Teams[2].number;
    var red1Number = input.Matches[i].Teams[0].number;
    var red2Number = input.Matches[i].Teams[1].number;
    var red3Number = input.Matches[i].Teams[2].number;
    var blue1dq = input.Matches[i].Teams[0].dq;
    var blue2dq = input.Matches[i].Teams[0].dq;
    var blue3dq = input.Matches[i].Teams[0].dq;
    var red1dq = input.Matches[i].Teams[0].dq;
    var red2dq = input.Matches[i].Teams[0].dq;
    var red3dq = input.Matches[i].Teams[0].dq;

    exports.time = time;

    return prettyMatch = time + " " + description + " " +  level + " " + number + " " + scoreRedFinal + " " + scoreRedFoul + " " + scoreRedAuto + " " + scoreBlueFinal + " " + scoreBlueFoul + " " + scoreBlueAuto + " Blue 1: " + blue1Number + " " + blue1dq + " Blue 2: " + blue2Number + " " + blue2dq + " Blue 2: " + blue3Number + " " + blue3dq + " Red 1: " + red1Number + " " + red1dq + " Red 2: " + red2Number + " " + red2dq + " Red 3: " + red3Number + " " + red3dq;
};