import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SeatsBoard } from "common/components";
import { getSeatListThunk } from "modules/seats";
import { useParams } from "react-router-dom";
import { useSeats } from "common/hooks";

export default function SeatSelectionContainer() {
  const dispatch = useDispatch();
  const { partnerId, roomId } = useParams();
  const { rowSeatCount, colSeatCount } = useSelector(
    (state) => state.rooms.byId[roomId]
  );
  const seatsSlice = useSelector((state) => state.seats);
  const { currentRoomId } = seatsSlice;
  const seatsData =
    roomId == currentRoomId &&
    seatsSlice.allIds.map((id) => seatsSlice.byId[id]);
  const [seats, setSeats] = useSeats(
    rowSeatCount,
    colSeatCount,
    seatsData,
    roomId == currentRoomId
  );

  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSelectSeatClick = (e, id, number) => {
    e.stopPropagation();

    setSelectedSeat({ id, number });
  };

  useEffect(() => {
    dispatch(getSeatListThunk({ partnerId, roomId }));
  }, []);

  if (roomId != currentRoomId || !seats) return "no seats";

  return (
    <SeatsBoard
      seats={seats}
      selectedSeat={selectedSeat}
      onSelectSeatClick={handleSelectSeatClick}
    />
  );
}
