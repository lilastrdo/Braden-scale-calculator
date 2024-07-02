
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Braden Scale Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
        .intervention {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>

    <h1>Braden Scale Calculator</h1>

    <form id="bradenForm">
        <label for="sensory">Sensory Perception:</label>
        <select id="sensory" name="sensory">
            <option value="1">1 (Completely limited)</option>
            <option value="2">2 (Very limited)</option>
            <option value="3">3 (Slightly limited)</option>
            <option value="4">4 (No impairment)</option>
        </select><br><br>

        <label for="moisture">Moisture:</label>
        <select id="moisture" name="moisture">
            <option value="1">1 (Constantly moist)</option>
            <option value="2">2 (Very moist)</option>
            <option value="3">3 (Occasionally moist)</option>
            <option value="4">4 (Rarely moist)</option>
        </select><br><br>

        <label for="activity">Activity:</label>
        <select id="activity" name="activity">
            <option value="1">1 (Bedfast)</option>
            <option value="2">2 (Chairfast)</option>
            <option value="3">3 (Walks occasionally)</option>
            <option value="4">4 (Walks frequently)</option>
        </select><br><br>

        <label for="mobility">Mobility:</label>
        <select id="mobility" name="mobility">
            <option value="1">1 (Completely immobile)</option>
            <option value="2">2 (Very limited)</option>
            <option value="3">3 (Slightly limited)</option>
            <option value="4">4 (No limitations)</option>
        </select><br><br>

        <label for="nutrition">Nutrition:</label>
        <select id="nutrition" name="nutrition">
            <option value="1">1 (Very poor)</option>
            <option value="2">2 (Probably inadequate)</option>
            <option value="3">3 (Adequate)</option>
            <option value="4">4 (Excellent)</option>
        </select><br><br>

        <label for="friction">Friction and Shear:</label>
        <select id="friction" name="friction">
            <option value="1">1 (Problem)</option>
            <option value="2">2 (Potential problem)</option>
            <option value="3">3 (No apparent problem)</option>
        </select><br><br>

        <button type="button" onclick="calculateIntervention()">Calculate</button>
    </form>

    <div class="intervention" id="intervention"></div>

    <script>
        const interventions = {
            sensory: {
                1: 'Use pressure-relieving devices; reposition frequently',
                2: 'Increase frequency of turning; use specialized mattresses',
                3: 'Monitor skin condition; provide support surfaces',
                4: 'Maintain regular repositioning schedule'
            },
            moisture: {
                1: 'Keep skin dry and clean; use moisture barriers',
                2: 'Change bed linens frequently; use absorbent pads',
                3: 'Ensure regular hygiene; monitor incontinence',
                4: 'Maintain proper skin care routine'
            },
            activity: {
                1: 'Encourage passive range-of-motion exercises',
                2: 'Assist with chair exercises; provide pressure relief cushions',
                3: 'Encourage walking; monitor mobility status',
                4: 'Promote regular activity and exercise'
            },
            mobility: {
                1: 'Frequent repositioning; use lifting devices',
                2: 'Assist with turning; provide mobility aids',
                3: 'Encourage movement; provide support for positioning',
                4: 'Maintain normal mobility routines'
            },
            nutrition: {
                1: 'Provide nutritional supplements; consult dietitian',
                2: 'Monitor food intake; encourage nutrient-rich diet',
                3: 'Maintain balanced diet; ensure sufficient protein intake',
                4: 'Promote healthy eating habits'
            },
            friction: {
                1: 'Use lifting devices; avoid dragging during repositioning',
                2: 'Provide friction-reducing aids; ensure proper body alignment',
                3: 'Maintain safe handling techniques'
            }
        };

        function calculateIntervention() {
            const sensory = document.getElementById('sensory').value;
            const moisture = document.getElementById('moisture').value;
            const activity = document.getElementById('activity').value;
            const mobility = document.getElementById('mobility').value;
            const nutrition = document.getElementById('nutrition').value;
            const friction = document.getElementById('friction').value;

            const interventionText = `
                <h2>Interventions</h2>
                <p><strong>Sensory Perception:</strong> ${interventions.sensory[sensory]}</p>
                <p><strong>Moisture:</strong> ${interventions.moisture[moisture]}</p>
                <p><strong>Activity:</strong> ${interventions.activity[activity]}</p>
                <p><strong>Mobility:</strong> ${interventions.mobility[mobility]}</p>
                <p><strong>Nutrition:</strong> ${interventions.nutrition[nutrition]}</p>
                <p><strong>Friction and Shear:</strong> ${interventions.friction[friction]}</p>
            `;

            document.getElementById('intervention').innerHTML = interventionText;
        }
    </script>
</body>
</html>
