import { b } from "./b";
import fs from "fs";
export function a() {
    const ids = ["1", "2", "3"];
    const result = b(ids);
    fs.writeFileSync("./output/report.txt", result.join("\n"))
}