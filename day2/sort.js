function sortArray(){
    const arr1 = [9,3,6,5,4,1001];
    arr1.sort((a,b) => {
        return a-b
    })
    console.log(arr1)
}

sortArray();