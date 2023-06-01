import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = state.days.map((day) => {
          if (day.appointments.includes(id)) {
            // Check if the appointment already has an interview
            if (!state.appointments[id].interview) {
              // Decrease spots only if the appointment didn't have an interview before
              return { ...day, spots: (day.spots - 1) }
            }
          }
          return day;
        });
        setState({
          ...state,
          appointments,
          days
        })
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        const days = state.days.map((day) => {
          if (day.appointments.includes(id)) {
            return { ...day, spots: (day.spots + 1) }
          }
          return day;
        });
        setState({
          ...state,
          appointments,
          days
        })
      })
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}

export default useApplicationData;