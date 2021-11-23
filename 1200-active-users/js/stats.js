var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "17021",
        "ok": "16897",
        "ko": "124"
    },
    "minResponseTime": {
        "total": "678",
        "ok": "678",
        "ko": "10177"
    },
    "maxResponseTime": {
        "total": "25131",
        "ok": "25131",
        "ko": "10702"
    },
    "meanResponseTime": {
        "total": "8053",
        "ok": "8037",
        "ko": "10204"
    },
    "standardDeviation": {
        "total": "3005",
        "ok": "3010",
        "ko": "50"
    },
    "percentiles1": {
        "total": "7705",
        "ok": "7686",
        "ko": "10195"
    },
    "percentiles2": {
        "total": "9566",
        "ok": "9508",
        "ko": "10214"
    },
    "percentiles3": {
        "total": "13884",
        "ok": "13908",
        "ko": "10228"
    },
    "percentiles4": {
        "total": "17295",
        "ok": "17311",
        "ko": "10343"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16893,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 124,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "141.842",
        "ok": "140.808",
        "ko": "1.033"
    }
},
contents: {
"req_api-for-cards-d1eb1": {
        type: "REQUEST",
        name: "Api for cards",
path: "Api for cards",
pathFormatted: "req_api-for-cards-d1eb1",
stats: {
    "name": "Api for cards",
    "numberOfRequests": {
        "total": "8942",
        "ok": "8870",
        "ko": "72"
    },
    "minResponseTime": {
        "total": "678",
        "ok": "678",
        "ko": "10177"
    },
    "maxResponseTime": {
        "total": "20090",
        "ok": "20090",
        "ko": "10375"
    },
    "meanResponseTime": {
        "total": "7312",
        "ok": "7289",
        "ko": "10202"
    },
    "standardDeviation": {
        "total": "2908",
        "ok": "2909",
        "ko": "26"
    },
    "percentiles1": {
        "total": "7117",
        "ok": "7078",
        "ko": "10198"
    },
    "percentiles2": {
        "total": "8717",
        "ok": "8655",
        "ko": "10215"
    },
    "percentiles3": {
        "total": "12604",
        "ok": "12612",
        "ko": "10228"
    },
    "percentiles4": {
        "total": "16212",
        "ok": "16215",
        "ko": "10276"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8866,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 72,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "74.517",
        "ok": "73.917",
        "ko": "0.6"
    }
}
    },"req_api-for-pages-a2910": {
        type: "REQUEST",
        name: "Api for pages",
path: "Api for pages",
pathFormatted: "req_api-for-pages-a2910",
stats: {
    "name": "Api for pages",
    "numberOfRequests": {
        "total": "8079",
        "ok": "8027",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "2199",
        "ok": "2199",
        "ko": "10177"
    },
    "maxResponseTime": {
        "total": "25131",
        "ok": "25131",
        "ko": "10702"
    },
    "meanResponseTime": {
        "total": "8873",
        "ok": "8865",
        "ko": "10207"
    },
    "standardDeviation": {
        "total": "2895",
        "ok": "2902",
        "ko": "71"
    },
    "percentiles1": {
        "total": "8376",
        "ok": "8361",
        "ko": "10191"
    },
    "percentiles2": {
        "total": "10270",
        "ok": "10284",
        "ko": "10213"
    },
    "percentiles3": {
        "total": "14577",
        "ok": "14583",
        "ko": "10227"
    },
    "percentiles4": {
        "total": "18009",
        "ok": "18020",
        "ko": "10460"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8027,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 52,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "67.325",
        "ok": "66.892",
        "ko": "0.433"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
