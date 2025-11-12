function check1(){
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ["사과", "바나나", "딸기"];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);

    console.log(arr4[0]);
    console.log(arr4[1]);
    console.log(arr4[2]);

    arr2[0]=100;
    arr2[1]="점심드셨죠?";
    arr2[2]=true;

    console.log(arr2);

    arr1[0]="가";
    arr1[1]="나";
    arr1[2]="다";

    console.log(arr1);

    arr1[4]="마";

    console.log(arr1);
}

function check2(){
    const arr = [];
    for(let i = 0; i <= 3; i++){
        arr[i] = i * 10;
    }
    console.log(arr);

    for(const value of arr){
        console.log(value);
    }

    arr.forEach((value, index) => {
        console.log(index, value);
    });
}