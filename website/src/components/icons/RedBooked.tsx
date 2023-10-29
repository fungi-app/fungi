export const IsRedBookedIcon = (isRedBooked: boolean) =>
  isRedBooked ? (
    <RedBookedIcon />
  ) : (
    <NotRedBookedIcon />
  );

const RedBookedIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="#000">
    <path
      fillRule="evenodd"
      d="M8 2.25h10a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.5.707v2.586A.75.75 0 0 1 18 21.75H7.953l-.092-.006a3.206 3.206 0 0 1-1.196-.323c-.34-.17-.701-.436-.977-.849-.278-.418-.438-.94-.438-1.572V5c0-.631.16-1.155.438-1.572.276-.413.638-.68.977-.849a3.207 3.207 0 0 1 1.288-.328L8 2.25ZM6.75 16.538V5c0-.369.09-.595.187-.74a.966.966 0 0 1 .313-.292v12.391a3.121 3.121 0 0 0-.5.18Zm2-.288V3.75h8.5v12.5h-8.5Zm8 1.5H8.003c-.006 0-.018 0-.035.002a1.71 1.71 0 0 0-.632.169c-.162.08-.3.19-.4.339-.096.144-.186.371-.186.74s.09.596.187.74c.1.15.237.259.398.34a1.71 1.71 0 0 0 .633.168l.035.002h.003-.001 8.745v-2.5ZM10.5 4.25a.75.75 0 0 1 .75.75v1.19l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.56 8l2.47 2.47a.75.75 0 1 1-1.06 1.06l-1.72-1.72V11a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
const NotRedBookedIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="#000">
    <path
      fillRule="evenodd"
      d="M22.03 3.03a.75.75 0 0 0-1.06-1.06l-2.22 2.22V3a.75.75 0 0 0-.75-.75H7.953a3.205 3.205 0 0 0-.388.04c-.237.04-.564.121-.9.29-.34.169-.701.435-.977.848-.278.417-.438.94-.438 1.572v12.69l-3.28 3.28a.75.75 0 1 0 1.06 1.06l19-19Zm-4.78.72v1.94l-4 4L11.56 8l2.47-2.47a.75.75 0 0 0-1.06-1.06l-1.72 1.72V5a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V9.81l.94.94-3.44 3.44V3.75h8.5Zm-10 .218v11.721l-.5.5V5c0-.369.09-.595.187-.74a.966.966 0 0 1 .313-.292Z"
      clipRule="evenodd"
    />
    <path d="M17.25 10v6.25H11a.75.75 0 0 0 0 1.5h5.75v2.5H8.004l-.025-.001a1.812 1.812 0 0 1-.53-.119.75.75 0 0 0-.552 1.394 3.314 3.314 0 0 0 1.063.225l.04.001h10a.75.75 0 0 0 .25-1.457v-2.586a.75.75 0 0 0 .5-.707v-7a.75.75 0 0 0-1.5 0Z" />
  </svg>
);
