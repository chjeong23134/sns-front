import Axios, {AxiosInstance} from "axios";

const axios: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/users",
});

export interface UserType {
    readonly id: number;
    readonly email: string;
    readonly password: string;
    readonly name: string;
    readonly isDeleted: string;
    readonly createDate: Date;
    readonly updateDate: Date;
}

export async function signUp(
    name: string,
    email: string,
    password: string
): Promise<UserType> {
    return await axios
        .post("", {
            name: name,
            email: email,
            password: password,
        })
        .then((res) => res.data);
}