﻿"use strict";

const BaseClient = require('../baseClient');

class WNBAv3ScoresClient extends BaseClient {
    constructor(apiKey){
        super(apiKey);
    }

    /// <summary>
    /// Get Are Games In Progress
    /// </summary>
    getAreGamesInProgressPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/AreAnyGamesInProgress');
    }

    /// <summary>
    /// Get Current Season
    /// </summary>
    getCurrentSeasonPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/CurrentSeason');
    }

    /// <summary>
    /// Get Games by Date
    /// </summary>
    /// <param name="date">The date of the game(s). Examples: <code>2019-MAY-16</code>, <code>2019-MAY-25</code>, etc.</param>
    getGamesByDatePromise(date){
        var parameters = {};
        parameters['date']=date;
        return this.GetPromise('/v3/wnba/scores/{format}/GamesByDate/{date}', parameters);
    }

    /// <summary>
    /// Get Schedule
    /// </summary>
    /// <param name="Season">Year of the season (with optional season type). Examples: <code>2019</code>, <code>2019PRE</code>, <code>2019POST</code>, <code>2019REG</code>, etc.</param>
    getSchedulePromise(Season){
        var parameters = {};
        parameters['Season']=Season;
        return this.GetPromise('/v3/wnba/scores/{format}/Games/{Season}', parameters);
    }

    /// <summary>
    /// Get Stadiums
    /// </summary>
    getStadiumsPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/Stadiums');
    }

    /// <summary>
    /// Get Teams
    /// </summary>
    getTeamsPromise(){
        return this.GetPromise('/v3/wnba/scores/{format}/Teams');
    }

}

module.exports = WNBAv3ScoresClient;

