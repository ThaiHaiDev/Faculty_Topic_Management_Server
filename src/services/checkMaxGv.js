const checkMaxGv = (listData, idGv) => {
    let countGv = 0;
    for (var i = 0; i < parseInt(listData.length); i++) {
        if (listData[i].gvhd._id.toString() === idGv) {
            countGv = countGv + 1;
        }
      
    }
    console.log(countGv)
}

module.exports = checkMaxGv