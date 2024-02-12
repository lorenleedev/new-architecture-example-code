type Error = {
  /** 서버에서 내려주는 구체적인 에러 코드 */
  code?: string;
  errors?: { [key: string]: string };
};

// TODO: Server에서 내려주는 응답에 따라 수정 필요
export type UsecaseResponse<T> = {
  /** API 호출 결과인 경우에만 존재하는 http status code */
  http: number | null;
  /** API 호출 응답값의 성공/실패 여부, 실패인 경우에는 data에 Error타입의 값을 넣어줘야함 */
  success: boolean;
  /** 성공 혹은 실패에 대한 대표 메세지 */
  message: string;
  /** 응답 데이터 */
  data?: Error | T;
};
