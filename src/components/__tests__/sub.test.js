import { subtract } from "../subtract"

test("The Function should return Subtraction of two mnumbers", ()=>{
    const result = subtract(4,7)
    //Assertion
    expect(result).toBe(3);
});