import { a } from "./a"
import { b } from "./b";
import fs from "fs";
// Inform jest that we want to use the 
jest.mock("./b");


const mockB = jest.mocked(b); 


describe(a, () => {
    it("Outputs 3 lines into the output folder", () => {


        a();
        expect(fs.writeFileSync).toHaveBeenCalledWith("./output/report.txt")


    })
})