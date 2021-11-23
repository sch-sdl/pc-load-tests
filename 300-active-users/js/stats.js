var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "23781",
        "ok": "23781",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9350",
        "ok": "9350",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1487",
        "ok": "1487",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1473",
        "ok": "1473",
        "ko": "-"
    },
    "percentiles1": {
        "total": "909",
        "ok": "909",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2428",
        "ok": "2428",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4293",
        "ok": "4293",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5879",
        "ok": "5879",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11630,
    "percentage": 49
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 732,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11419,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "198.175",
        "ok": "198.175",
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
        "total": "12030",
        "ok": "12030",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7527",
        "ok": "7527",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "393",
        "ok": "393",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "798",
        "ok": "798",
        "ko": "-"
    },
    "percentiles1": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "percentiles2": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "percentiles3": {
        "total": "716",
        "ok": "716",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5547",
        "ok": "5547",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11532,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 180,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 318,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100.25",
        "ok": "100.25",
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
        "total": "11751",
        "ok": "11751",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "418",
        "ok": "418",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9350",
        "ok": "9350",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2607",
        "ok": "2607",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1123",
        "ok": "1123",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2384",
        "ok": "2384",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3166",
        "ok": "3166",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4762",
        "ok": "4762",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6198",
        "ok": "6198",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 98,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 552,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11101,
    "percentage": 94
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "97.925",
        "ok": "97.925",
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
