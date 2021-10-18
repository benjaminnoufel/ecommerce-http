import {EcommerceHttp} from "./EcommerceHttp";
// @ts-ignore
import fetch from "isomorphic-fetch";

window.fetch = fetch;

describe("ecommerceHttp", (): void => {
    describe("testing decorator", (): void => {
        it("should create a new EcommerceHttp instance with GET decorator", done => {
            expect.assertions(1);

            const expected = {
                userId: 9,
                id: 88,
                title: "sapiente omnis fugit eos",
                body: "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
            };

            EcommerceHttp.get("https://jsonplaceholder.typicode.com/posts/88")
                .then(result => {
                    expect(result).toStrictEqual(expected);
                    done();
                });
        });

        it("should create a new EcommerceHttp instance with POST decorator", done => {
            expect.assertions(1);

            const expected = {
                userId: 9,
                id: 101,
                title: "new post",
                body: "Testing ecommerce HTTP with post decorator"
            };

            EcommerceHttp.post("https://jsonplaceholder.typicode.com/posts", expected)
                .then(result => {
                    expect(result).toStrictEqual(expected);
                    done();
                });
        });

        it("should create a new EcommerceHttp instance with PATCH decorator", done => {
            expect.assertions(1);

            const expected = {
                userId: 9,
                id: 88,
                title: "Updated post",
                body: "Testing ecommerce HTTP with patch decorator"
            };

            EcommerceHttp.patch("https://jsonplaceholder.typicode.com/posts/88", expected)
                .then(result => {
                    expect(result).toStrictEqual(expected);
                    done();
                });
        });

        it("should create a new EcommerceHttp instance with PUT decorator", done => {
            expect.assertions(1);

            const expected = {
                userId: 9,
                id: 88,
                title: "Updated post with put",
                body: "Testing ecommerce HTTP with patch decorator"
            };

            EcommerceHttp.put("https://jsonplaceholder.typicode.com/posts/88", expected)
                .then(result => {
                    expect(result).toStrictEqual(expected);
                    done();
                });
        });

        it("should create a new EcommerceHttp instance with DELETE decorator", done => {
            expect.assertions(1);

            EcommerceHttp.delete("https://jsonplaceholder.typicode.com/posts/1")
                .then(result => {
                    expect(result).toStrictEqual({});
                    done();
                });
        });
    });

    describe("unknown decorator", (): void => {
        it("should create a new EcommerceHttp instance with unknown decorator", () => {
            expect.assertions(1);

            // @ts-ignore
            const result = EcommerceHttp.unknown;

            expect(result).toBeUndefined();
        });
    });
});
