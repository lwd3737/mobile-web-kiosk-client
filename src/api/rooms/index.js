import client from '../client';

export const getRoomList = async (partnerId) => {
    const res = await client.get(`${partnerId}/rooms`);
    return res.data;
}