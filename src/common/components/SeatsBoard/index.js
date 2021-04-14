import React from "react";
import styled from "styled-components";

import Seat from "./Seat";
import SeatInfoCard from "./SeatInfoCard";

export function SeatsBoard({ seats, selectedSeat, onSelectSeatClick }) {
  const renderSeats = () => {
    return seats.map((row, y) => {
      const cols = row.map((seat, x) => (
        <Seat
          key={`${x},${y}`}
          x={x}
          y={y}
          isSelected={seat && seat.number === selectedSeat?.number}
          onClick={onSelectSeatClick}
          {...seat}
        />
      ));

      return <div className="row">{cols}</div>;
    });
  };

  return (
    <S.SeatsBoard>
      <div className="seats">{renderSeats()}</div>
      {selectedSeat.number && <SeatInfoCard number={selectedSeat.number} />}
    </S.SeatsBoard>
  );
}

const S = {
  SeatsBoard: styled.div`
    position: relative;
    height: 70vh;
    padding-bottom: 10vh;

    .seats {
      overflow: auto;
      max-height: 80%;

      .row {
        display: flex;
        justify-content: center;
      }
    }
  `,
};
