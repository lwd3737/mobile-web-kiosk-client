import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RoomList } from '../components';
import { getRoomListThunk } from 'modules/rooms';

export default function RoomListContainer(){
    const dispatch = useDispatch();
    const roomsSlice = useSelector(state => state.rooms);
    const rooms = roomsSlice.allIds?.map(id => roomsSlice.byId[id]);
    const { partnerId } = useParams();

    useEffect(() => {
        dispatch(getRoomListThunk(partnerId))
    }, []);

    return (
        <RoomList
            rooms={rooms}
        />
    )
}