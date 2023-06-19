import { a } from "./a"
import { b } from "./b";
import fs from "fs";
// Inform jest that we want to use the 
jest.mock('fs');
jest.mock("./b");


const mockB = jest.mocked(b); 
mockB.mockReturnValue(["some message1", "some message2", "some message3"]);


describe(a, () => {
    it("Outputs 3 lines into the output folder", () => {


        a();

        const expectedText = `some message1
some message2
some message3`
        expect(fs.writeFileSync).toHaveBeenCalledWith("./output/report.txt", expectedText)


    })
})