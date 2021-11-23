var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23595",
        "ok": "23595",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6866",
        "ok": "6866",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "776",
        "ok": "776",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "701",
        "ok": "701",
        "ko": "-"
    },
    "percentiles1": {
        "total": "599",
        "ok": "599",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1196",
        "ok": "1196",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2054",
        "ok": "2054",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3108",
        "ok": "3108",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13429,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4278,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5888,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "196.625",
        "ok": "196.625",
        "ko": "-"
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
        "total": "11865",
        "ok": "11865",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6866",
        "ok": "6866",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "336",
        "ok": "336",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "percentiles1": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "percentiles2": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles3": {
        "total": "702",
        "ok": "702",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3489",
        "ok": "3489",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11370,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 148,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 347,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "98.875",
        "ok": "98.875",
        "ko": "-"
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
        "total": "11730",
        "ok": "11730",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6234",
        "ok": "6234",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1220",
        "ok": "1220",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "545",
        "ok": "545",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1080",
        "ok": "1080",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1468",
        "ok": "1468",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2251",
        "ok": "2251",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2941",
        "ok": "2941",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2059,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4130,
    "percentage": 35
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5541,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "97.75",
        "ok": "97.75",
        "ko": "-"
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
