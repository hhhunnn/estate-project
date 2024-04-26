import axios from "axios";
import { IdCheckRequestDto, SignInRequestDto } from "./dto/request";
import { ID_CHECK_REQUEST_URL, SIGN_IN_REQUEST_URL } from "src/constant";
import { SignInResponseDto } from "./dto/response";
import ResponseDto from "../response.dto";

// function: 로그인 API 함수
// 비동기처리 되기때문에 async로 동기처리해줘야함
export const SignInRequest = async (requestBody: SignInRequestDto) => {
    const result = await axios.post(SIGN_IN_REQUEST_URL, requestBody)
    // 성공할때는 then() 실패하면 catch()로 받음 
    .then(response => {
        const responseBody = response.data as SignInResponseDto;
        return responseBody;
    })
    .catch(error => {
        const responseBody = error.response.data;
        if (!responseBody) return null;
        return responseBody as ResponseDto; 
    });
    return result;
}
// function: 아이디 중복 확인 API 함수
export const IdCheckRequest = async (requestBody: IdCheckRequestDto) => {
    const result = await axios.post(ID_CHECK_REQUEST_URL, requestBody)
    .then(response => {
        const responseBody = response.data as ResponseDto
        return responseBody
    })
    .catch(error => {
        const responseBody = error.response.data;
        if (!responseBody) return null;
        return responseBody;
    });
    return result;
};