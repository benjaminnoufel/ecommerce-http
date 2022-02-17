import remove from "rollup-plugin-delete";
import {resolve} from "path";
import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: resolve("src", "HttpCors.ts"),
    plugins: [
        remove({targets: resolve("lib", "*")}),
        typescript(),
        terser()
    ],
    external: [
        "@benjaminnoufel/http"
    ],
    output: {
        file: resolve("lib", "HttpCors.js"),
        format: "cjs"
    }
};
