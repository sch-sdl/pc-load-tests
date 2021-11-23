var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19965",
        "ok": "19288",
        "ko": "677"
    },
    "minResponseTime": {
        "total": "214",
        "ok": "214",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59111",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "8002",
        "ok": "7949",
        "ko": "9526"
    },
    "standardDeviation": {
        "total": "6445",
        "ok": "6412",
        "ko": "7157"
    },
    "percentiles1": {
        "total": "7879",
        "ok": "7763",
        "ko": "10181"
    },
    "percentiles2": {
        "total": "11702",
        "ok": "11815",
        "ko": "10221"
    },
    "percentiles3": {
        "total": "18979",
        "ok": "19081",
        "ko": "10629"
    },
    "percentiles4": {
        "total": "25528",
        "ok": "25447",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4357,
    "percentage": 22
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 680,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 14251,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "count": 677,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "166.375",
        "ok": "160.733",
        "ko": "5.642"
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
        "total": "10459",
        "ok": "10046",
        "ko": "413"
    },
    "minResponseTime": {
        "total": "214",
        "ok": "214",
        "ko": "278"
    },
    "maxResponseTime": {
        "total": "26860",
        "ok": "26860",
        "ko": "11938"
    },
    "meanResponseTime": {
        "total": "4485",
        "ok": "4330",
        "ko": "8264"
    },
    "standardDeviation": {
        "total": "5198",
        "ok": "5203",
        "ko": "3292"
    },
    "percentiles1": {
        "total": "1523",
        "ok": "1195",
        "ko": "10180"
    },
    "percentiles2": {
        "total": "7477",
        "ok": "7012",
        "ko": "10218"
    },
    "percentiles3": {
        "total": "15558",
        "ok": "15632",
        "ko": "10226"
    },
    "percentiles4": {
        "total": "20813",
        "ok": "20831",
        "ko": "10627"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4357,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 680,
    "percentage": 7
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5009,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 413,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.158",
        "ok": "83.717",
        "ko": "3.442"
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
        "total": "9506",
        "ok": "9242",
        "ko": "264"
    },
    "minResponseTime": {
        "total": "333",
        "ok": "1327",
        "ko": "333"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59111",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "11872",
        "ok": "11883",
        "ko": "11501"
    },
    "standardDeviation": {
        "total": "5378",
        "ok": "5163",
        "ko": "10394"
    },
    "percentiles1": {
        "total": "10786",
        "ok": "10953",
        "ko": "10218"
    },
    "percentiles2": {
        "total": "14026",
        "ok": "14138",
        "ko": "10226"
    },
    "percentiles3": {
        "total": "21465",
        "ok": "21481",
        "ko": "10724"
    },
    "percentiles4": {
        "total": "29889",
        "ok": "29131",
        "ko": "60001"
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
    "count": 9242,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 264,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.217",
        "ok": "77.017",
        "ko": "2.2"
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
