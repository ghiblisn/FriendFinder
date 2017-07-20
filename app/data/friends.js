// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {"name":"Tin","photo":"https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg","scores":["1","1","1","1","1","1","1","1","1","1"]},
    {"name":"Tin2","photo":"https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg","scores":["2","1","1","1","1","1","1","1","1","1"]},
    {"name":"Tin3","photo":"https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg","scores":["3","1","1","1","1","1","1","1","1","1"]},
    {"name":"Tin4","photo":"https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg","scores":["4","1","1","1","1","1","1","1","1","1"]}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;
