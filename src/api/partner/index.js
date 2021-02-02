import client from '../client';

export const getPartnerData = async (partnerId) => {
    const res = await client.get(`/partner/${partnerId}`);

    return res.data;
}