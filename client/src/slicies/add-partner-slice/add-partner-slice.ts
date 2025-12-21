import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import apiDataNewton from "src/api/api-data-newton";
import { FetchStatus } from "src/app/app-constans";
import { IPartnerInfo } from "src/app/app-types";
import { RootCompany } from "src/app/app-company-types";

interface IAddPartnerState {
  partnerInfo: IPartnerInfo | null;
  fetchStatus: FetchStatus;
  message: string;
}

const initialState: IAddPartnerState = {
  partnerInfo: null,
  fetchStatus: FetchStatus.Idle,
  message: ""
};

export const fetchAddPartner = createAsyncThunk<IPartnerInfo, string, {rejectValue: string}>(
  "partner/fetchAddPartner",
  async (code: string, {rejectWithValue}) => {
    try {
      
      const response = await apiDataNewton.get<RootCompany>(`&inn=${code}`);

      const data = response.data;
      
      // if ('code' in data) {
      //   console.log('aaa');
        
      //   return rejectWithValue(data.message);
      // }
      // Преобразование Root в IPartnerInfo
      const partnerInfo: IPartnerInfo = {
        formOwnership: data.company.opf,
        shortName: data.company.company_names.short_name,
        fullName: data.company.company_names.full_name,
        innCode: data.inn,
        kppCode: data.company.kpp,
        ogrnCode: data.ogrn,
      };

      return partnerInfo;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        if (error.response.data.code === 1) {
          return rejectWithValue(`${error.response.data.message}. Введите правильный ИНН`)
        }
        return rejectWithValue(`${error.response.data.message} Невалидный ИНН. ИНН должен быть 10 или 12 символов.`);
      }
      return rejectWithValue("Ошибка при получении данных партнера");
    }
  }
)

const addPartnerSlice = createSlice({
  name: "addPartner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddPartner.pending, (state) => {
      state.fetchStatus = FetchStatus.Loading;
      state.message = "";
    });
    builder.addCase(fetchAddPartner.fulfilled, (state, action: PayloadAction<IPartnerInfo>) => {
      state.fetchStatus = FetchStatus.Succeeded;
      state.partnerInfo = action.payload;
      state.message = "Партнер успешно добавлен";
    });
    builder.addCase(fetchAddPartner.rejected, (state, action) => {
      state.fetchStatus = FetchStatus.Failed;
      state.message = action.payload as string || "Неизвестная ошибка при добавлении партнера";
    });
  }
});

export default addPartnerSlice.reducer;