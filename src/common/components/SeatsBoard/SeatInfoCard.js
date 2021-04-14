import React from "react";
import styled, { css } from "styled-components";

function SeatInfoCard({ number }) {
  return (
    <S.SeatInfoCard>
      <div className="seat-info">{number}번 좌석</div>
      <div className="btn-wrapper">
        <button>구매하기</button>
      </div>
    </S.SeatInfoCard>
  );
}

export default SeatInfoCard;

const S = {
  SeatInfoCard: styled.div`
    ${({ theme }) => {
      const { colors } = theme;
      return css`
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        border: 1px solid ${colors.green1};
        border-radius: 10px;
        width: 100%;
        height: 60px;
        padding: 10px 30px;
        line-height: 38px;
        font-weight: bold;
        font-size: 20px;

        .btn-wrapper {
          display: flex;
          align-items: center;

          button {
            background-color: ${colors.green1};
            color: white;
            padding: 5px 10px;
            border-radius: 10px;
          }
        }
      `;
    }}
  `,
};
