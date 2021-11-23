var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20519",
        "ok": "16852",
        "ko": "3667"
    },
    "minResponseTime": {
        "total": "1457",
        "ok": "1457",
        "ko": "10177"
    },
    "maxResponseTime": {
        "total": "55467",
        "ok": "55467",
        "ko": "13931"
    },
    "meanResponseTime": {
        "total": "13590",
        "ok": "14225",
        "ko": "10675"
    },
    "standardDeviation": {
        "total": "5681",
        "ok": "6069",
        "ko": "980"
    },
    "percentiles1": {
        "total": "12485",
        "ok": "13335",
        "ko": "10198"
    },
    "percentiles2": {
        "total": "15992",
        "ok": "17122",
        "ko": "10225"
    },
    "percentiles3": {
        "total": "25383",
        "ok": "26239",
        "ko": "12961"
    },
    "percentiles4": {
        "total": "32063",
        "ok": "32263",
        "ko": "13223"
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
    "count": 16852,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "count": 3667,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "170.992",
        "ok": "140.433",
        "ko": "30.558"
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
        "total": "11015",
        "ok": "8809",
        "ko": "2206"
    },
    "minResponseTime": {
        "total": "1457",
        "ok": "1457",
        "ko": "10177"
    },
    "maxResponseTime": {
        "total": "37508",
        "ok": "37508",
        "ko": "13931"
    },
    "meanResponseTime": {
        "total": "12859",
        "ok": "13329",
        "ko": "10984"
    },
    "standardDeviation": {
        "total": "5328",
        "ok": "5836",
        "ko": "1162"
    },
    "percentiles1": {
        "total": "11955",
        "ok": "12568",
        "ko": "10218"
    },
    "percentiles2": {
        "total": "14800",
        "ok": "16119",
        "ko": "12308"
    },
    "percentiles3": {
        "total": "22313",
        "ok": "25149",
        "ko": "13097"
    },
    "percentiles4": {
        "total": "32119",
        "ok": "32274",
        "ko": "13238"
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
    "count": 8809,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 2206,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "91.792",
        "ok": "73.408",
        "ko": "18.383"
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
        "total": "9504",
        "ok": "8043",
        "ko": "1461"
    },
    "minResponseTime": {
        "total": "2808",
        "ok": "2808",
        "ko": "10177"
    },
    "maxResponseTime": {
        "total": "55467",
        "ok": "55467",
        "ko": "11257"
    },
    "meanResponseTime": {
        "total": "14438",
        "ok": "15206",
        "ko": "10209"
    },
    "standardDeviation": {
        "total": "5953",
        "ok": "6168",
        "ko": "84"
    },
    "percentiles1": {
        "total": "13194",
        "ok": "14158",
        "ko": "10185"
    },
    "percentiles2": {
        "total": "17078",
        "ok": "18355",
        "ko": "10218"
    },
    "percentiles3": {
        "total": "26029",
        "ok": "26652",
        "ko": "10226"
    },
    "percentiles4": {
        "total": "31786",
        "ok": "32134",
        "ko": "10678"
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
    "count": 8043,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 1461,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.2",
        "ok": "67.025",
        "ko": "12.175"
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
