import { a } from "./a"

import fs from "fs";
// Inform jest that we want to use the 
jest.mock('fs');

describe(a, () => {
    it("Outputs 3 lines into the output folder", () => {


        jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.1).mockReturnValueOnce(0.2).mockReturnValueOnce(0.3);
        // Run the function 
        a(); 

        const expectedText =`Item: '1', value: '0.1'
Item: '2', value: '0.2'
Item: '3', value: '0.3'`
        expect(fs.writeFileSync).toHaveBeenCalledWith("./output/report.txt",expectedText)


    })
})