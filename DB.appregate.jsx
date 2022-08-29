db.persons.aggregate([
    { $match: { gender: "female" } },
    { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } },
    { $sort: { totalPersons: -1 } }, // totalPersons only derived field. decending order.
]);

// $group: separates documents into groups accodring to a 'group key'. output: 1 document / unique group key.
//  _id field: the value will be a document. in the $group stage to set the key.
// $ sign: this field which is passed into the group stage so
// pass a document now describe the kind of aggregation fn
// $sum operator: add for every document grouped together. might have multiple documents with the same state and group will only output one

db.persons.aggregate([
    { $match: { "dob.age": { $gte: 50 } } },
    {
        $group: {
            _id: { gender: "$gender" },
            numPersons: { $count: {} },
            avgAge: { $avg: "$dob.age" },
        },
    },
    { $sort: { numPersons: -1 } },
]);

db.persons.find({ "location.state": "sinop" });

/* 
$project:
    요청한 (기존/ 계산된) 필드와 함께 문서를 파이프라인 다음 단계로 전달. 


 */

db.persons.aggregate([{
        $project: {
            _id: 0,
            name: 1,
            location: {
                type: "Point",
                coordinates: ["$location.coordinates.latitude"],
            },
        },
    },
    {
        $project: {
            _id: 0,
            gender: 1,
            fullName: {
                $concat: [
                    "Hello ",
                    { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
                    " ",
                    "$name.last",
                ],
            },
            location: {
                state: 1,
            },
        },
    },
]);

db.persons.aggregate([{
        $project: {
            _id: 0,
            name: 1,
            location: {
                type: "Point",
                coordinates: ["$location.coordinates.latitude"],
            },
        },
    },
    {
        $project: {
            _id: 0,
            gender: 1,
            fullName: {
                $concat: [
                    "Hello ",
                    { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
                    " ",
                    "$name.last",
                ],
            },
        },
    },
]);

db.persons.aggregate([{
    $project: {
        _id: 0,
        name: 1,
        email: 1,
        birthdate: { $convert: { input: "$dob.date", to: "date" } },
        location: {
            type: "Point",
            coordinates: [{
                    $convert: {
                        input: "$location.coordinates.longitude",
                        to: "double",
                        onError: 0,
                        onNull: 0,
                    }
                },
                {
                    $convert: {
                        input: "$location.coordinates.latitude",
                        to: "double",
                        onError: 0,
                        onNull: 0,
                    }
                },
            ]
        },
    },
}, ]);

// { $project: { _id: 0, name: 1, gender: 1, location: 1}},
// 

/* ShortCut Operator */
db.persons.aggregate([{
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            birthdate: { $toDate: '$dob.date' },
            location: {
                type: "Point",
                coordinates: [{ $toDouble: "$location.coordinates.longitude" }, { $toDouble: "$location.coordinates.latitude" }, ]
            },
        },
    },
    { $group: { _id: { birthYear: { $isoWeekYear: "$birthdate" } }, numPersons: { $count: {} } } },
    { $sort: { numPersons: -1 } }
]);

/* 
$group: grouping multiple documents into one doc. || $product: one-one relation.

*/