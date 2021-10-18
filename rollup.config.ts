import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import remove from "rollup-plugin-delete";
import {resolve} from "path";
import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/EcommerceHttp.ts",
    plugins: [
        remove({targets: resolve("lib", "*")}),
        typescript(),
        commonjs(),
        nodeResolve(),
        babel({
            babelHelpers: "bundled",
            babelrc: false,
            presets: [
                "@babel/preset-env",
                "@babel/preset-typescript"
            ]
        }),
        terser()
    ],
    external: [
        "@benjaminnoufel/http"
    ],
    output: {
        file: resolve("lib", "EcommerceHttp.js"),
        format: "cjs",
        sourcemap: true
    }
};
