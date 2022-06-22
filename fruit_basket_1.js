const input = [{
        "id": "1ceb8c95-736f-4da3-86d9-86d55893b38a",
        "max_weight": 8,
        "contents": [{
            "type": "apple",
            "color": "green",
            "weight": 1.5
        }, {
            "type": "apple",
            "color": "red",
            "weight": 1
        }, {
            "type": "pear",
            "color": "green",
            "weight": 2.5
        }]
    }];




let content = []
for (const fruit of input[0]['contents']) {
    const indexFruit = content.findIndex(element => element.type === fruit.type);
    if (indexFruit === -1) {
        content.push({type: fruit.type, count: 1})
    } else {
        content[indexFruit]['count'] = content[indexFruit]['count'] + 1
    }
}

const output = [{
    id: input[0].id,
    total_fruits: input[0]['contents'].length,
    total_weight: input[0]['contents'].filter((ele) => ele.weight).map(x => x.weight).reduce((a, b) => a + b),
    fruit_counts: content
}]

console.log(input, output, output[0].fruit_counts)

// I am unfimiliar with black box test so providing the scenario for me is a 
//guess and that would be to make sure that all the keys of the object is in the output json file

