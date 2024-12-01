function rankByViews(views){
    let arr = views
        .map((item, index) => ({ value: item, index })) // Pair each value with its index
        .sort((a, b) => b.value - a.value || a.index - b.index); // Sort descending, break ties by original index

    // Assign ranks while handling ties
    let result = new Array(views.length);
    for (let i = 0; i < arr.length; i++) {
        result[arr[i].index] = i + 1; // Assign unique rank
    }

    return arr;

    

}

const views = [100, 200, 200, 50];
console.log(rankByViews(views));
// output : [4,3,1,2] 
