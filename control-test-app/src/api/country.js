export const getCountryByName = async (name) => {
    try {
        const response = await fetch (`https://www.freetestapi.com/api/v1/countries?search=${name}`);
        return await response.json();
    } catch (e) {
        return [];
    }
}