import axios from 'axios';

const API_KEY = ''; // Replace with your actual API key

export const translateToKorean = async (text) => {
    return await translateText(text, 'ko');
};

export const translateToRussian = async (text) => {
    return await translateText(text, 'ru');
};
export const translateToChinese = async (text) => {
    return await translateText(text, 'zh');
};

export const translateToEnglish = async (text) => {
    return await translateText(text, 'en');
};

export const translateToVietnamese = async (text) => {
    return await translateText(text, 'vi');
};

const translateText = async (text, targetLanguage) => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    const response = await axios.post(url, {
        q: text,
        target: targetLanguage,
    });
    return response.data.data.translations[0].translatedText;
};
