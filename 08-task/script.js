document.getElementById('appointmentForm').onsubmit = event => {
    event.preventDefault();
    const appointment = {
        name: event.target.name.value,
        phone: event.target.phone.value,
        gender: event.target.gender.value,
        date: event.target.date.value,
        time: event.target.time.value
    };
    
    localStorage.setItem('appointment', JSON.stringify(appointment));
    document.getElementById('message').innerText = 'Візит оформлено!';
    event.target.reset();
};
