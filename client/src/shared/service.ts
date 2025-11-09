import { NavbarLinks } from "src/app/app-constans";
import { AppRouter } from "src/app/app-routes";

export const getHeaderTitle = (title : string) => {
  let headerTitle = '';
  switch (title) {
    case AppRouter.Auth :
      headerTitle = NavbarLinks.Users
      break
    case AppRouter.Main :
      headerTitle = NavbarLinks.Main
      break
    case AppRouter.Register :
      headerTitle = NavbarLinks.UserRegister 
      break
    case AppRouter.Partners:
      headerTitle = NavbarLinks.Partners
      break

  }

  return headerTitle
}

// Функция для форматирования номера телефона
export const formatPhoneNumber = (value: string): string => {
  // Удаляем все нецифровые символы
  const phoneNumber = value.replace(/\D/g, '');
  
  // Если номер начинается с 8, заменяем на 7
  const formattedNumber = phoneNumber.startsWith('8') ? '7' + phoneNumber.slice(1) : phoneNumber;
  
  // Если номер начинается с 7, форматируем
  if (formattedNumber.startsWith('7')) {
    const match = formattedNumber.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
    if (match) {
      const [, code, first, second, third] = match;
      let result = '+7';
      if (code) result += `(${code}`;
      if (first) result += `) ${first}`;
      if (second) result += `-${second}`;
      if (third) result += `-${third}`;
      return result;
    }
  }
  
  return value;
};
