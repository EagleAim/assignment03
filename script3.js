// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #


let loopingVariable = 0;
while (loopingVariable <= 7){
    if (loopingVariable % 2 == 0){
        console.log("# # # #"); 
    } else if (loopingVariable % 2 == 1){
        console.log(" # # # #");
    } else {
        console.log("Input number is 0 or invalid.");
    }
    loopingVariable += 1;
}