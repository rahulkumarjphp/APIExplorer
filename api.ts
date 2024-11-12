import axios from 'axios';

export const fetchProviders = async () => {
    const response = await axios.get("https://api.apis.guru/v2/providers.json");
    return response.data;
};

export const fetchAPIList = async (providerName: string) => {
    const response = await axios.get(`https://api.apis.guru/v2/${providerName}.json`);
    return response.data;
};