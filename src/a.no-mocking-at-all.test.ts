import { a } from "./a"
import fs from "fs";
describe(a, () => {
    it("Outputs 3 lines into the output folder", () => {

        // Run the function 
        a(); 

        // Read the output file 
        const data = fs.readFileSync("output/report.txt"); 
        const text = data.toString(); 

        const lines = text.split("\n"); 
        expect(lines).toHaveLength(3); 


        // Expect the lines to match a regex
        lines.forEach((v) => {
            expect(v).toMatch(/Item: '(\d+)', value: '(\d+\.\d+)'/);             
            
        });
    })
})