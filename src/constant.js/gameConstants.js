export const winPath = [14,15,18,19,22,23,26,27,30,31,34,35,38,39,42,43,46,47]
export const redHome =[1,2,3,4,50]
export const blueHome = [57,58,59,60,11]


const red = [56, 55, 54, 53, 49, 45, 41, 37, 33, 29, 25, 21, 17, 13, 9, 5, 6, 7, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 51, 47, 43, 39, 35, 31, 27, 23, 19, 15, 11];

const blue =[5,6,7,8,12,16,20,24,28,32,36,40,44,48,52,56, 55, 54, 53, 49, 45, 41, 37, 33, 29, 25, 21, 17, 13, 9,10,14,18,22,26,30,34,38,42,46,50]
 export const redObject = {0:60};
 export const blueObject = {0:1};

const generatePath = (arr,obj) =>{
    arr.forEach((number, index) => {
        const key = index + 1;
        obj[key] = number;
      });
}
generatePath(red,redObject)
generatePath(blue,blueObject)

