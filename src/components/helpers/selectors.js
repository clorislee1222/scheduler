function getAppointmentsForDay(state, day) {
  let targetDay = state.days.find((d) => d.name === day);

  if (!targetDay) {
    return [];
  } else {
    let targetAppointments = targetDay.appointments.map(
      (appointmentId) => state.appointments[appointmentId]
    );
    return targetAppointments;
  }
}

export { getAppointmentsForDay };