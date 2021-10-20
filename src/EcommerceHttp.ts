import {Http} from "@benjaminnoufel/http";

interface IRequest {
    method: string;
    credentials: RequestCredentials;
    mode: RequestMode;
}

const getRequest = ({method, mode, credentials}: IRequest) => (_target: Object, _property: string, descriptor: TypedPropertyDescriptor<any>): any => {
    const old = descriptor.value;

    descriptor.value = function(url: string, options?: RequestInit): TypedPropertyDescriptor<any> {
        return old(new Http()
            .method(method)
            .mode(mode)
            .credentials(credentials)
            .header("Accept", "application/json")
            .header("Content-Type", "application/json")
            .requestInit(options)
            .json(url));
    };

    return descriptor;
};

const postRequest = ({method, mode, credentials}: IRequest) => (_target: Object, _property: string, descriptor: TypedPropertyDescriptor<any>): any => {
    const old = descriptor.value;

    descriptor.value = function(url: string, body: Record<string, any>, options?: RequestInit): TypedPropertyDescriptor<any> {
        return old(new Http()
            .method(method)
            .mode(mode)
            .credentials(credentials)
            .header("Accept", "application/json")
            .header("Content-Type", "application/json")
            .requestInit(options)
            .body(body)
            .json(url));
    };

    return descriptor;
};

const ecommerceRequest = ({mode, credentials}: Omit<IRequest, "method">) => (target: Object, property: string, descriptor: TypedPropertyDescriptor<any>): any => {
    const method = property.toUpperCase();

    if ("get" === property || "delete" === property) {
        return getRequest({method, mode, credentials})(target, property, descriptor);
    }
    if ("post" === property || "patch" === property || "put" === property) {
        return postRequest({method, mode, credentials})(target, property, descriptor);
    }
    return () => {};
};


export class EcommerceHttp {
    @ecommerceRequest({mode: "cors", credentials: "include"})
    public static get<T = any>(request: any, _options?: RequestInit): Promise<T> {
        return request;
    }

    @ecommerceRequest({mode: "cors", credentials: "include"})
    public static post<T = any>(request: any, _body: Record<string, any>, _options?: RequestInit): Promise<T> {
        return request;
    }

    @ecommerceRequest({mode: "cors", credentials: "include"})
    public static patch<T = any>(request: any, _body: Record<string, any>, _options?: RequestInit): Promise<T> {
        return request;
    }

    @ecommerceRequest({mode: "cors", credentials: "include"})
    public static put<T = any>(request: any, _body: Record<string, any>, _options?: RequestInit): Promise<T> {
        return request;
    }

    @ecommerceRequest({mode: "cors", credentials: "include"})
    public static delete<T = any>(request: any, _options?: RequestInit): Promise<T> {
        return request;
    }
}
