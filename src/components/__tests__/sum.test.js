import { square } from "../sum"

test("This Function should return square of Number" , ()=>{
    //testing sum
    const result = square(5);
    //Assertion
    expect(result).toBe(25);
})