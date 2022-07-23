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

    const waitlistID = "https://discord.com/api/webhooks/1000293661650726952/3NA_1d7X-drm3L0dOBnyaB1HfMsZbWz0fty3XoJ4qGT5LNf0mONioOvuduRT9rFCZcHf";

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