/**
 * Created by Steph on 11/13/2014.
 */

exports.getMatch = function getMatch(input) {
    var prettyMatch = "";
    var i = 0;
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

    return prettyMatch = time + " " + description + " " +  level + " " + number + " " + scoreRedFinal + " " + scoreRedFoul + " " + scoreRedAuto + " " + scoreBlueFinal + " " + scoreBlueFoul + " " + scoreBlueAuto + " Blue 1: " + blue1Number + blue1dq + " Blue 2: " + blue2Number + blue2dq + " Blue 2: " + blue3Number + blue3dq + " Red 1: " + red1Number + red1dq + " Red 2: " + red2Number + red2dq + " Red 3: " + red3Number + red3dq;
};