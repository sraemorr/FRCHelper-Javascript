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