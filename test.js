var arr = [1,3,7,1,4];
var item = 1;
function main(arr,item) {
    var result = arr.filter((e) =>{
        return e === item;
    })
    console.log( item + "出现"+result.length + "次")
}
main(arr,item);