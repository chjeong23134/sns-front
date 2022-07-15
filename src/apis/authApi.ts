import Axios, {AxiosInstance} from "axios";

const axios: AxiosInstance = Axios.create({
    baseURL: "http://localhost:8080/auth",
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

interface AuthType {
	readonly accessJwt: string;
	readonly user: UserType;
}

export async function signIn(
    email: string,
    password: string
): Promise<AuthType> {
    return await axios
        .post("", {
            email: email,
            password: password,
        })
        .then((res) => res.data);
}