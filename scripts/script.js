async function sendRequest(ev) {
    ev.preventDefault();

    const discordName = document.getElementById('discord-name').value;
    const regionSelect = document.getElementById('regions');
    const region = regionSelect.options[regionSelect.selectedIndex].text;
    const currentTime = new Date();
    currentTime.toDateString();

    const webhookBody = {
        embeds: [{
        title: 'Waitlist Submission',
        fields: [
            { name: 'Discord:', value: discordName },
            { name: 'Region:', value: region }
        ],
        footer: {
            text: `Time Submitted: ${currentTime}`
        }
        }],
    };

    const waitlistID = "https://discord.com/api/webhooks/1000497243427704942/DoPAUhNIUtk-VfLWTK7bCzG-npsdKhlvzIJnbTTjNol6lFlXHsTrrp4Dph2Dj0rN12xm";

    const response = await fetch(waitlistID, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      alert('Your waitlist submission has been received!');
    } else {
      alert('There was an error! Try again later!');
    }
}