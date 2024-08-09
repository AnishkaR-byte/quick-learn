import { userApiEnum } from '@src/constants/api.enum';
import axiosInstance from './axios';
import { AxiosSuccessResponse } from './axios';
import {
  TChangePasswordType,
  TUserProfileType,
} from '@src/shared/types/profileTypes';

export const getUserProfileService = async (): Promise<
  AxiosSuccessResponse<TUserProfileType>
> => {
  const response = await axiosInstance.get<
    AxiosSuccessResponse<TUserProfileType>
  >(userApiEnum.GET_USER_PROFILE);
  return response.data;
};

export const updateUserProfileService = async (
  data: TUserProfileType,
): Promise<AxiosSuccessResponse> => {
  const response = await axiosInstance.post<AxiosSuccessResponse<{}>>(
    userApiEnum.GET_USER_PROFILE,
    data,
  );
  return response.data;
};

export const changePasswordService = async (
  data: TChangePasswordType,
): Promise<AxiosSuccessResponse> => {
  const response = await axiosInstance.post<AxiosSuccessResponse<{}>>(
    userApiEnum.CHANGE_PASSWORD,
    data,
  );
  return response.data;
};
