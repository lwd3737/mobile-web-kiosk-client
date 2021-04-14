import client from '../client';

export const getSeatList = async ({partnerId, roomId}) => {
    const res = await client.get(`/${partnerId}/rooms/${roomId}/seats`);
    return res.data;
}