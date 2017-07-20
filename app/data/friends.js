// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {"name":"Tin","photo":"aaa","scores":["1","1","1","1","1","1","1","1","1","1"]},
    {"name":"Tin2","photo":"aaa","scores":["2","1","1","1","1","1","1","1","1","1"]},
    {"name":"Tin3","photo":"aaa","scores":["3","1","1","1","1","1","1","1","1","1"]},
    {"name":"Tin4","photo":"aaa","scores":["4","1","1","1","1","1","1","1","1","1"]}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;
