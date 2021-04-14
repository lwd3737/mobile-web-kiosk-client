import React from "react";
import styled, { css } from "styled-components";

export default function Seat({
  id = null,
  x,
  y,
  number = null,
  isAvailable,
  isSelected,
  onClick,
}) {
  const setBgColor = () => {
    if (number) {
      if (isAvailable) {
        return "rgba(0,0,0,0.1)";
      } else {
        return "red";
      }
    }
  };

  return (
    <S.Seat
      bgColor={setBgColor()}
      isSelected={isSelected}
      onClick={(e) => onClick(e, id, number)}
    >
      {number && <div className="number">{number}</div>}
    </S.Seat>
  );
}

const S = {
  Seat: styled.div`
    ${({ theme, bgColor, isSelected }) => {
      const { colors } = theme;

      return css`
        width: 2.5rem;
        height: 2.5rem;
        min-width: 40px;
        min-height: 40px;
        margin: 0.4rem;
        border-radius: 10px;
        background: ${bgColor};
        text-align: center;

        ${isSelected &&
        css`
          border: 3px solid ${colors.green1};
        `};

        .number {
          padding-top: 12%;
          margin-bottom: 5%;
          font-weight: bold;
          color: white;
        }

        .cancel {
          color: #ff000038;
          font-weight: bold;

          &:hover {
            color: red;
          }
        }
      `;
    }}
  `,
};
