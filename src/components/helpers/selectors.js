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

function getInterview(state, interview) {
  if (!interview) return null;
  return { ...interview, interviewer: state.interviewers[interview.interviewer] }
}

function getInterviewersForDay(state, day) {
  let targetDay = state.days.find((d) => { return d.name === day });

  if (!targetDay) {
    return [];
  } else {
    let targetInterviewers = targetDay.interviewers.map(
      (id) => state.interviewers[id]
    )
    return targetInterviewers;
  };
}

export { getAppointmentsForDay, getInterview, getInterviewersForDay };